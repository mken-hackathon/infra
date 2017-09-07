"use strict";
const config = require("config");

module.exports = {
  MerchantSiteCdn: {
    Type: "AWS::CloudFront::Distribution",
    Properties: {
      DistributionConfig: {
        DefaultRootObject: "index.html",
        DefaultCacheBehavior: {
          AllowedMethods: ["GET", "HEAD"],
          Compress: true,
          ForwardedValues: {
            QueryString: false
          },
          TargetOriginId: "origin-site-s3",
          ViewerProtocolPolicy: "https-only"
        },
        Origins: [
          {
            Id: "origin-site-s3",
            DomainName: `${config.bucketName}.s3.amazonaws.com`,
            S3OriginConfig: {
              //OriginAccessIdentityを設定するにはCFnだけじゃ出来ない
              //一回はコンソールを触る必要がある
              OriginAccessIdentity: `origin-access-identity/cloudfront/${config.cloudFront.identity}`
            }
          }
        ],
        ViewerCertificate: {
          //ACMは事前に手で登録すべし
          AcmCertificateArn: config.domain.acm,
          SslSupportMethod: "sni-only"
        },
        Aliases: [config.domain.name],
        Enabled: true
      }
    }
  }
};
