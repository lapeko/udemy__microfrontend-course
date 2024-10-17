const {merge} = require("webpack-merge")
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const webpackCommon = require("./webpack-common");

const devConfig = {
    mode: 'development',
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devServer: {
        port: 8081,
        static: './dist',
        hot: true,
        open: false,
    },
    devtool: 'inline-source-map',
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Marketing',
            template: './public/index.html'
        })
    ],
}

module.exports = merge(webpackCommon, devConfig)