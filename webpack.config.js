const path = require("path");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
    },
    module: {
        rules: [
            {
                //for .css files
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'] //the order of the loaders is crucial
            },
            {
                //for images
                test: /\.(png|jpg|jpeg|svg|gif)$/i,
                type: 'asset/resource' //built-in support
            }
        ]
    }
}