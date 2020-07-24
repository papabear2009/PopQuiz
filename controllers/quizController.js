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