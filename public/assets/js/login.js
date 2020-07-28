// submit if user exists login function, else sign up
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
        location.href = "/home"
    }).fail(function(err){
        location.reload();
    })
})

$("#loginBtn").click(function(event){
    event.preventDefault();
    const userObj = {
        username:$("#username").val(),
        password:$("#password").val()
    }
    $.ajax({
        url:"/login",
        method:"POST",
        data: userObj
    }).done(function(data){
        location.href = "/home"
    }).fail(function(err){
        location.reload();
    })
})