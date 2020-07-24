var db = require("../models");

var express = require("express");

// var path = require("path");

// // var db = require("./models");

// var app = express();
// app.use(express.static(__dirname + '/public/assets'));



module.exports = function (app) {
  app.get("/api/questions", function (req, res) {
    db.Questions.findAll({}).then(function (results) {
      res.json(results);
    });
  });

  app.get("/api/questions/:category", function (req, res) {
    db.Questions.findAll({
      where: {
        category: req.params.category
      }

    }).then(function (results) {
      let quizArr = [];
      for (let i = 0; i < 10; i++) {
        let randomQuestion = results[Math.floor(Math.random() * 50)];
        const foundQuestion = quizArr.find(question => question.id === randomQuestion.id)
        if (!foundQuestion) {
          quizArr.push(randomQuestion);
        } else {
          let randomQuestion = results[Math.floor(Math.random() * 50)];
          const foundQuestion = quizArr.find(question => question.id === randomQuestion.id)
          if (!foundQuestion) {
            quizArr.push(randomQuestion);
          }
        }
      };

      db.Quizzes.create({
        quizName: "test"
      }).then(function (data) {
        for (let i = 0; i < quizArr.length; i++) {
          data.addQuestions(quizArr[i].id)
        }
        res.json(quizArr);
      })
    })
  });

  app.get("/", function(req, res){
      res.render("index");
  })

  app.get("/quiz/:id", function (req, res) {
    db.Quizzes.findOne({
      where: {
        id: req.params.id
      },
      include:[db.Questions]
    }).then(function (data) {
      console.log("This is data " , data.toJSON());
      // const dataObj = {
      //   Q: data.Q,
      //   Correct:data.Correct,
      //   A2: data.A2,
      //   A3: data.A3,
      //   A4: data.A4
      // }
      res.render("questions", data.toJSON());
    })
      // res.json(data);
  });

  app.get("/quiz/ajax/:id", function (req, res) {
    db.Quizzes.findOne({
      where: {
        id: req.params.id
      },
      include:[db.Questions]
    }).then(function (data) {
      console.log("This is data " , data.toJSON());
      // const dataObj = {
      //   Q: data.Q,
      //   Correct:data.Correct,
      //   A2: data.A2,
      //   A3: data.A3,
      //   A4: data.A4
      // }
      res.json(data.toJSON());
    })
      // res.json(data);
  });

  app.get("/score/username", function (req, res) {
    db.Score.create({
      score: 5,
      where: {
        username: req.params.username,
        // quizId: req.params.quizId
      },
        include:[
          db.Quizzes, db.User
        ]
    }).then(function (data) {
      res.json(data);
    });
  })
  // app.delete("/api/authors/:id", function(req, res) {
  // });

};