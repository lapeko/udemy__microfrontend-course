const HtmlWebpackPlugin = require("html-webpack-plugin");
const {ModuleFederationPlugin} = require('webpack').container;
const {dependencies} = require("./package.json");
const ExternalTemplateRemotesPlugin = require("external-remotes-plugin");
const path = require("path");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");

module.exports = {
    mode: 'development',
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devServer: {
        port: 8080,
        static: './dist',
        hot: true,
        open: false,
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [["@babel/preset-env"], ["@babel/preset-react"]],
                        plugins: ["@babel/plugin-transform-runtime"],
                    }
                },
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Container',
            template: './public/index.html'
        }),
        new ModuleFederationPlugin({
            name: "Container",
            remotes: {
                "marketing-mf": "marketing@http://localhost:8081/remoteEntry.js",
            },
            shared: dependencies,
        }),
        new ExternalTemplateRemotesPlugin(),
    ],
}