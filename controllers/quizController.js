//Handlebars//
var express = require("express");

var router = express.Router();

var db = require("../models/index.js")
router.get("/", function(req, res) {
  db.selectAll(function(data) {
    var hbsObject = { data };
    //console.log(hbsObject);
    res.render("index", data);
  });
});

router.get("/quiz/:id", function(req,res){
    db.Quizzes.findAll({
        where: {
          id: req.params.id
        },
        include: [
          db.Questions
        ]
      }).then(function (data) {
        res.render("questions", data);
      })
})