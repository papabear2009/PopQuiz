$(document).ready(function () {
    $('.carousel').carousel()

    $('#startBtn').on("click", function () {
        let quizLink = $('#quizLink').val();
        window.location.href = quizLink;
        // console.log("start button");
        // const categoryObj = {
        //     sharelink: $(".categoryInput").val()
        // }

        // console.log(categoryObj);
    })

    $(".music").click(function () {
        $(".categoryInput").val("Music");
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
        $(".categoryInput").val("Sports");
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
                QuizId: quizVal
            }
            $.ajax({
                url: "/score",
                method: "POST",
                data: quizObj
            }).then(function (data) {
                // console.log(data)
                console.log(quizVal)
                location.href = "/leaderboard/" + quizVal
                // $.ajax({
                //   url: "/leaderboard/" + quizVal,
                //   method:"GET",
                // }).then(function(leaders){
                //   // $('#scores').text(leaders.User.username)
                //   console.log(leaders)
                // })

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
});