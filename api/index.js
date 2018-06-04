const express = require('express');
const app = express();
const express = require('body-parser');
const morgan = require("morgan");

const routes = require("./routes/routeFactory.js");

app.use.apply(bodyParser.urlencoded({ extended: false }));
app.use.apply(bodyParser.json());

// Used for logging
app.use(morgan("dev"));

// Routes which handle requests
app.use('/products', routes.products);
app.use('/users', routes.users);


app.use((req, res, next) => {
    const error = new Error("Not Found!!!!");
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    const error = new Error("Not Found!!!!");
    error.status(error.status || 500).json({
        message: error.message
    });
});



module.exports = app;