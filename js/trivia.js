// ======================================
// Arrays
// ======================================

// Quote of the day array
let quotes = [
    "Believe in yourself.",
    "Small steps still move you forward.",
    "Success starts with showing up.",
    "Keep going. You are getting there.",
    "Dream big and stay brave."
];

// Trivia questions array
let questions = [
    "What planet is known as the Red Planet?",
    "What is the largest ocean on Earth?",
    "What is the capital of Texas?"
];

// Trivia answers array in lowercase
let answers = [
    "mars",
    "pacific",
    "austin"
];

// ======================================
// Date and Time Function
// Must use Date object and at least 2 methods
// ======================================
function displayDateTime() {
    let now = new Date();

    let month = now.getMonth() + 1;   // getMonth starts at 0
    let day = now.getDate();
    let year = now.getFullYear();

    let hours = now.getHours();
    let minutes = now.getMinutes();

    // Add leading zero to minutes if needed
    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    let friendlyDate = "Today's date is " + month + "/" + day + "/" + year +
        " and the current time is " + hours + ":" + minutes;

    document.getElementById("dateOutput").textContent = friendlyDate;

    return hours;
}

// ======================================
// Capitalize First Letter Function
// ======================================
function capitalizeFirstLetter(name) {
    name = name.trim();
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}

// ======================================
// Greeting Function with Switch Statement
// ======================================
function displayGreeting() {
    let currentHour = displayDateTime();

    let timeOfDay;

    switch (true) {
        case (currentHour < 12):
            timeOfDay = "Good Morning";
            break;
        case (currentHour < 18):
            timeOfDay = "Good Afternoon";
            break;
        default:
            timeOfDay = "Good Evening";
    }

    let userName = prompt("Please enter your name:");
    userName = capitalizeFirstLetter(userName);

    let greeting = timeOfDay + ", " + userName + "!";
    document.getElementById("greetingOutput").textContent = greeting;
}

// ======================================
// Email Validation Function
// ======================================
function isValidEmail(email) {
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

// ======================================
// User Email Function
// ======================================
function getUserEmail() {
    let email = prompt("Please enter your email address:");

    while (!isValidEmail(email)) {
        alert("That is not a valid email address. Please try again.");
        email = prompt("Please enter a valid email address:");
    }

    let parts = email.split("@");
    let username = parts[0].toUpperCase();
    let domain = parts[1];

    document.getElementById("emailOutput").innerHTML =
        "Username: " + username + "<br>Domain: " + domain;
}

// ======================================
// Quote of the Day Function
// Random number between 0 and 4
// ======================================
function displayQuote() {
    let randomIndex = Math.floor(Math.random() * 5);
    document.getElementById("quoteOutput").textContent = quotes[randomIndex];
}

// ======================================
// Trivia Quiz Function
// ======================================
function quiz() {
    let points = 0;

    for (let i = 0; i <= 2; i++) {
        let guesses = 3;

        while (guesses > 0) {
            let userAnswer = prompt(
                "Question " + (i + 1) + ": " + questions[i] +
                "\nAttempts left: " + guesses
            );

            if (userAnswer === null) {
                userAnswer = "";
            }

            userAnswer = userAnswer.toLowerCase().trim();

            if (userAnswer === answers[i]) {
                points += guesses;
                guesses = 0;
            } else {
                guesses--;

                if (guesses > 0) {
                    alert("Incorrect. Try again.");
                } else {
                    alert("Sorry, the correct answer was: " + answers[i]);
                }
            }
        }
    }

    return points;
}

// ======================================
// Main Script
// Call functions before trivia quiz
// ======================================

displayGreeting();
getUserEmail();
displayQuote();

let score = quiz();
let percent = (score / 9) * 100;

// Round to 2 decimal places
percent = percent.toFixed(2);

document.getElementById("scoreOutput").textContent =
    "Your total score is: " + score + " points.";

document.getElementById("percentOutput").textContent =
    "Your percentage is: " + percent + "%.";