const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.ts',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    port: 9000
  },
  output: {
    libraryTarget: "var"
  },
  externals: [
      {
          "window": "window"
      }
  ],
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Development',
      template: './index.html',
    }),
    new webpack.ProvidePlugin({
      Urbit: "@urbit/http-api",
  })
  ],
  resolve: {
    extensions: ['.ts', '.js'],
    fallback: {
      http: false
    }
  },
  output: {
    path: `${__dirname}/dist`,
    filename: 'bundle.js',
  },
  optimization: {
    minimize: false,
    usedExports: true
  },
};
