//Catagory carousel//

$(document).ready(function () {
  $('.carousel').carousel();
});

$(document).ready(function () {
  $(".music").click(function () {
      $(".categoryInput").val("Music");
      // let queryObj = {
      //   category: req.body.category
      // }
      console.log("Music");
      $.ajax({
        url: "/api/questions/music",
        method: "GET"
      }).then(function(data){
        let quizArr = data[0].Quizzes;
        let newArr = [];
        for(let i = 0;i<quizArr.length;i++){
          newArr.push(quizArr[i].quizQuestions.QuizId);
          console.log(newArr);
        }
        let quizId = newArr.pop();
        $(".categoryInput").val("http://localhost:3000/quiz/" + quizId);
      })
  })
  $(".sports").click(function () {
    $(".categoryInput").val("Sports");
    // let queryObj = {
    //   category: req.body.category
    // }
    console.log("Sports");
    $.ajax({
      url: "/api/questions/sports",
      method: "GET"
    }).then(function(data){
      console.log(data);
      // console.log(data[4].Quizzes);
      let quizArr = data[0].Quizzes;
      let newArr = [];
      for(let i = 0;i<quizArr.length;i++){
        newArr.push(quizArr[i].quizQuestions.QuizId);
        console.log(newArr);
      }
      let quizId = newArr.pop();
      $(".categoryInput").val("http://localhost:3000/quiz/" + quizId);
    })
  })
  $(".movies").click(function () {
    $(".categoryInput").val("Movies");
    // let queryObj = {
    //   category: req.body.category
    // }
    console.log("Movies");
    $.ajax({
      url: "/api/questions/film",
      method: "GET"
    }).then(function(data){
      let quizArr = data[0].Quizzes;
      let newArr = [];
      for(let i = 0;i<quizArr.length;i++){
        newArr.push(quizArr[i].quizQuestions.QuizId);
        console.log(newArr);
      }
      let quizId = newArr.pop();
      $(".categoryInput").val("http://localhost:3000/quiz/" + quizId);
    })
  })
});

function count(num){
  let indexCounter = num + 1;
  console.log(indexCounter);
}

$(document).ready(function(){
  const quizVal = $('#quizId').val();
  $.ajax({
    url: "/quiz/ajax/" + quizVal,
    method: "GET"
  }).then(function(data){
    console.log(data);
    $("#question").text(data.Questions[0].Q);
    $("#correct").text(data.Questions[0].Correct)
    $("#A2").text(data.Questions[0].A2)
    $("#A3").text(data.Questions[0].A3)
    $("#A4").text(data.Questions[0].A4)
    $('#counter').text("1");
  })
}); 


let indexCounter = 0;

  $(".btnAnswer").click(function(event){
    const quizVal = $('#quizId').val();
    event.preventDefault();
    if(indexCounter === 9){
      // take me to scores
      console.log("Quiz is over")
    } else {
      indexCounter++;
      let counter = indexCounter+1;
      // count(indexCounter);
      $.ajax({
        url: "/quiz/ajax/" + quizVal,
      method: "GET"
    }).then(function(data){
      //console.log(data.Questions[1]);//
      console.log(data);
      $("#question").text(data.Questions[indexCounter].Q);
      $("#correct").text(data.Questions[indexCounter].Correct)
      $("#A2").text(data.Questions[indexCounter].A2)
      $("#A3").text(data.Questions[indexCounter].A3)
      $("#A4").text(data.Questions[indexCounter].A4)
      $('#counter').text(counter);
    })
    }
  })

//Questions page//
$(document).ready(function () {
  var questionCount = 1;
  $("#startBtn").on("click", function () {
    console.log("start button");
    const categoryObj = {
      sharelink: $(".categoryInput").val()
    }
    
    console.log(categoryObj);
  })
});

//   function displayQuestion() {
//       var questionCard = `<div class="row">
//   <div class="col s12">
//       <h4 class="catagoryQuestion center" id="catagoryTrivia">Sports</h4>
//   </div>
// </div>
// <div class="row">
//   <div class="col s12 m6">
//       <div class="card">
//           <div class="card-content">
//               <span class="card-title">Question: <span
//               class="questionNumber">${questionCount}/10:</span>
//                   <p class="cardQuestions">I am a very simple card. I am good at containing small bits of
//                       information.
//                       I am convenient because I require little markup to use effectively.</p>
//           </div>
//       </div>
//       <div class="row answerOne">
//           <div class="col s12">
//               <button class="waves-effect waves-light btnAnswer btn-large" id="btnAnswer">Answer Text, Test Test</button>
//           </div>
//       </div>
//       <div class="row answerOne">
//           <div class="col s12">
//               <a class="waves-effect waves-light btn-large btnAnswer">Answer Text, Test Test Test</a>
//           </div>
//       </div>
//       <div class="row answerOne">
//           <div class="col s12">
//               <a class="waves-effect waves-light btn-large btnAnswer">Answer Text, Test Test Test</a>
//           </div>
//       </div>
//       <div class="row answerOne">
//           <div class="col s12">
//               <a class="waves-effect waves-light btn-large btnAnswer">Answer Text, Test Test Test</a>
//           </div>
//       </div>
//   </div>
// </div>`
//     $(`#questionContainer`).append(questionCard)
//   }
//   displayQuestion();
//   $(".btnAnswer").on("click", function () {
//     questionCount++;
//     var questionNum = `${questionCount}/10:`
//     if (questionCount <= 10){
//     $(`.questionNumber`).html(questionNum)
//     }
//   })
// })