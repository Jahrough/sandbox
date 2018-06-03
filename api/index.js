const express = require('express');
const app = express();
const routes = require("./routes/routeFactory.js");

app.use('/products', routes.products);
app.use('/users', routes.users);

module.exports = app;