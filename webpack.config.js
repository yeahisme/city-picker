const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, './src/index'),

    output: {
        path: './dist/',
        filename: '[name].js',
        library: 'CityPicker',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    externals: {
        classnames: {
            root: 'classnames',
            commonjs: 'classnames',
            commonjs2: 'classnames',
            amd: 'classnames'
        },
        immutable: {
            root: 'immutable',
            commonjs: 'immutable',
            commonjs2: 'immutable',
            amd: 'immutable'
        },
        react: {
            root: 'react',
            commonjs: 'react',
            commonjs2: 'react',
            amd: 'react'
        }
    },

    plugins: [
        // new webpack.DefinePlugin({
        //     'process.env': config.build.env
        // }),
        new ExtractTextPlugin('[name].css')
    ],

    module: {
        loaders: [
            // html
            { test: /\.htm(l?)$/, loader: 'html-loader' },
            { test: /\.js$/, loader: 'babel-loader', query: { compact: false } },
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
