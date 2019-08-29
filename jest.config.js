const path = require("path");

module.exports = {
  testEnvironment: "jest-environment-jsdom-global",
  moduleNameMapper: {
    "^lodash-es$": "lodash",
    "\\.(css)$": "identity-obj-proxy",
    "\\.(gif|ttf|eot|svg|png)$": path.resolve(__dirname, "./test/file-mock.js"),
  },
  setupFilesAfterEnv: [path.resolve(__dirname, "./test/tests-setup.js")],
};
