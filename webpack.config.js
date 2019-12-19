const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/app.tsx',
	resolve: {
		extensions: ['.ts', '.tsx', '.js']
	},
	output: {
		path: path.join(__dirname, '/dist'),
		filename: 'bundle.min.js'
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: 'awesome-typescript-loader'
			},
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader'
			},
			{
				test: /\.(jpg|jpeg|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
				loader: 'file-loader'
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html'
		})
	],
	devServer: {
		port: 9000
	}
};
