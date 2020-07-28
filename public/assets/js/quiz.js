$(document).ready(function () {
    $('.carousel').carousel()

    $('#startBtn').on("click", function () {
        let quizLink = $('#quizLink').val();
        window.location.href = quizLink;
    })

    $(".music").click(function () {
        $("#categoryText").text("Music");
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
        $("#categoryText").text("Movies");
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
            url: "/ajax/" + quizVal,
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

    // $("#playAgainBtn").on('click', function(){
    //     let leaderboardId = $('#leaderboardId').val();
    //     location.href = "http://localhost:3000/quiz/" + leaderboardId;
    // })

    $(".btnAnswer").click(function (event) {
        const questionAnswer = $(this).text();
        console.log(questionAnswer)
  
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
                console.log(data);
                console.log(quizVal)
                location.href = "/leaderboard/" + quizVal
            })
            console.log("Quiz is over")
        } else {
            indexCounter++;
            scoreCounter++
            let counter = indexCounter + 1;
            $.ajax({
                url: "/ajax/" + quizVal,
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