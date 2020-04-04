const { NODE_ENV } = process.env;

const isTest = String(NODE_ENV) === "test";

module.exports = {
  presets: [
    "@babel/preset-react",
    [
      "@babel/preset-env",
      {
        modules: isTest ? "commonjs" : false,
        targets: {
          node: "current",
        },
      },
    ],
  ],
  plugins: [
    ["@babel/plugin-proposal-class-properties", { loose: false }],
    isTest ? "babel-plugin-dynamic-import-node" : false,
  ].filter(Boolean),
};
