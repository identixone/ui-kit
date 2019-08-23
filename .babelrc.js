const { NODE_ENV } = process.env;

const isDev = String(NODE_ENV) === "development";
const isProd = String(NODE_ENV) === "production";
const isTest = String(NODE_ENV) === "test";

module.exports = {
  presets: ["@babel/preset-react"].concat(
    !isDev
      ? [
          [
            "@babel/preset-env",
            {
              modules: isTest ? "commonjs" : false,
              targets: {
                browsers: [
                  "last 2 versions",
                  "safari >= 7",
                  "ie > 10",
                  "not op_mini all",
                ],
              },
            },
          ],
        ]
      : []
  ),
  plugins: [
    "@babel/plugin-proposal-object-rest-spread",
    ["@babel/plugin-proposal-class-properties", { loose: false }],
    "babel-plugin-syntax-dynamic-import",
    "@babel/plugin-transform-runtime",
    isDev ? "babel-plugin-styled-components" : false,
    isProd ? "transform-react-remove-prop-types" : false,
    isTest ? "babel-plugin-dynamic-import-node" : false,
  ].filter(Boolean),
};
