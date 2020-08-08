/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, 'src', 'app.js'),
    optimization: {
        minimize: true,
        minimizer: [],
        splitChunks: {
            chunks: 'all',
            minSize: 20000,
            maxSize: 100000,
            maxAsyncRequests: 30,
            maxInitialRequests: 30,
        },
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [],
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            scriptLoading: 'defer',
            inject: 'body',
        }),
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 4200,
        hot: false,
        liveReload: true,
        publicPath: '/',
        watchContentBase: true,
    },
};
