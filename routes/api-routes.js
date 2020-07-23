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
      let counter = 2;
      // console.log(randomQuestions);
      for (let i = 0; i < 10; i++) {
        let randomQuestion = results[Math.floor(Math.random() * 50)];
        const foundQuestion = quizArr.find(question => question.id===randomQuestion.id)
        if(!foundQuestion){
          randomQuestion.quizId = counter;
          console.log(randomQuestion);
          quizArr.push(randomQuestion);
        } else {
          let randomQuestion = results[Math.floor(Math.random() * 50)];
          const foundQuestion = quizArr.find(question => question.id===randomQuestion.id)
          if(!foundQuestion){
            randomQuestion.quizId = counter;
            console.log(randomQuestion);
            quizArr.push(randomQuestion);
          }
        }
      };


    
      const formatted = quizArr.map(function(object){
        const newObj = {
            quizId:object.quizId,
            Q:object.Q,
            Correct:object.correct,
            A2: object.A2,
            A3: object.A3,
            A4: object.A4
        }
        return newObj
    })
    
    db.Quizzes.bulkCreate(formatted).then(function(result){
        console.log("Quiz Saved")
    })

      res.json(quizArr);
    })
  });


  // app.post("/api/authors", function(req, res) {
  // });

  // app.delete("/api/authors/:id", function(req, res) {
  // });

};