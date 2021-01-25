const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

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
  plugins: [
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    new HtmlWebpackPlugin({
      title: 'Development',
     }),
  ],
  resolve: {
    extensions: ['.ts', '.js']
  },
  output: {
    path: `${__dirname}/dist`,
    filename: 'bundle.js',
  },
};
