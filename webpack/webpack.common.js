const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  entry: path.resolve(__dirname, "..", "./src/index.js"),
  output: {
    path: path.resolve(__dirname, "..", "./build"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "..", "./src/index.html"),
    }),
    new webpack.ProvidePlugin({
      React: "react",
    }),
  ],
};
