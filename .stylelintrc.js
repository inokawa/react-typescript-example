module.exports = {
  extends: ["stylelint-config-standard"],
  overrides: [
    {
      files: ["src/**/*.{js,jsx,ts,tsx}"],
      customSyntax: "postcss-styled-syntax",
      rules: {
        "no-empty-first-line": null,
      },
    },
  ],
};
