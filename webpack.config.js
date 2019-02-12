const HTMLWebpackPlugin = require("html-webpack-plugin");
const webpackMerge = require("webpack-merge");

const modeConfig = env => require(`./build-utils/webpack.${env}`)(env);
const presetConfig = require("./build-utils/loadPresets");

module.exports = ({ mode, presets } = { mode: "production", presets: [] }) => {
  return webpackMerge(
    {
      mode,
      module: {
        rules: [
          {
            test: /\.woff2?$/,
            use: ["file-loader"]
          },
          {
            test: /\.css$/,
            use: ["style-loader", "css-loader"]
          },
          {
            test: /\.scss$/,
            use: ["style-loader", "css-loader", "sass-loader"]
          },
          {
            test: /\.jsx?$/,
            exclude: "/node_modules/",
            use: ["babel-loader", "eslint-loader"]
          },
          {
            test: /\.png$/,
            use: [
              {
                loader: "url-loader",
                options: {
                  limit: 5000
                }
              }
            ]
          },
          {
            test: /\.svg$/,
            use: ["file-loader", "svgo-loader"]
          }
        ]
      },
      entry: ["./src/App.js"],
      plugins: [
        new HTMLWebpackPlugin({
          title: "mdn.dev",
          template: "./src/tmpl/index.html"
        })
      ]
    },
    modeConfig(mode),
    presetConfig({ mode, presets })
  );
};
