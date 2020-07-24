// Handlebars//
var express = require("express");

var router = express.Router();

var db = require("../models");

// var db = require("../models/index.js")
// router.get("/", function(req, res) {
//   db.selectAll(function(data) {
//     var hbsObject = { data };
//     //console.log(hbsObject);
//     res.render("index", hbsObject);
//   });
// });

// router.get("/quiz/:id", function(req,res){
//   console.log("HELLO WORLD")
//     db.Quizzes.findAll({
//         where: {
//           quizId: req.params.id
//         },
//         include: [db.Questions]
//       }).then(function (data) {
//         const quizJSON = data.map(function(quizObj){
//             return quizObj.toJSON();
//         })
//         console.log(quizJSON);
//         res.render("questions", {Quizzes:quizJSON});
//       }).catch(err=>{
//         console.log(err);
//         res.status(500).end();
//     })
// })

// module.exports = router;