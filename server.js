const WebpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
const webpackConfig = require('./webpack.dev.config');

const compiler = webpack(webpackConfig);

new WebpackDevServer(compiler, {
    publicPath: webpackConfig.output.publicPath,
    hot: true,
    historyApiFallback: true
}).listen(3000, 'localhost', (err) => {
    if (err) console.log(err);
    console.log('Listening at localhost:3000');
});
