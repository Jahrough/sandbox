const routeFactory = function() {
	const routes = this;
	const routeList = [
		{ name: 'service', source: './service' },
		{ name: 'user', source: './user' }
	];

	routeList.forEach((route) => {
		routes[route.name] = require(route.source);
	});
};

module.exports = new routeFactory;
