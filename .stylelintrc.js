module.exports = {
  extends: ["stylelint-config-standard"],
  overrides: [
    {
      files: ["src/**/*.{js,jsx,ts,tsx}"],
      customSyntax: "@stylelint/postcss-css-in-js",
      rules: {
        "no-empty-first-line": null,
      },
    },
  ],
};
