//Catagory carousel//

$(document).ready(function () {
  $('.carousel').carousel();
});

$(document).ready(function () {
  $(".music").click(function () {
    $("#categoryText").text("Music");
    // let queryObj = {
    //   category: req.body.category
    // }
    console.log("Music");
    $.ajax({
      url: "/api/questions/music",
      method: "GET"
    }).then(function (data) {
      let quizArr = data[0].Quizzes;
      let newArr = [];
      for (let i = 0; i < quizArr.length; i++) {
        newArr.push(quizArr[i].quizQuestions.QuizId);
        console.log(newArr);
      }
      let quizId = newArr.pop();
      $(".categoryInput").val("http://localhost:3000/quiz/" + quizId);
    })
  })
  $(".sports").click(function () {
    $("#categoryText").text("Sports");
    // let queryObj = {
    //   category: req.body.category
    // }
    console.log("Sports");
    $.ajax({
      url: "/api/questions/sports",
      method: "GET"
    }).then(function (data) {
      console.log(data);
      // console.log(data[4].Quizzes);
      let quizArr = data[0].Quizzes;
      let newArr = [];
      for (let i = 0; i < quizArr.length; i++) {
        newArr.push(quizArr[i].quizQuestions.QuizId);
        console.log(newArr);
      }
      let quizId = newArr.pop();
      let siteURL = location.href;
      $(".categoryInput").val("http://localhost:3000/quiz/" + quizId);
    })
  })
  $(".movies").click(function () {
    $("#categoryText").text("Film");
    // let queryObj = {
    //   category: req.body.category
    // }
    console.log("Movies");
    $.ajax({
      url: "/api/questions/film",
      method: "GET"
    }).then(function (data) {
      let quizArr = data[0].Quizzes;
      let newArr = [];
      for (let i = 0; i < quizArr.length; i++) {
        newArr.push(quizArr[i].quizQuestions.QuizId);
        console.log(newArr);
      }
      let quizId = newArr.pop();
      $(".categoryInput").val("http://localhost:3000/quiz/" + quizId);
    })
  })
});

function count(num) {
  let indexCounter = num + 1;
  console.log(indexCounter);
}

$(document).ready(function () {
  const quizVal = $('#quizId').val();
  $.ajax({
    url: "/quiz/ajax/" + quizVal,
    method: "GET"
  }).then(function (data) {
    console.log(data);
    $("#question").text(data.Questions[0].Q);
    $("#correct").text(data.Questions[0].Correct)
    $("#A2").text(data.Questions[0].A2)
    $("#A3").text(data.Questions[0].A3)
    $("#A4").text(data.Questions[0].A4)
    $('#counter').text("1");
  })
});

let scoreCounter = -1
let indexCounter = 0;
let score = 0;
function correctAnswer() {
  score++;
  return score
}

$(".btnAnswer").click(function (event) {
  const questionAnswer = $(this).text();
  console.log(questionAnswer)
  const quizVal = $('#quizId').val();
  event.preventDefault();
  if (indexCounter === 9) {
    const quizObj = {
      score: score,
      QuizId:quizVal
  }
    $.ajax({
      url: "/score",
      method: "POST",
      data: quizObj
    }).then(function (data) {
      console.log(data)
      $.ajax({
        url: "/leaderboard/" + quizVal,
        method:"GET",
      }).then(function(leaders){
        console.log('leaders', leaders)
      })
    })
    console.log("Quiz is over")
  } else {
    indexCounter++;
    scoreCounter++
    let counter = indexCounter + 1;
    $.ajax({
      url: "/quiz/ajax/" + quizVal,
      method: "GET"
    }).then(function (data) {
      //console.log(data.Questions[1]);//
      $("#question").text(data.Questions[indexCounter].Q);
      $("#correct").text(data.Questions[indexCounter].Correct)
      $("#A2").text(data.Questions[indexCounter].A2)
      $("#A3").text(data.Questions[indexCounter].A3)
      $("#A4").text(data.Questions[indexCounter].A4)
      $('#counter').text(counter);
      if (questionAnswer === data.Questions[scoreCounter].Correct) {
        correctAnswer();
        console.log(score)
      } else {
        console.log("somestring")
      }
    })
  }
});

//start button
$('#startBtn').on("click", function(){
 let quizLink = $('#quizLink').val();
 window.location.href = quizLink;
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