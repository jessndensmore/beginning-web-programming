// Trivia Game

// Counter to track which question the user is on
var count = 0;

// Multi-dimensional array of questions
// Format:
// ["Question text", correct answer index, "Answer 1", "Answer 2", "Answer 3"]
var questions = [
    ["What planet is known as the Red Planet?", 0, "Mars", "Jupiter", "Venus"],
    ["What is the largest ocean on Earth?", 1, "Atlantic", "Pacific", "Indian"],
    ["What is the capital of Texas?", 2, "Dallas", "Houston", "Austin"]
];

// Loads the Play Game button into the prompt div
function initGame() {
    document.getElementById("prompt").innerHTML =
        "<button onclick='playGame()'>Play Game</button>";

    document.getElementById("question").innerHTML = "";
    document.getElementById("answers").innerHTML = "";
}

// Shows one question and its answer choices
function playGame() {

    var currentQuestion = questions[count];

    document.getElementById("question").innerHTML = currentQuestion[0];

    currentQuestion.shift();

    var correctIndex = currentQuestion[0];

    currentQuestion.shift();

    var answerList = "";

    for (var i = 0; i < currentQuestion.length; i++) {
        answerList += "<li><a href='#' onclick='checkAnswer(" + i + "," + correctIndex + "); return false;'>" 
                    + currentQuestion[i] + "</a></li>";
    }

    document.getElementById("answers").innerHTML = answerList;

    document.getElementById("prompt").innerHTML =
        "<p>Click the best answer below.</p>";
}

// Check Answer
function checkAnswer(chosenIndex, correctIndex) {
    if (chosenIndex === correctIndex) {
        document.getElementById("prompt").innerHTML =
            "<p>Correct! Nice job.</p>";
    } else {
        document.getElementById("prompt").innerHTML =
            "<p>Sorry, that is incorrect.</p>";
    }

    // Move to next question
    count++;

    // Check if all questions have been used
    if (count >= questions.length) {
        document.getElementById("prompt").innerHTML +=
            "<button onclick='location.reload()'>Restart Game</button>";

        document.getElementById("question").innerHTML = "Game Over!";
        document.getElementById("answers").innerHTML = "";
    } else {
        document.getElementById("prompt").innerHTML +=
            "<br><button onclick='playGame()'>Play Game</button>";

        document.getElementById("answers").innerHTML = "";
    }
}

// Start the page with the Play Game button
initGame();