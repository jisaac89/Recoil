var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/dev-server',
    './index.tsx'
  ],
  output: {
    path: path.join(__dirname, './static'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"production"'
      }
    })
  ],
  module: {
    loaders:  [
			{
			    test: /\.ts(x?)$/,
			    loader: 'babel-loader?presets[]=es2015&presets[]=react!ts-loader',
          include: [
            path.join(__dirname),
            path.join(__dirname, '../src')
          ]
			},
			{ test: /\.less$/,  loader: 'style!css!less'},
      { test: /\.json$/, loader: 'json-loader' }
		]
  },
    resolve: {
      extensions: ["", ".webpack.js", ".web.js", ".js", ".ts", ".tsx"]
    }
};
