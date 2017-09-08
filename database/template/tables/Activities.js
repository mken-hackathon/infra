"use strict";
const config = require("config");
module.exports = {
  TableName: `${config.tags.System}.${config.tags.Stage}.Activities`,
  AttributeDefinitions: [
    { AttributeName: "actid", AttributeType: "S" },
  ],
  KeySchema: [
    { AttributeName: "actid", KeyType: "HASH" },
  ],
  ProvisionedThroughput: {
    ReadCapacityUnits: 1,
    WriteCapacityUnits: 1
  },
  GlobalSecondaryIndexes: []
};