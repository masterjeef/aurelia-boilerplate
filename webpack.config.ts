const {AureliaPlugin} = require('aurelia-webpack-plugin');
import * as HtmlWebpackPlugin from 'html-webpack-plugin';
import * as webpack from 'webpack';
import * as path from 'path';

const outputDirectory = 'dist';
const sourceDirectory = 'src';
const nodeModuleDirectory = path.resolve(__dirname, 'node_modules');

const webpackConfig: webpack.Configuration = {
    entry: 'aurelia-bootstrapper',
    context: path.resolve(__dirname),
    output: {
        path: path.resolve(__dirname, outputDirectory),
        publicPath: '/',
        filename: '[name].bundle.js',
        chunkFilename: '[name].chunk.js'
    },
    devtool: 'source-map',
    watch: true,
    module: {
        rules: [
            {
                test: /\.html?$/,
                use: 'html-loader'
            },
            {
                test: /\.ts?$/,
                use: ['babel-loader', 'ts-loader']
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js'],
        modules: [sourceDirectory, nodeModuleDirectory]
    },
    devServer: {
        inline: true,
        contentBase: '/',
        historyApiFallback: true,
        port: 8080
    },
    plugins: [
        new AureliaPlugin({
            aureliaApp: undefined // <- https://github.com/aurelia/webpack-plugin/issues/95 - ¯\_(ツ)_/¯
        }),
        new HtmlWebpackPlugin({
            template: 'index.html'
        })
    ]
}

export default webpackConfig;