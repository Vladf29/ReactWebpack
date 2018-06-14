const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const path = require("path");
const webpack = require("webpack");

module.exports = {
  cache: false,
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: "html-loader"
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
          "postcss-loader"
        ]
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          // 'style-loader',
          "css-loader"
        ]
      }
    ]
  },
  resolve: {
    alias: {
      components: path.resolve(__dirname, "./src/components"),
      containers: path.resolve(__dirname, "./src/containers"),
      styles: path.resolve(__dirname, "./src/styles"),
      actions: path.resolve(__dirname, "./src/actions"),
      store: path.resolve(__dirname, "./src/store"),
      reducers: path.resolve(__dirname, "./src/reducers")
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "./index.html",
      template: "./src/index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    port: 3000,
    historyApiFallback: true,
    inline: true,
    hot: true
  }
};
