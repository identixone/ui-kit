const path = require("path");
const merge = require("webpack-merge");
const webpack = require("webpack");

const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const InlineManifestWebpackPlugin = require("inline-manifest-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const { config, PATHS } = require("./webpack.config");

module.exports = merge(config, {
  devtool: "hidden-source-map",

  entry: {
    client: [path.join(PATHS.src, "index.js")],
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
    ],
  },

  plugins: [
    new CleanWebpackPlugin(),
    new InlineManifestWebpackPlugin(),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,
    }),
  ],
});
