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
    [
      "@babel/preset-react",
      {
        // TODO: Remove this after upgrading to babel v8 because automatic is probably default in v8.
        runtime: "automatic",
      },
    ],
    "@babel/preset-typescript",
  ],
};
