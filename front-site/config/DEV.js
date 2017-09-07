"use strict";

const C = require("./const");

module.exports = {
  stackName: `${C.SYSTEM}-${C.STAGE}-FRONT-SITE`,
  timeoutInMinutes: 45,
  tags: {
    System: C.SYSTEM,
    Stage: C.STAGE
  },
  //custom settings
  prefix: `${C.SYSTEM}-${C.STAGE}`,
  bucketName: "team2-mken-hackathon",
  domain: {
    name: "team2-front.mken.site",
    zone: "mken.site.",
    // 注 現在は us-east-1 に配置されたACMしか使えない
    acm:"arn:aws:acm:us-east-1:347867041416:certificate/4b4abfe8-17f3-4a76-bb66-590e9bffe8fe"
  },
  cloudFront: {
    identity: "E22NSLRVEXHCVK"
  }
};
