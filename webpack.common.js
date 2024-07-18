const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require("copy-webpack-plugin")

const OutputDir = path.resolve(__dirname, 'dist')
const ComponentsDir = path.resolve(__dirname, 'src', 'components')
const ImagesPath = path.resolve(__dirname, 'images')

module.exports = {
  entry: ['./src/index.js'],
  output: {
    filename: '[name].js',
    path: OutputDir,
    assetModuleFilename: '[name][ext][query]'
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
    modules: [ComponentsDir, 'node_modules']
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'SS2 HRTF Dataset - RLR Audio',
      favicon: path.resolve(ImagesPath, 'RL_Pyramid_BlueGrey.svg')
    }),
    new CopyPlugin({
      patterns: [
        { from: path.resolve(__dirname, 'images') }
      ],
    }),
  ],
  module: {
    rules: [{
      test: /\.[jt]sx?$/,
      exclude: /node_modules/,
      use: ['babel-loader'],
    },
    
    {
      test: /\.(md|txt)$/i,
      type: 'asset/source'
    },
    {
      test: /\.(png|jpe?g|svg|zip|pdf)$/i,
      type: 'asset/resource',
      use: [path.resolve(__dirname, 'lib', 'filestat_loader.js')]
    }],
  }
}
