const path = require("path");
const webpack = require("webpack");
const toBoolean = require("to-boolean");

const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");

// --------
// environment variables
const {
  NODE_ENV,
  ENV = NODE_ENV,
  DEBUG = false,
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
  src: path.resolve(__dirname, "src"),
  build: path.resolve(__dirname, "dist"),
  node_modules: path.resolve(__dirname, "node_modules"),
};
// --------

const config = {
  context: PATHS.src,

  mode: NODE_ENV,

  devtool: "hidden-source-map",

  entry: {
    client: [path.join(PATHS.src, "index.js")],
  },

  output: {
    path: PATHS.build,
    publicPath: "/",
    filename: "index.js",
  },

  resolve: {
    modules: [PATHS.src, "node_modules"],
    extensions: [".js", ".jsx"],
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/i,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },

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
              name: "images/[name].[ext]",
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
              name: "images/[name].[ext]",
            },
          },
        ],
      },

      {
        test: /\.(ttf|eot|woff|woff2)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "fonts/[name].[ext]",
          },
        },
      },
    ],
  },

  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        VERSION: JSON.stringify(VERSION),
        DEBUG: toBoolean(DEBUG),
        NODE_ENV: JSON.stringify(NODE_ENV),
        ENV: JSON.stringify(ENV),
      },
    }),

    new CleanWebpackPlugin(),

    new MiniCssExtractPlugin({
      filename: `styles/main.css`,
    }),

    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,
    }),
  ],
};

module.exports = config;
