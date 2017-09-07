"use strict";
const config = require("config");

module.exports = {
  DocumentBucket: {
    Type: "AWS::S3::Bucket",
    Properties: {
      BucketName: config.bucketName
    }
  },
  DocumentBucketPolicy: {
    Type: "AWS::S3::BucketPolicy",
    Properties: {
      Bucket: { Ref: "DocumentBucket" },
      PolicyDocument: {
        Id: "S3PolicyId1",
        Statement: [
          {
            Sid: "2",
            Effect: "Allow",
            Principal: {
              AWS:
                `arn:aws:iam::cloudfront:user/CloudFront Origin Access Identity ${config.cloudFront.identity}`
            },
            Action: "s3:GetObject",
            Resource: `arn:aws:s3:::${config.bucketName}/*`
          }
        ]
      }
    }
  }
};
