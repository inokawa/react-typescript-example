module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: ["eslint:recommended"],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    semi: ["error", "always"],
    indent: ["error", 2],
  },
  overrides: [
    {
      files: ["**/*.{ts,tsx}"],
      extends: [
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
      ],
      parser: "@typescript-eslint/parser",
      plugins: ["@typescript-eslint"],
    },
    {
      files: ["**/*.{jsx,tsx}"],
      extends: ["plugin:react/recommended", "plugin:react-hooks/recommended"],
      rules: {
        "react/prop-types": "off",
      },
    },
    {
      files: ["**/*.{spec,test}.{js,ts,jsx,tsx}"],
      extends: ["plugin:jest/recommended"],
      plugins: ["jest"],
      env: {
        "jest/globals": true,
      },
    },
  ],
};
