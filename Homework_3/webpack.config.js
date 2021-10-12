
const { resolve } = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');



module.exports = {
    entry: './js/main.js',
    output: {
        path: resolve(__dirname, 'dist'),
        filename: 'js/main_bundle[contenthash].js'
    },
    module: {
        rules: [
            {
                test: /\.(mp3|mp4)$/i,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]',
                }
            },
            {
                test: /\.(png|jpe?g|webp|gif|svg|)$/i,
                use: [
                    {
                        loader: 'img-optimize-loader',
                        options: {
                            name: '[path][name].[ext]',
                            compress: {
                                mode: 'high',
                            }
                        }
                    }]
            },
            {
                test: /\.scss$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),
        new HTMLWebpackPlugin({
            template: resolve(__dirname, 'index.html')
        }),
    ]
};