const webpackMerge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const commonConfig = require('./webpack.base.js');

module.exports = webpackMerge(commonConfig, {
    entry: {
        'index': './test/index'
    },
    output: {
        publicPath: '/',
        filename: '[name]_[hash:8].js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Flyme Design',
            template: 'test/index.html',
            filename: 'index.html',
            chunks: ['index']
        })
    ],
    devServer: {
        host: '0.0.0.0'
    }
});