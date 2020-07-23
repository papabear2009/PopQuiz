var db = require("../models");


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
      // console.log(randomQuestions);
      for (let i = 0; i < 10; i++) {
        let randomQuestion = results[Math.floor(Math.random() * 50)];
        const foundQuestion = quizArr.find(question => question.id===randomQuestion.id)
        if(!foundQuestion){
          quizArr.push(randomQuestion);
        }
      };
      // db.Quizzes.create({

      // })
      res.json(quizArr);
    })
  });


  // app.post("/api/authors", function(req, res) {
  // });

  // app.delete("/api/authors/:id", function(req, res) {
  // });

};