var db = require("../models");

var router = require("express").Router();
const bcrypt = require("bcrypt");
const session = require("express-session")




router.get("/api/questions", function (req, res) {
  db.Questions.findAll({}).then(function (results) {
    res.json(results);
  });
});

router.get("/api/questions/:category", function (req, res) {
  db.Questions.findAll({
    where: {
      category: req.params.category
    },
    include: [
      db.Quizzes
    ]

  }).then(function (results) {
    let quizArr = [];
    while (quizArr.length < 11) {
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

router.get("/", function (req, res) {
  res.render("index");
})

router.get("/home", (req, res) => {
  res.render("home");
})
router.get("/score", (req, res) => {
  res.render("score");
})

router.get("/ajax/:id", function (req, res) {
  db.Quizzes.findOne({
    where: {
      id: req.params.id
    },
    include: [db.Questions]
  }).then(function (data) {
    console.log("This is data ", data.toJSON());
    res.json(data.toJSON());
  })
});

router.get("/quiz/:id", function (req, res) {
  db.Quizzes.findOne({
    where: {
      id: req.params.id
    },
    include: [db.Questions]
  }).then(function (data) {

    res.render("questions", data.toJSON());
  })

  // res.json(data);
});

router.post("/score", function (req, res) {
  // console.log(req.session);
  if (!req.session.user) {
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

router.get("/leaderboard/:id", (req, res) => {
  db.Score.findAll({
    where: {
      QuizId: req.params.id,
    },
    order: [['score', 'DESC']],
    include: [db.User]
  }).then(function (result) {
    // console.log(result);
    // console.log(score)
    const leaderArr = result.map(function(score, i){
      const scoreObj = {
        score: score.dataValues.score,
        username: score.User.dataValues.username
      }
      return scoreObj
    })
    const leaderObj = {
      "leaders" : leaderArr
    }
   res.render("score", leaderObj)
  })
})
module.exports = router;