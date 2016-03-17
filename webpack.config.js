var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: {
    'react-recoil': './src/index.ts'
  },
  output: {
    library: 'ReactRecoil',
    libraryTarget: 'umd',
    path: path.join(__dirname, 'static'),
    filename: 'index.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders:  [
			{
			    test: /\.ts(x?)$/,
			    loader: 'babel-loader?presets[]=es2015&presets[]=react!ts-loader',
          include: path.join(__dirname, 'src')
			},
			{ test: /\.less$/,  loader: 'style!css!less'},
      { test: /\.json$/, loader: 'json-loader' }
		]
  },
    resolve: {
      extensions: ["", ".webpack.js", ".web.js", ".js", ".ts", ".tsx"]
    },
    node: {
  fs: "empty"
}
};
