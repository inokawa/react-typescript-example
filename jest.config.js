module.exports = {
  testEnvironment: "jsdom",
  // for Jest ESM support
  transform: {
    "\\.[jt]sx?$": "ts-jest",
  },
  extensionsToTreatAsEsm: [".ts", ".tsx"],
  globals: {
    "ts-jest": {
      useESM: true,
    },
  },
  moduleNameMapper: {
    "^(\\.{1,2}/.*)\\.js$": "$1",
  },
};
