"use strict";
const config = require("config");
module.exports = {
  TableName: `${config.tags.System}.${config.tags.Stage}.Presets`,
  AttributeDefinitions: [
    { AttributeName: "bid", AttributeType: "S" },
  ],
  KeySchema: [
    { AttributeName: "bid", KeyType: "HASH" },
  ],
  ProvisionedThroughput: {
    ReadCapacityUnits: 1,
    WriteCapacityUnits: 1
  },
  GlobalSecondaryIndexes: []
};