var db = require("../models");


module.exports = function (app) {
  app.get("/api/questions", function (req, res) {
    db.Questions.findAll({}).then(function (results) {
      res.json(results);
    });
  });

  app.post("/api/questions/:category", function (req, res) {
    db.Questions.findAll({
      where: {
        category: req.params.category
      }

    }).then(function (results) {
      let quizArr = [];
      // let counter = 1;
      // console.log(randomQuestions);
      for (let i = 0; i < 10; i++) {
        let randomQuestion = results[Math.floor(Math.random() * 50)];
        const foundQuestion = quizArr.find(question => question.id === randomQuestion.id)
        if (!foundQuestion) {
          // randomQuestion.quizId = counter;
          console.log(randomQuestion);
          quizArr.push(randomQuestion);
        } else {
          let randomQuestion = results[Math.floor(Math.random() * 50)];
          const foundQuestion = quizArr.find(question => question.id === randomQuestion.id)
          if (!foundQuestion) {
            // randomQuestion.quizId = counter;
            console.log(randomQuestion);
            quizArr.push(randomQuestion);
          }
        }
      };

      db.Quizzes.create({
        quizName: "test"
      }).then(function(data){
        for (let i = 0; i < quizArr.length; i++) {
          data.addQuestions(quizArr[i].id)
        }
        res.json(quizArr);
      })
    })
  });

  app.get("/quiz/:id", function(req, res){
    db.Quizzes.findAll({
      where: {
        id: req.params.id
      },
      include:[
        db.Questions
      ]
    }).then(function(data){
      res.json(data);
    })
  });

  // app.post("/api/authors", function(req, res) {
  // });

  // app.delete("/api/authors/:id", function(req, res) {
  // });

};