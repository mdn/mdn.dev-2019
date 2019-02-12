const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = () => ({
  devtool: "nosources-source-map",
  entry: ["./src/App.js"],
  output: {
    path: path.join(__dirname, "../static"),
    filename: "[name].[hash].js"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new CopyWebpackPlugin([{ from: "./src/media/favicon144.png" }])
  ]
});
