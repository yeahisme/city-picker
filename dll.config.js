const webpack = require('webpack');

const vendors = [
    'immutable',
    'react',
    'react-dom',
    'mice-city-data'
];

module.exports = {
    output: {
        path: './',
        filename: '[name].js',
        library: '[name]'
    },
    entry: {
        lib: vendors
    },
    plugins: [
        new webpack.DllPlugin({
            path: 'manifest.json',
            name: '[name]',
            context: __dirname
        })
    ]
};
