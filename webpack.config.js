let webpack = require('webpack');
let path = require("path");
let HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname,"dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {test: /\.css$/, use: [{loader: 'style-loader'}, {loader: 'css-loader'}]},
            {test: /\.(html)$/, use: {loader: 'html-loader', options: {attrs: [':data-src']}}},
            {test: /\.(woff(2)?|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader", query: {limit: '10000', name: '[name].[ext]', outputPath: 'fonts/'}}
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Devfest Conferences Management App"
        }),
        new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
        Popper: ['popper.js', 'default'],
        Util: "exports-loader?Util!bootstrap/js/dist/util",
        Dropdown: "exports-loader?Dropdown!bootstrap/js/dist/dropdown"
      })
    ]
};
