//hides login page after they press login
$(".btnLogin").click(function(){
    $("#loginPage").addClass("hide");
  });
  $(".btnSignUp").click(function(){
    $("#loginPage").addClass("hide");
  });
//hides login page after they press SignUp    
$(".btnLogin").click(function(){
    $("#logoHome").removeClass("hide");
    $(".carousel").removeClass("hide");
    $("#homePage").removeClass("hide");
    $('.carousel').carousel();              //needed for proper carousel function
  });
  $(".btnSignUp").click(function(){
    $("#logoHome").removeClass("hide");
    $(".carousel").removeClass("hide");
    $("#homePage").removeClass("hide");
    $('.carousel').carousel();              //needed for proper carousel function
  });  
  
//Catagory carousel//

  $(document).ready(function(){
    $('.carousel').carousel();
  });