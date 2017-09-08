"use strict";

const config = require("config");

"use strict";
module.exports = {
  AWSTemplateFormatVersion: "2010-09-09",
  Description: "PalThrow DynamoDB Tables Stack",
  Resources: {
    Activities: table(require("./tables/Activities")),
    Presets: table(require("./tables/Presets")),
  }
};
function table(definitionObject) {
  return {
    Type: "AWS::DynamoDB::Table",
    Properties: definitionObject
  };
}