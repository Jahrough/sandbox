const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require("morgan");
const path = require("path");

const routes = require("./routes/routeFactory.js");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname)));

// Used for logging
app.use(morgan("dev"));

// Routes which handle requests
app.use('/products', routes.products);
app.use('/users', routes.users);

module.exports = app;