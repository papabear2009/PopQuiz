$(document).ready(function () {
    $('.carousel').carousel()

    $('#startBtn').on("click", function () {
        let quizLink = $('#quizLink').val();
        window.location.href = quizLink;
    })

    $(".music").click(function () {
        $("#categoryText").text("Music");
        $.ajax({
            url: "/api/questions/music",
            method: "GET"
        }).then(function (data) {
            let quizArr = data[0].Quizzes;
            let newArr = [];
            for (let i = 0; i < quizArr.length; i++) {
                newArr.push(quizArr[i].quizQuestions.QuizId);
            }
            let quizId = newArr.pop();
            $(".categoryInput").val("https://pocketpubquiz.herokuapp.com/quiz/" + quizId);
        })
    })
    $(".sports").click(function () {
        $("#categoryText").text("Sports");
        $.ajax({
            url: "/api/questions/sports",
            method: "GET"
        }).then(function (data) {
            let quizArr = data[0].Quizzes;
            let newArr = [];
            for (let i = 0; i < quizArr.length; i++) {
                newArr.push(quizArr[i].quizQuestions.QuizId);
            }
            let quizId = newArr.pop();
            $(".categoryInput").val("https://pocketpubquiz.herokuapp.com/quiz/" + quizId);
        })
    })
    $(".movies").click(function () {
        $("#categoryText").text("Film");
        $.ajax({
            url: "/api/questions/film",
            method: "GET"
        }).then(function (data) {
            let quizArr = data[0].Quizzes;
            let newArr = [];
            for (let i = 0; i < quizArr.length; i++) {
                newArr.push(quizArr[i].quizQuestions.QuizId);
            }
            let quizId = newArr.pop();
            $(".categoryInput").val("https://pocketpubquiz.herokuapp.com/quiz/" + quizId);
        })
    })

    const quizVal = $('#quizId').val();
    $.ajax({
        url: "/ajax/" + quizVal,
        method: "GET"
    }).then(function (data) {

        const correctAnswer = `<div class="col s12">
        <button class="waves-effect waves-light btnAnswer btnQuiz btn-large" id="correct">{{Correct}}</button>
    </div>`

        const answerTwo = `<div class="col s12">
        <a id="A2" class="waves-effect waves-light btn-large btnQuiz btnAnswer">{{A2}}</a>
    </div>`

        const answerThree = `<div class="col s12">
        <a id="A3" class="waves-effect waves-light btn-large btnQuiz btnAnswer">{{A3}}</a>
    </div>`

        const answerFour = `<div class="col s12">
        <a id="A4" class="waves-effect waves-light btn-large btnQuiz btnAnswer">{{A4}}</a>
    </div>`

        const answerArr = [correctAnswer, answerTwo, answerThree, answerFour]
        shuffle(answerArr);

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
            return array;
        }
        $('#answerOne').append(answerArr[0]);
        $('#answerTwo').append(answerArr[1]);
        $('#answerThree').append(answerArr[2]);
        $('#answerFour').append(answerArr[3]);

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

    $(document).on("click", ".btnAnswer", function (event) {
        const questionAnswer = $(this).text();

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
                location.href = "/leaderboard/" + quizVal
            })
        } else {
            indexCounter++;
            scoreCounter++
            let counter = indexCounter + 1;
            $.ajax({
                url: "/ajax/" + quizVal,
                method: "GET"
            }).then(function (data) {
                const correctAnswer = `<div class="col s12">
        <button class="waves-effect waves-light btnAnswer btnQuiz btn-large" id="correct">{{Correct}}</button>
    </div>`

                const answerTwo = `<div class="col s12">
        <a id="A2" class="waves-effect waves-light btn-large btnQuiz btnAnswer">{{A2}}</a>
    </div>`

                const answerThree = `<div class="col s12">
        <a id="A3" class="waves-effect waves-light btn-large btnQuiz btnAnswer">{{A3}}</a>
    </div>`

                const answerFour = `<div class="col s12">
        <a id="A4" class="waves-effect waves-light btn-large btnQuiz btnAnswer">{{A4}}</a>
    </div>`

                const answerArr = [correctAnswer, answerTwo, answerThree, answerFour]
                shuffle(answerArr);

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
                    return array;
                }

                $('#answerOne').html(answerArr[0]);
                $('#answerTwo').html(answerArr[1]);
                $('#answerThree').html(answerArr[2]);
                $('#answerFour').html(answerArr[3]);

                $("#question").text(data.Questions[indexCounter].Q);
                $("#correct").text(data.Questions[indexCounter].Correct)
                $("#A2").text(data.Questions[indexCounter].A2)
                $("#A3").text(data.Questions[indexCounter].A3)
                $("#A4").text(data.Questions[indexCounter].A4)
                $('#counter').text(counter);
                if (questionAnswer === data.Questions[scoreCounter].Correct) {
                    correctCheck();
                }
            })
        }
    });
});