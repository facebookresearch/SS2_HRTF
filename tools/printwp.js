if (process.argv.length <= 2) {
    console.log('Pass environment as first argument: node printwp.js [dev|prod]')
    return
}

const webpack = require(`../webpack.${process.argv[2]}.js`)

let argIdx = 3
let objectToPrint = webpack

while (argIdx < process.argv.length)
    objectToPrint = objectToPrint[process.argv[argIdx++]]

console.log(objectToPrint)
