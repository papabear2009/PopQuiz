// submit if user exists login function, else sign up
console.log("login.js")

$("#signupBtn").click(function(event){
    event.preventDefault();
    const userObj = {
        username:$("#username").val(),
        password:$("#password").val()
    }
    $.ajax({
        url:"/signup",
        method:"POST",
        data: userObj
    }).done(function(data){
        console.log('data');
        alert('sign up worked!')
        location.href = "/home"
    }).fail(function(err){
        console.log(err);
        alert("something went wrong!")
        location.reload();
    })
})

$("#loginBtn").click(function(event){
    event.preventDefault();
    const userObj = {
        username:$("#username").val(),
        password:$("#password").val()
    }
    console.log(userObj);
    $.ajax({
        url:"/login",
        method:"POST",
        data: userObj
    }).done(function(data){
        console.log(data);
        alert('logged in!');
        location.href = "/home"
    }).fail(function(err){
        console.log(err);
        alert("something went wrong!")
        location.reload();
    })
})