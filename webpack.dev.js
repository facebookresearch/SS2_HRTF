const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const {HotModuleReplacementPlugin} = require('webpack')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');


module.exports = merge(common, {
    entry:  ['webpack-hot-middleware/client'],
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        hot: true,
    },
    plugins: [
        new HotModuleReplacementPlugin(), // for webpack-hot-piddleware
        new ReactRefreshWebpackPlugin() // for react-refresh-webpack-plugin        
    ],
})
