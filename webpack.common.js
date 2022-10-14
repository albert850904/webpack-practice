module.exports = {
  // devtool: "hidden-nosources-cheap-source-map",
  entry: {
    main: "./src/index.js",
    vendor: "./src/vendor.js",
  },

  module: {
    rules: [
      // {
      //   test: /\.css$/,
      //   // 後面的會先被執行，css先style後
      //   use: ["style-loader", "css-loader"],
      // },
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
