var path = require("path");

// Routing
module.exports = function(app, path) {
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
});

    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
};