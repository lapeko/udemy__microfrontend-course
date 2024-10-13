const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  mode: 'development',
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 8082,
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html' }),
    new ModuleFederationPlugin({
      name: 'cart_app',
      filename: 'remoteEntry.js',
      shared: {
        "@faker-js/faker": {
          singleton: true,
        }
      },
      exposes: {
        './cart-index': './src/index',
      },
    }),
  ],
};
