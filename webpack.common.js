const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // devtool: "hidden-nosources-cheap-source-map",
  entry: {
    main: "./src/index.js",
    vendor: "./src/vendor.js",
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html", // 告訴webpack index.html 要用哪個template file
    }),
  ],

  module: {
    rules: [
      // {
      //   test: /\.css$/,
      //   // 後面的會先被執行，css先style後
      //   use: ["style-loader", "css-loader"],
      // },
      {
        test: /\.scss$/,
        // 後面的會先被執行，sass 轉成 css 轉成 js再inject to DOM
        use: ["style-loader", "css-loader", "sass-loader"],
      },

      {
        test: /\.html$/,
        use: ["html-loader"],
      },
      // file loader deprecated, use asset build-in in webpack 5 instead
      {
        test: /\.(svg|png|jpg|gif)$/,
        type: "asset/resource",
      },
    ],
  },
};
