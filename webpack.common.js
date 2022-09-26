const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const OutputDir = path.resolve(__dirname, 'dist')

module.exports = {
    entry:  ['./src/index.js', 'webpack-hot-middleware/client'],
    output: {
        filename: '[name].js',
        path: OutputDir
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.jsx'],
        modules: [path.resolve(__dirname, 'src', 'components'), 'node_modules']          
    },
    plugins: [
        new HtmlWebpackPlugin()
    ],
    module: {
        rules: [{
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/i,
        use: ['style-loader','css-loader','postcss-loader'],
      }],
  },
}
