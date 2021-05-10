module.exports = {
  sourceType: "unambiguous",
  presets: [
    [
      "@babel/preset-env",
      {
        corejs: { version: "3.12", proposals: true },
        useBuiltIns: "usage",
        shippedProposals: true,
      },
    ],
    "@babel/preset-react",
    "linaria/babel",
    "@babel/preset-typescript",
  ],
};
