module.exports = {
  sourceType: "unambiguous",
  presets: [
    [
      "@babel/preset-env",
      {
        corejs: { version: "3.21", proposals: true },
        useBuiltIns: "usage",
        shippedProposals: true,
      },
    ],
    "@babel/preset-react",
    "@babel/preset-typescript",
  ],
};
