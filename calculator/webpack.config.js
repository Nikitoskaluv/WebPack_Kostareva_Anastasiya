const { resolve } = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    entry: './js/main.js',
    output: {
        path: resolve(__dirname, 'dist'),
        filename: 'main.[contenthash].js'
    },
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif|mp3)$/i,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]',
                }
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
        new BundleAnalyzerPlugin({
            analyzerMode: 'server',
            generateStatsFile: false,
            statsOptions: { source: false }
        }
        ),
    ]
};
