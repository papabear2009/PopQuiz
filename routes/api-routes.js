var db = require("../models");

module.exports = function(app) {
    app.get("/api/questions", function(req, res) {
        db.Questions.findAll({}).then(function(results) {
          res.json(results);
        });
      });

    app.get("/api/questions/:category", function(req, res) {
      db.Questions.findAll({
        where:{
            category: req.params.category
        }
      }).then(function(results) {
        res.json(results);
      });
    });
  
    // app.get("/api/authors/:id", function(req, res) {
    // });
  
    // app.post("/api/authors", function(req, res) {
    // });
  
    // app.delete("/api/authors/:id", function(req, res) {
    // });
  
  };