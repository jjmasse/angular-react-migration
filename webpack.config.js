const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
  entry: './source/index.js',

  output: {
    path: path.resolve(__dirname, '/dist'),
    filename: 'bundle.js'
  },

  target: 'web',

  devServer: {
    contentBase: path.join(__dirname, '/dist')
  },

  module: {
    loaders: [
      {
        test: /\.(js|jsx)/,
        loader: 'babel-loader',
        query: {
          presets: ['env', 'react']
        }
      },
      {
        test: /\.(html)/,
        loader: 'html-loader'
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'source/index.html'),
      fileName: 'index.html',
      inject: 'body'
    })
  ]
}
