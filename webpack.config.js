var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    devtool: 'eval',
    entry: [
        path.resolve(__dirname, 'src/index.ts')
    ],
    output: {
        library: 'ReactRecoil',
        libraryTarget: 'commonjs',
        path: path.join(__dirname, 'dist'),
        filename: 'index.js',
        publicPath: 'dist'
    },
    externals: {
        react: {
            root: 'React',
            commonjs2: 'react',
            commonjs: 'react',
            amd: 'react'
        },
        'react-dom': {
            root: 'ReactDOM',
            commonjs2: 'react-dom',
            commonjs: 'react-dom',
            amd: 'react-dom'
        }
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
            include: /src/
        }, {
            test: /\.less$/,
            loader: 'style-loader!css-loader!less-loader'

        }, {
            test: /\.json$/,
            loader: 'json-loader'
        }]
    },
    resolve: {
        extensions: ["", ".webpack.js", ".web.js", ".js", ".ts", ".tsx"]
    },
    node: {
        fs: "empty"
    }
};
