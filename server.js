var express = require("express");
// var path = require("path");

var app = express();

var PORT = process.env.PORT || 3535;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);

app.listen(PORT, function () {
  console.log("App listening on PORT: " + PORT);
});

module.exports = function(app) {
  
    app.get("/tables", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/tables.html"));
    });
  
    app.get("/reserve", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/reserve.html"));
    });
  
    // If no matching route is found default to home
    app.get("*", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/home.html"));
    });
  };
