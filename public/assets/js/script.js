
//Login and Home Page

//hides login page after they press login
$(".btnLogin").click(function () {
  $("#loginPage").addClass("hide");
  $(".loginFooter").addClass("hide");
});
$(".btnSignUp").click(function () {
  $("#loginPage").addClass("hide");
  $(".loginFooter").addClass("hide");
});
//hides login page after they press SignUp    
$(".btnLogin").click(function () {
  $("#logoHome").removeClass("hide");
  $(".carousel").removeClass("hide");
  $("#homePage").removeClass("hide");
  $(".homeFooter").removeClass("hide");
  $('.carousel').carousel();              //needed for proper carousel function
});
$(".btnSignUp").click(function () {
  $("#logoHome").removeClass("hide");
  $(".carousel").removeClass("hide");
  $("#homePage").removeClass("hide");
  $(".homeFooter").removeClass("hide");
  $('.carousel').carousel();              //needed for proper carousel function
});

//Catagory carousel//

$(document).ready(function () {
  $('.carousel').carousel();
});

$(document).ready(function () {
  $(".music").click(function () {
      $(".categoryInput").val("Music");
      console.log("Music");
  })
  $(".sports").click(function () {
      $(".categoryInput").val("Sports");
      console.log("sports");
  })
  $(".movies").click(function () {
      $(".categoryInput").val("Movies");
      console.log("Movies");
  })
});

$(document).ready(function(){
  let counter = 1;
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
    $('#counter').text(counter);
  })

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