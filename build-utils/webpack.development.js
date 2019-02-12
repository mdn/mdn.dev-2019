module.exports = () => ({
  devtool: "cheap-eval-source-map",
  devServer: {
    hot: true,
    publicPath: "/dist/",
    writeToDisk: true
  },
  output: {
    filename: "bundle.js",
    publicPath: "/dist/"
  }
});
