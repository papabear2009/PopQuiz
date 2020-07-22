var express = require("express");


var db = require("./models");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.static("public"));


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({
  defaultLayout: "main"
}));
app.set("view engine", "handlebars");

// require("./routes/api-routes")(app);

db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App now listening on port:", PORT);
  });
});