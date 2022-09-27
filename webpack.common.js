const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const OutputDir = path.resolve(__dirname, 'dist')
const ComponentsDir = path.resolve(__dirname, 'src', 'components')

module.exports = {
    entry:  ['./src/index.js'],
    output: {
        filename: '[name].js',
        path: OutputDir
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.jsx'],
        modules: [ComponentsDir, 'node_modules']          
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
      },
      {
        test: /\.(md|txt)$/i,
        type: 'asset/source'
      }],
  },
}
