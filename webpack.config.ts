import * as webpack from 'webpack';
import * as path from 'path';

const outputDirectory = 'dist';

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
        extensions: ['.ts', '.js']
    },
    devServer: {
        inline: true,
        contentBase: '/',
        historyApiFallback: true,
        port: 8080
    }
}

export default webpackConfig;