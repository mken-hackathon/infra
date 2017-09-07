"use strict";

const config = require("config");

module.exports = {
  AWSTemplateFormatVersion: "2010-09-09",
  Description: `${config.prefix}-Aurora`,
  Resources: Object.assign(require("./resources/aurora"))
};
