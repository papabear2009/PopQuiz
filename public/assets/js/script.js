
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
      $(".catagoryInput").val("Music");
      console.log("Music");
  })
  $(".sports").click(function () {
      $(".catagoryInput").val("Sports");
      console.log("sports");
  })
  $(".movies").click(function () {
      $(".catagoryInput").val("Movies");
      console.log("Movies");
  })
});

//Questions page//
$(document).ready(function () {
  var questionCount = 1;
  $("#startBtn").on("click", function () {
    console.log("start button");
    $.get("/quiz/"+ id, function (data){
      console.log(data);

    }).then(function(data){
      window.location.href = "/questions"
    })

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