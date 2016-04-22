module.exports = {
	entry: [
    './app'
	],
	output: {
		filename: 'bundle.js',
		path: './'
	},
	devServer: {
		inline: true,
		port: 8080
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel?presets[]=react,presets[]=es2015'
			},
			{
				test: /\.css$/,
				exclude: /node_modules/,
				loaders: [
		      'style-loader',
		      'css-loader?modules&localIdentName=[name]__[local]___[hash:base64:5]',
		      'postcss-loader'
		    ]
			}
		]
	},
	postcss: [
    require('autoprefixer-core'),
    require('postcss-color-rebeccapurple')
  ],
	resolve: {
    extensions: ['', '.js', '.css']
  }
}
