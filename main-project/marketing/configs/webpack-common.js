const path = require("path");

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
};
