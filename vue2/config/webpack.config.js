
const paths = require('./paths')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: paths.src,
    output: {
        path: paths.build,
        filename: 'js/[name].js',
    },
    pligins:[new HtmlWebpackPlugin()]
}