$(document).ready(function () {
    // $("#homeBtn").click(function (event) {
    //     event.preventDefault()
    //     location.href="/home"
    // })
    const url = window.location.href;
    let urlArr = url.split("/");
    let id = urlArr.pop();
    console.log(urlArr);
    $.ajax({
        url: "/leaderboard/" + id,
        method: "GET"
    })
    // }).then(function(data){
    //     console.log("here");
    // })

})