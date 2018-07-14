const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const EslintLoader = require('eslint-loader');

module.exports = {
    entry: {
        app: './src/js/App.js'
    },
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.js/,
                use: [
                    'eslint-loader'
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin('dist'),
        new CopyWebpackPlugin([
            {from: './ressources/images', to: 'images'}
        ]),
        new HtmlWebpackPlugin({
            title: 'CPasCher',
            template: './src/html/index.html'
        })
    ],
    devServer: {
        contentBase: './dist',
        port: 9000,
        overlay: true
    },
    devtool: 'inline-source-map'
}