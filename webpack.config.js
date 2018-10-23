const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const glob = require('glob-all');
const PurifyCSSPlugin = require('purifycss-webpack');
const buildPath = path.join(__dirname, 'public');
const devMode = process.env.NODE_ENV !== 'production';
const staticSourcePath = path.join(__dirname, 'public');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	mode: 'development',
	// Currently we need to add '.ts' to the resolve.extensions array.
	resolve: {
		// Add '.ts' and '.tsx' as resolvable extensions.
		extensions: [ '.ts', '.tsx', '.js', '.json' ]
	},
	entry: {
		app: './docs/index.tsx',
		recoil: './src/index.ts',
		styles: './docs/styles.ts'
	},
	output: {
		library: '[name]',
		libraryTarget: 'var',
		filename: '[name].[hash].js',
		path: path.resolve(__dirname, 'public')
	},
	// Source maps support ('inline-source-map' also works)
	devtool: 'source-map',
	// Add the loader for .ts files.
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: 'ts-loader'
				// include: ['src', 'docs']
			},
			{
				test: /\.(css?.+|less?.+)$/,
				use: [
					MiniCssExtractPlugin.loader,
					// { loader: "style-loader" },
					'css-loader',
					'less-loader'
				]
			},

			{
				test: /\.json$/,
				loader: 'json-loader'
			},
			{
				test: /\.(eot?.+|svg?.+|ttf?.+|otf?.+|woff?.+|woff2?.+)$/,
				use: 'file-loader?name=assets/[name]-[hash].[ext]'
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: 'html-loader',
						options: { minimize: true }
					}
				]
			},
			{
				test: /\.(eot?.+|svg?.+|ttf?.+|otf?.+|woff?.+|woff2?.+)$/,
				use: 'file-loader?name=assets/[name]-[hash].[ext]'
			},
			{
				test: /\.(png|gif|jpg|svg)$/,
				use: [ 'url-loader?limit=20480&name=assets/[name]-[hash].[ext]' ],
				include: staticSourcePath
			}
		]
	},
	plugins: [
		new webpack.optimize.ModuleConcatenationPlugin(),
		new MiniCssExtractPlugin({
			filename: '[name].css',
			chunkFilename: '[id].css'
		}),
		new OptimizeCSSAssetsPlugin({
			cssProcessor: require('cssnano'),
			cssProcessorOptions: { discardComments: { removeAll: true } },
			canPrint: true
		}),
		new HtmlWebPackPlugin({
			template: './docs/template.html',
			filename: './index.html',
			path: buildPath,
			minify: {
				collapseWhitespace: true,
				collapseInlineTagWhitespace: true,
				removeComments: true,
				removeRedundantAttributes: true
			}
		}),
		new PurifyCSSPlugin({
			paths: glob.sync([
				path.join(__dirname, 'docs/**/*.html'),
				path.join(__dirname, 'docs/**/*.tsx'),
				path.join(__dirname, 'docs/**/*.ts'),

				path.join(__dirname, 'src/**/*.html'),
				path.join(__dirname, 'src/**/*.tsx'),
				path.join(__dirname, 'src/**/*.ts'),

				path.join(__dirname, 'public/**/*.html'),
				path.join(__dirname, 'public/**/*.js')
			]),
			styleExtensions: [ '.css', '.less' ],
			purifyOptions: {
				minify: true,
				info: true,
				rejected: true
			}
		}),
		new CompressionPlugin({
			asset: '[path].gz[query]',
			algorithm: 'gzip',
			test: /\.js$|\.css$|\.html$|\.eot?.+$|\.ttf?.+$|\.woff?.+$|\.svg?.+$/,
			threshold: 10240,
			minRatio: 0.8
		}),
		new webpack.optimize.OccurrenceOrderPlugin(),
		new CopyWebpackPlugin([ { from: 'static/**/*' } ])
	],
	optimization: {
		splitChunks: {
			cacheGroups: {
				commons: {
					test: /[\\/]node_modules[\\/]/,
					name: 'vendors',
					chunks: 'all'
				},
				styles: {
					name: 'styles',
					test: /\.(css?.+|less?.+)$/,
					chunks: 'all',
					minChunks: 1,
					reuseExistingChunk: true,
					enforce: true
				}
			}
		},
		minimizer: [
			new UglifyJsPlugin({
				cache: true,
				parallel: true,
				sourceMap: true,
				uglifyOptions: {
					warnings: false,
					screw_ie8: true,
					conditionals: true,
					unused: true,
					comparisons: true,
					sequences: true,
					dead_code: true,
					evaluate: true,
					if_return: true,
					join_vars: true,
					compress: {
						drop_console: true,
						warnings: false, // Suppress uglification warnings
						pure_getters: true
					},
					output: {
						comments: false
					}
				},
				sourceMap: true
			})
		]
	}
};
