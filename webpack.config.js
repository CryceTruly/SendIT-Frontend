const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./public/index.js",
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "index_bundle.js"

    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
            }
        },
        {
            test: /\.scss$/,
            use: [
                "style-loader",
                "css-loader",
                "sass-loader"
            ]
        },

        ]
    },
    plugins: [

        new htmlWebpackPlugin({
            template: "./src/index.html",
            stats: {
                children: false
            }

        }),

    ],

    devServer: {
        historyApiFallback: true
    }
};
