const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const manifest = require('./manifest.json');

module.exports = {
    // eval-source-map is faster for development
    devtool: '#eval-source-map',

    // entry: ['webpack-dev-server/client?http://localhost:3000',
    //     'webpack/HOT/dev-server', path.resolve(__dirname, './demo')],
    // output: {
    //     path: path.resolve(__dirname),
    //     filename: '[name].js'
    // },
    // plugins: [
    //     new webpack.DefinePlugin({
    //         'process.env.NODE_ENV': '"development"'
    //     }),
    //     new ExtractTextPlugin('[name].css'),
    //     new webpack.optimize.OccurenceOrderPlugin(),
    //     new webpack.HotModuleReplacementPlugin(),
    //     new webpack.NoErrorsPlugin(),
    //     new HtmlWebpackPlugin({
    //         filename: 'demo.html',
    //         template: 'demo.html',
    //         inject: true
    //     })
    // ],

    entry: path.resolve(__dirname, './demo'),
    output: {
        path: path.resolve(__dirname),
        filename: '[name].js'
    },
    plugins: [
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest
        }),
        new HtmlWebpackPlugin({
            filename: 'demo.html',
            template: 'tpl.html',
            inject: true
        })
    ],

    module: {
        loaders: [
            // html
            { test: /\.htm(l?)$/, loader: 'html-loader' },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    compact: false
                },
                "presets": [
                    "es2015",
                    "react",
                    "stage-0"
                ],
                "plugins": [
                    [
                        "antd",
                        {
                            "libraryName": "antd",
                            "style": "css"
                        }
                    ]
                ]
            },
            // ts tsx
            { test: /\.tsx?$/, loader: 'ts-loader' },
            // .css 文件使用 style-loader 和 css-loader 来处理
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            // { test: /\.scss$/, loader: 'style!css!scss?sourceMap' },
            { test: /\.(png|jpg|gif)$/, loader: 'url-loader?limit=8192' }
        ]
    },

    resolve: {
        extensions: ['', '.js', '.jsx', 'ts', 'tsx', '.coffee', '.html', '.css', '.scss']
    }
};
