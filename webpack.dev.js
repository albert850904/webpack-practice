const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
  mode: "development",
  // devtool: "hidden-nosources-cheap-source-map",
  output: {
    filename: "[name].bundle.js",
    // 把build好(main.js)的丟到dist這個repo裡面
    path: path.resolve(__dirname, "dist"),
    // file loader deprecated, use asset build-in in webpack 5 instead
    assetModuleFilename: "images/[name][ext]",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html", // 告訴webpack index.html 要用哪個template file
    }),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        // 後面的會先被執行，sass 轉成 css 轉成 js再inject to DOM
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
});
