var db = require("../models");

var express = require("express");
const bcrypt = require("bcrypt");
const session = require("express-session")



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
      },
      include: [
        db.Quizzes
      ]

    }).then(function (results) {
      let quizArr = [];
      while(quizArr.length<11) {
        let randomQuestion = results[Math.floor(Math.random() * 50)];
        const foundQuestion = quizArr.find(question => question.id === randomQuestion.id)
        if (!foundQuestion) {
          quizArr.push(randomQuestion);
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

  app.get("/home", (req, res)=>{
    res.render("home");
  })
  app.get("/score", (req, res)=>{
    res.render("score");
  })

  app.get("/quiz/:id", function (req, res) {
      db.Quizzes.findOne({
      where: {
        id: req.params.id
      },
      include:[db.Questions]
    }).then(function (data) {
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

  app.post("/score", function (req, res) {
    if(!req.session.user){
      res.status(401).end()
    } else {
      const user = req.session.user.id;
      db.Score.create({
        score: req.body.score,
        UserId: user,
        QuizId: req.body.QuizId
      }).then(function (data) {
        res.json(data);
      });
    }
  })

  app.get("/leaderboard/:id", (req, res) => {
    db.Score.findAll({
      where:{
        QuizId: req.params.id,
      },
      order:[['score', 'DESC']],
      include: [db.User]
    }).then(function(result){
      res.json(result)
    })
  })
  // app.delete("/api/authors/:id", function(req, res) {
  // });

};