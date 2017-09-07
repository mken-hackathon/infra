"use strict";
const config = require("config");

module.exports = {
  "DocsDNS": {
    "Type": "AWS::Route53::RecordSet",
    "Properties": {
      "Type": "A",
      "Name": `${config.domain.name}.`,
      "HostedZoneName": config.domain.zone,
      "AliasTarget": {
        "DNSName": {"Fn::GetAtt": ["MerchantSiteCdn", "DomainName"]},
        "HostedZoneId": "Z2FDTNDATAQYW2"
      }
    }
  }
}
