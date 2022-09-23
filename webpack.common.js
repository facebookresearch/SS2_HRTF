const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const OutputDir = path.resolve(__dirname, 'dist')

module.exports = {
    entry: {
        main: ['./src/index.js']
    },
    output: {
        filename: '[name].js',
        path: OutputDir
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.jsx'],
    },
    plugins: [
        new HtmlWebpackPlugin()
    ],
    module: {
        rules: [{
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      }],
  },
}
