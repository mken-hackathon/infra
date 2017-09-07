const config = require("config");
const fs = require("fs");
const Util = require("cloudformation-z").Util;

module.exports = {
  AWSTemplateFormatVersion: "2010-09-09",
  Description: "Marchant Web App Site",

  Resources: Object.assign(
    require("./s3"),
    require("./dns"),
    require("./cloudfront")
  ),

  Outputs: {
    DocumentBucket: {
      Value: {
        Ref: "DocumentBucket"
      }
    }
  }
};
