const webpack = require("webpack");

module.exports = () => ({
  devtool: "cheap-eval-source-map",
  devServer: {
    hot: true,
    publicPath: "/dist/",
    writeToDisk: true
  },
  entry: [
    "react-hot-loader/patch",
    "webpack-dev-server/client?http://localhost:8080",
    "webpack/hot/only-dev-server",
    "./src/App.js"
  ],
  output: {
    filename: "bundle.js",
    publicPath: "/dist/"
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ]
});
