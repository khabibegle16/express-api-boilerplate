const path = require("path");
 
module.exports = {
    entry: './server/index.js',
    node: {
        __dirname: true,
      },
    output: {
        path: path.resolve(__dirname, 'build')
        ,
        filename: 'main.js'
    },
    target: 'node',
}