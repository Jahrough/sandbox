const express = require('express');
const app = express();

const productRoutes = require("./api/routes/products");
const usersRoutes = require("./api/routes/users");

app.use('/products', productRoutes);
app.use('/users', usersRoutes);

module.exports = app;