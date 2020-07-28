$(document).ready(function () {
    $("#homeBtn").click(function (event) {
        event.preventDefault()
        location.href = "/home"
    })
    const url = window.location.href;
    let urlArr = url.split("/");
    let id = urlArr.pop();
    $.ajax({
        url: "/leaderboard/" + id,
        method: "GET"
    })
})