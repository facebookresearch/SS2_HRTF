const express = require('express')
const path = require('path')

const app = express()

const isDevelopment = process.env.NODE_ENV !== 'production'

if (isDevelopment) {
    var webpack = require('webpack')
    var webpackConfig = require('../webpack.dev.js')
    var compiler = webpack(webpackConfig)

    app.use(require("webpack-dev-middleware")(compiler, {

    }))

    app.use(require("webpack-hot-middleware")(compiler))
}

app.use(express.static(path.resolve(__dirname, '../dist')))

app.listen(3000, function() {
   console.log("Express app started on port 3000.");
});
