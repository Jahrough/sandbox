const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const routes = require('./routes/routeFactory.js');

(function() {

	// Step 1: Create & configure a webpack compiler
	const webpack = require('webpack');
	const webpackConfig = require(process.env.WEBPACK_CONFIG ? process.env.WEBPACK_CONFIG : '../webpack.config');
	const compiler = webpack(webpackConfig);

	// Step 2: Attach the dev middleware to the compiler & the server
	app.use(require('webpack-dev-middleware')(compiler, {
		logLevel: 'warn', publicPath: webpackConfig.output.publicPath
	}));

	// Step 3: Attach the hot middleware to the compiler & the server
	app.use(require('webpack-hot-middleware')(compiler, {
		log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000
	}));

})();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname)));

// Used for logging
app.use(morgan('dev'));

// Routes which handle requests
app.use('/products', routes.products);
app.use('/users', routes.users);

module.exports = app;
