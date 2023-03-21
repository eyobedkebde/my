const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    entry: './src/index.js',

    output: {
        path: path.join(__dirname, '/dist'),
        filename: "bundle.js"
    },

    plugins: [
        new HTMLWebpackPlugin({
            template: './src/index.html'
        })
    ],

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' }
                ]
            }
        ]
    },
    devServer: {

        proxy: {
            '/api': {
                target: 'http://localhost:8080',
                changeOrigin: true,
            }
        },

        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 9000,
        allowedHosts: "all"
    },
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    }
}