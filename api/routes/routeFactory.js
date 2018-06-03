const routeFactory = function() {
    const routes = this;
    const routeList = [
        { name: "products", source: "./products" },
        { name: "users", source: "./users" }
    ];

    routeList.forEach((route) => {
        routes[route.name] = require(route.source);
    });

};


module.exports = new routeFactory;



