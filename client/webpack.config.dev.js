const htmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');

module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, "main.js"),
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        publicPath: "/",
    },
    devServer: {
        historyApiFallback: true,

        // stats: 'minimal',
        // overlay: true,
        // historyApiFallback: true,
        // disableHostCheck: true,
        // headers: {"Access-Control-Allow-Origin": "*"},
        // https: false
    },
    plugins: [
        new htmlWebpackPlugin({
            template: "static/index.html",
            logo: "static/favicon.ico",
        })
    ],
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                presets: ['@babel/preset-env', '@babel/preset-react']
                }
            },
            {
                test: /\.(css)$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ico']
    }
    
}