var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: [
		'script!jquery/dist/jquery.min.js',
		'script!foundation-sites/dist/foundation.min.js',
		'./app/app.jsx'
	],
	// Exernals and plugins below automatically recognize jquery and require it if it is used on a page.
	externals: {
		jquery: 'jQuery'
	},
	plugins: [
		new webpack.ProvidePlugin({
			'$': 'jquery',
			'jQuery': 'jquery'
		})
	],
	// Tells webpack where the bundle file will go.
	output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
	// Resolve.alias sets up aliases which make require module paths easier ex. require('Main') rather than require('/app/this/that/Main.jsx')
	resolve: {
        root: __dirname,
		modulesDirectories: [
			'node_modules', './app/components/'
		],
        alias: {
			applicationStyles: 'app/styles/styles.scss'
        },
        extensions: ['', '.js', '.jsx']
    },
	// Allows us to use babel to compile ES6, jsx and react code into regular JS
    module: {
        loaders: [{
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015', 'stage-0']
            },
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/
        }]
    },
	sassLoader: {
		includePaths: [
			path.resolve(__dirname, './node_modules/foundation-sites/scss/')
		]
	},
	// This allows us to debug using the precompiled javascipt files rather than the bundled JS
	devtool: 'cheap-module-eval-source-map'
};
