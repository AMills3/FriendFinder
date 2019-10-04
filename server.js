// Dependencies
var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

// Create express app instance
var app = express();
// Set the port of the app
var PORT = process.env.PORT || 3000;

// Sets up Express app for data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Set routes
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

// Start server to begin listening for requests
app.listen(PORT, function () {
    console.log("App is listening on PORT: " + PORT);
});
