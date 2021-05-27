const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: [
    './src/index.ts',
    './src/index.scss'
  ],
  devtool: 'source-map',
  devServer: {
    contentBase: __dirname + '/build'
  },
  module: {
    rules: [{
      test: /\.ts$/,
      use: 'ts-loader'
    }, {
      test: /\.s[ac]ss$/i,
      use: ["style-loader", "css-loader", "sass-loader"],
    }, {
      use: 'file-loader',
      test: /\.(png|jpe?g|ico)/
    }]
  },
  resolve: {
    extensions: ['.ts', '.js', '.scss']
  },
  output: {
    filename: 'bundle.js',
    path: __dirname + '/build'
  },
  plugins: [
    new HtmlWebpackPlugin({ template: 'src/index.html' }),
    new CopyWebpackPlugin({ patterns: [{ from: 'src/assets', to: 'assets' }] })
  ]
};
