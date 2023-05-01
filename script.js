//global variables

var time = 75;
var time_remaining = true;
var time_start = false;
var startBtn = document.getElementById("startBtn");
var countdownTimer = document.getElementById("countdownTimer");
var quizHome = document.getElementById("quiz-home");
var quizQuestions = document.getElementById("quiz-questions");
var question = document.getElementById("question");
var choiceA = document.getElementById("choiceA");
var choiceB = document.getElementById("choiceB");
var choiceC = document.getElementById("choiceC");
var choiceD = document.getElementById("choiceD");
var correctAnswer = document.getElementById("correctAnswer");
var highScores = [];
var output = "";
var score = 0;
let i = 0;


//create arrays or questions
var questionsArray = [
    {
        question: "Question: Inside which HTML element do we put the JavaScript?",
        choice: ["A) <javascript>", "B) <js>", "C) <script>", "D) <scripting>"],
        correctAnswer: 2
    },
    {
        question: "Question: Which HTML attribute is used to define inline styles?",
        choice: ["A) Style", "B) font", "C) class", "D) styles"],
        correctAnswer: 0 
    },
    {
        question: "Question: Which is the correct CSS syntax?",
        choice: ["A) body{color:black}", "B){body;color:black}", "C)body:color=black", "D) {body:color=black(body}"],
        correctAnswer: 0
    },
    {
        question: "Question: Which is not a programming language?",
        choice: ["A) JavaScript", "B) Python", "C) C++", "D) CSS"],
        correctAnswer: 3
    }
];

//create function setCountdownTimer
function setCountdownTimer() {
    if(time_start)
    time--;
    if(time<=0) {
        end_quiz();
        time = 0;
    }
    document.getElementById("timer").innerHTML = time;
}

//declare countdown timer interval
var countdownTimerInterval = setInterval(setCountdownTimer, 1000);

//create set quiz questions fuction
function setQuizQuestions() {
    question.textContent = questionsArray[i].question;
    choiceA.textContent = questionsArray[i].choice[0]; 
    choiceB.textContent = questionsArray[i].choice[1]; 
    choiceC.textContent = questionsArray[i].choice[2]; 
    choiceD.textContent = questionsArray[i].choice[3]; 
    };

// create even listner so when start button is clicked, start the timer
startBtn.addEventListener("click", function () {
    quizQuestions.style.display = "block";
    quizHome.style.display = "none";
    countdownTimer.style.display = "block";
    document.getElementById("score-keeper").style.display = "block";
    document.getElementById("score").innerHTML = score;
    setCountdownTimer();
    setQuizQuestions();
    time_start = true;
});

//create function to end quiz


// moving to next questions
choiceA.addEventListener("click", function(event) {
    event.stopPropagation();
    correctAnswer= questionsArray[i].correctAnswer;
        console.log("correctAnswer " + correctAnswer);
        if (0 === correctAnswer) {
            document.getElementById("quiz-post").innerHTML = "Correct!";
            setTimeout(function() {
            document.getElementById("quiz-post").innerHTML = "";
                },
                1000
            );
            score++;
            document.getElementById("score").innerHTML = score;} 
        else {
            time_remaining -= 10;
            document.getElementById("quiz-post").innerHTML = "Incorrect!";
            setTimeout(function() {
                document.getElementById("quiz-post").innerHTML = "";
                    },
                    1000
                );
        }
        if (i >= questionsArray.length -1) {
        end_quiz();
        } else {
            i++ 
            setQuizQuestions();
        };
});

choiceB.addEventListener("click", function(event) {
    event.stopPropagation();
    correctAnswer= questionsArray[i].correctAnswer;
        console.log("correctAnswer " + correctAnswer);
        if (0 === correctAnswer) {
            document.getElementById("quiz-post").innerHTML = "Correct!";
            setTimeout(function() {
            document.getElementById("quiz-post").innerHTML = "";
                },
                1000
            );
            score++;
            document.getElementById("score").innerHTML = score;} 
        else {
            time_remaining -= 10;
            document.getElementById("quiz-post").innerHTML = "Incorrect!";
            setTimeout(function() {
                document.getElementById("quiz-post").innerHTML = "";
                    },
                    1000
                );
        }
        if (i >= questionsArray.length -1) {
        end_quiz();
        } else {
            i++ 
            setQuizQuestions();
        };
});

choiceC.addEventListener("click", function(event) {
    event.stopPropagation();
    correctAnswer= questionsArray[i].correctAnswer;
        console.log("correctAnswer " + correctAnswer);
        if (0 === correctAnswer) {
            document.getElementById("quiz-post").innerHTML = "Correct!";
            setTimeout(function() {
            document.getElementById("quiz-post").innerHTML = "";
                },
                1000
            );
            score++;
            document.getElementById("score").innerHTML = score;} 
        else {
            time_remaining -= 10;
            document.getElementById("quiz-post").innerHTML = "Incorrect!";
            setTimeout(function() {
                document.getElementById("quiz-post").innerHTML = "";
                    },
                    1000
                );
        }
        if (i >= questionsArray.length -1) {
        end_quiz();
        } else {
            i++ 
            setQuizQuestions();
        };
});

choiceD.addEventListener("click", function(event) {
    event.stopPropagation();
    correctAnswer= questionsArray[i].correctAnswer;
        console.log("correctAnswer " + correctAnswer);
        if (0 === correctAnswer) {
            document.getElementById("quiz-post").innerHTML = "Correct!";
            setTimeout(function() {
            document.getElementById("quiz-post").innerHTML = "";
                },
                1000
            );
            score++;
            document.getElementById("score").innerHTML = score;} 
        else {
            time_remaining -= 10;
            document.getElementById("quiz-post").innerHTML = "Incorrect!";
            setTimeout(function() {
                document.getElementById("quiz-post").innerHTML = "";
                    },
                    1000
                );
        }
        if (i >= questionsArray.length -1) {
        end_quiz();
        } else {
            i++ 
            setQuizQuestions();
        };
});

