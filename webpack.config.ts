const { AureliaPlugin } = require('aurelia-webpack-plugin');
import * as HtmlWebpackPlugin from 'html-webpack-plugin';
import * as webpack from 'webpack';
import * as path from 'path';

const outputDirectory = path.resolve(__dirname, 'dist');
const sourceDirectory = path.resolve(__dirname, 'src');
const nodeModuleDirectory = path.resolve(__dirname, 'node_modules');

const webpackConfig: webpack.Configuration = {
    entry: 'aurelia-bootstrapper',
    context: path.resolve(__dirname),
    target: 'web',
    output: {
        path: outputDirectory,
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
                use: [
                    {loader: 'babel-loader'},
                    {loader: 'ts-loader'}
                ]
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
        new AureliaPlugin(),
        new HtmlWebpackPlugin({
            template: 'index.html',
            metadata: {}
        }),
    ]
}

export default webpackConfig;