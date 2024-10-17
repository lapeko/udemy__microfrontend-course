const path = require("path");
const {ModuleFederationPlugin} = require('webpack').container;
const {dependencies} = require("../package.json");

module.exports = {
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
                test: /\.js$/,
                enforce: "pre",
                use: ["source-map-loader"],
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
            {
                test: /\.s?css$/i,
                include: path.resolve(__dirname, "..", 'src'),
                use: ['style-loader', 'css-loader', 'postcss-loader', "sass-loader"],
            },
        ]
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'marketing',
            filename: 'remoteEntry.js',
            exposes: {
                './app': './src/bootstrap',
            },
            shared: dependencies,
        }),
    ],
};
