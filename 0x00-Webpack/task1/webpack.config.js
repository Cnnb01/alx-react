const path = require('path')
module.exports = {
    entry: './js/dashboard_main.js',//path to main js file
    output:{
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js',
    },
    mode: 'production',
}