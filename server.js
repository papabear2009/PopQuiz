var express = require("express");
const bcrypt = require("bcrypt");
const session = require("express-session")
var path = require("path");

var db = require("./models");

var app = express();
var PORT = process.env.PORT || 3000;

// app.use(express.static("public"));
app.use(express.static(path.join(__dirname, '/public/assets')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(session({
  secret:"keyboard cat",
  resave: false,
  saveUninitialized: true,
  cookie: {
      maxAge: 7200000
  }
}))

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({
  defaultLayout: "main"
}));
app.set("view engine", "handlebars");

const authRoutes = require('./controllers/authControllers');
app.use("/auth", authRoutes);

require("./routes/api-routes")(app);
// require("./routes/html-routes")(app);

db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log("App now listening on port:", PORT);
  });
});