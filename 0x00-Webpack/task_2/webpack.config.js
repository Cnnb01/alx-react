const path = require('path')
module.exports = {
    entry: './js/dashboard_main.js',//path to main js file
    output:{
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js',
    },
    mode: 'production',
    module:{
        rules:[
            {
                test:/\.css$/, //regex to match .css files
                use:['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/,
                use: [
                    "file-loader",
          {
            loader: "image-webpack-loader",
            options: {
              bypassOnDebug: true, // webpack@1.x
              disable: true, // webpack@2.x and newer
            },
          },
                ],
            }
        ]
    }
}