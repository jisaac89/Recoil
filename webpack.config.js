var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    devtool: 'eval',
    entry: {
        'bundle': path.resolve(__dirname, 'src/bundle.ts'),
        'docs': path.resolve(__dirname, 'docs/index.tsx')
    },
    output: {
        library: '[name]',
        libraryTarget: 'var',
        filename: './bundle/[name].js'
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: false,
            compress: {
                warnings: true
            }
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        })
    ],
    module: {
        loaders: [{
            test: /\.tsx?$/,
            loader: 'ts-loader',
            include: [/src/, /docs/]
        }, {
            test: /\.less$/,
            loader: 'style-loader!css-loader!less-loader'

        }, {
            test: /\.json$/,
            loader: 'json-loader'
        }]
    },
    resolve: {
        extensions: [".webpack.js", ".web.js", ".js", ".ts", ".tsx"]
    },
    node: {
        fs: "empty"
    }
};
