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
        $("#categoryText").text("Film");
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

        const correctAnswer = `<div class="col s12">
        <button class="waves-effect waves-light btnAnswer btn-large" id="correct">{{Correct}}</button>
    </div>`

        const answerTwo = `<div class="col s12">
        <a id="A2" class="waves-effect waves-light btn-large btnAnswer">{{A2}}</a>
    </div>`

        const answerThree = `<div class="col s12">
        <a id="A3" class="waves-effect waves-light btn-large btnAnswer">{{A3}}</a>
    </div>`

        const answerFour = `<div class="col s12">
        <a id="A4" class="waves-effect waves-light btn-large btnAnswer">{{A4}}</a>
    </div>`

        const answerArr = [correctAnswer, answerTwo, answerThree, answerFour]
        shuffle(answerArr);
        // console.log('answerArr', answerArr)

        function shuffle(array) {
            var m = answerArr.length, t, i;

            // While there remain elements to shuffle…
            while (m) {

                // Pick a remaining element…
                i = Math.floor(Math.random() * m--);

                // And swap it with the current element.
                t = array[m];
                array[m] = array[i];
                array[i] = t;
            }
            console.log(array)
            return array;
        }
        $('#answerOne').append(answerArr[0]);
        $('#answerTwo').append(answerArr[1]);
        $('#answerThree').append(answerArr[2]);
        $('#answerFour').append(answerArr[3]);

        console.log(data);

        $('#catagoryTrivia').text(data.Questions[0].category);
        
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
    function correctCheck() {
        score++;
        return score
    }

    // $("#playAgainBtn").on('click', function(){
    //     let leaderboardId = $('#leaderboardId').val();
    //     location.href = "http://localhost:3000/quiz/" + leaderboardId;
    // })

    $(document).on("click", ".btnAnswer", function (event) {
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
                const correctAnswer = `<div class="col s12">
        <button class="waves-effect waves-light btnAnswer btn-large" id="correct">{{Correct}}</button>
    </div>`

                const answerTwo = `<div class="col s12">
        <a id="A2" class="waves-effect waves-light btn-large btnAnswer">{{A2}}</a>
    </div>`

                const answerThree = `<div class="col s12">
        <a id="A3" class="waves-effect waves-light btn-large btnAnswer">{{A3}}</a>
    </div>`

                const answerFour = `<div class="col s12">
        <a id="A4" class="waves-effect waves-light btn-large btnAnswer">{{A4}}</a>
    </div>`

                const answerArr = [correctAnswer, answerTwo, answerThree, answerFour]
                shuffle(answerArr);
                // console.log('answerArr', answerArr)

                function shuffle(array) {
                    var m = answerArr.length, t, i;

                    // While there remain elements to shuffle…
                    while (m) {

                        // Pick a remaining element…
                        i = Math.floor(Math.random() * m--);

                        // And swap it with the current element.
                        t = array[m];
                        array[m] = array[i];
                        array[i] = t;
                    }
                    console.log(array)
                    return array;
                }

                $('#answerOne').html(answerArr[0]);
                $('#answerTwo').html(answerArr[1]);
                $('#answerThree').html(answerArr[2]);
                $('#answerFour').html(answerArr[3]);

                //console.log(data.Questions[1]);//
                $("#question").text(data.Questions[indexCounter].Q);
                $("#correct").text(data.Questions[indexCounter].Correct)
                $("#A2").text(data.Questions[indexCounter].A2)
                $("#A3").text(data.Questions[indexCounter].A3)
                $("#A4").text(data.Questions[indexCounter].A4)
                $('#counter').text(counter);
                if (questionAnswer === data.Questions[scoreCounter].Correct) {
                    correctCheck();
                    console.log(score)
                } else {
                    console.log("somestring")
                }
            })
        }
    });
});