const path = require("path");
const webpack = require("webpack");
const toBoolean = require("to-boolean");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

// --------
// environment variables
const {
  NODE_ENV,
  ENV = NODE_ENV,
  DEBUG = true,
  npm_package_version: VERSION,
} = process.env;

console.group("Build info");
console.log(`Release version is ${VERSION}`);
console.log(`Webpack version is ${webpack.version}`);
console.log(`Webpack running in ${NODE_ENV} environment`);
console.log(`Current project environment is ${ENV}`);
console.log(`Debug mode is ${toBoolean(DEBUG) ? "ON" : "OFF"}`);
console.groupEnd();

// app paths
const PATHS = {
  src: path.resolve(__dirname, "../../src/"),
  build: path.resolve(__dirname, "../../build/"),
  node_modules: path.resolve(__dirname, "../../node_modules/"),
};
// --------

const filesHashType = NODE_ENV === "production" ? "contenthash" : "hash:8";

const config = {
  context: PATHS.src,

  mode: NODE_ENV,

  output: {
    path: PATHS.build,
    publicPath: "/",
    filename: `js/[name].[${filesHashType}].js`,
    chunkFilename: `js/chunks/chunk.[id].[${filesHashType}].js`,
  },

  resolve: {
    modules: [PATHS.src, "node_modules"],
    alias: {
      "@idx/ui": path.join(PATHS.src, "ui"),
    },
    extensions: [".js", ".jsx"],
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          { loader: "css-loader" },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          { loader: "css-loader" },
          { loader: "sass-loader" },
        ],
      },
      {
        test: /\.(jpg|jpe?g|png|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 4000,
              name: "images/[path][name].[hash:8].[ext]",
            },
          },
          "image-webpack-loader",
        ],
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: "url-loader",
            options: {
              mimetype: "image/svg+xml",
              name: "images/[path][name].[hash:8].[ext]",
            },
          },
        ],
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "fonts/[path][name].[hash:8].[ext]",
          },
        },
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "Identix demo app",
      template: path.join(PATHS.src, "resources/templates/index.ejs"),
      filename: path.join(PATHS.build, "index.html"),
      chunksSortMode: "none",
    }),

    new MiniCssExtractPlugin({
      filename: `styles/[name].[${filesHashType}].css`,
    }),

    new webpack.DefinePlugin({
      "process.env": {
        VERSION: JSON.stringify(VERSION),
        DEBUG: toBoolean(DEBUG),
        NODE_ENV: JSON.stringify(NODE_ENV),
        ENV: JSON.stringify(ENV),
      },
    }),
  ],
};

module.exports = {
  NODE_ENV,
  PATHS,
  VERSION,
  DEBUG,
  config,
};
