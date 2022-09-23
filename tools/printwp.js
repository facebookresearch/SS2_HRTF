if (process.argv.length <= 2) {
    console.log('Pass environment as first argument: node printwp.js [dev|prod]')
    return
}

const webpack = require(`../webpack.${process.argv[2]}.js`)
console.log(webpack)
