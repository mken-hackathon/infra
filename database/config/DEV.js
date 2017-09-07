"use strict";

const C = require("./const");

module.exports = {
  stackName: `${C.SYSTEM}-${C.STAGE}-Database`,
  timeoutInMinutes: 30,
  tags: {
    System: C.SYSTEM,
    Stage: C.STAGE
  },
  prefix: `${C.SYSTEM}-${C.STAGE}`,
};
