const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  // devtool: "hidden-nosources-cheap-source-map",
  output: {
    filename: "[name].[contenthash].bundle.js",
    // 把build好(main.js)的丟到dist這個repo裡面
    path: path.resolve(__dirname, "dist"),
    // file loader deprecated, use asset build-in in webpack 5 instead
    assetModuleFilename: "images/[name].[hash][ext]",
  },
  plugins: [new CleanWebpackPlugin()],
});
