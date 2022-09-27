const { merge } = require('webpack-merge')
const path = require('path')
const common = require('./webpack.common.js')

const OutputDir = path.resolve(__dirname, 'docs')


module.exports = merge(common, {
    mode: 'production',
    output: {
        filename: '[name].js',
        path: OutputDir
    },
})
