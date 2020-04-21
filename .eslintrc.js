module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
    jest: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "prettier",
    "prettier/react",
  ],
  parser: "babel-eslint",
  parserOptions: {
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
  },
  plugins: ["react", "react-hooks"],
  settings: {
    "import/parser": "babel-eslint",
    "import/resolve": {
      moduleDirectory: ["node_modules"],
    },
  },
  rules: {
    "react/no-unused-prop-types": 2,
    "no-console": "off",
    "react/display-name": 0,
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
  },
};
