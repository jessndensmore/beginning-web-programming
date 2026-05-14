// ============================================
// quiz.js - External JavaScript for Trivia Quiz
// ============================================

// Array of at least 3 trivia questions
let questions = [
  "What planet is known as the Red Planet?",
  "What is the largest ocean on Earth?",
  "What is the capital of Texas?"
];

// Second array with answers in the SAME INDEX positions
let answers = [
  "mars",
  "pacific",
  "austin"
];

// --------------------------------------------------
// Quiz Function
// - Sets points to 0
// - Uses a for loop (0 to 2)
// - Uses a while loop for up to 3 guesses each question
// - Returns the total points earned
// --------------------------------------------------
function quiz() {
  let points = 0; // total points earned across all questions

  // For loop using counter 0 to 2 (matches array indexes for 3 questions)
  for (let i = 0; i <= 2; i++) {

    // Initialize guesses to 3 for EACH question
    let guesses = 3;

    // While loop: keep asking until guesses run out or they get it right
    while (guesses > 0) {

      // Prompt the user using i as the array index
      let userAnswer = prompt(
        "Question " + (i + 1) + ":\n" + questions[i] +
        "\n\nYou have " + guesses + " attempt(s) left."
      );

      // If user hits Cancel, prompt returns null. Treat as empty.
      if (userAnswer === null) {
        userAnswer = "";
      }

      // Normalize input (lowercase + trim spaces)
      userAnswer = userAnswer.toLowerCase().trim();

      // Conditional to check user input vs the answer array
      if (userAnswer === answers[i]) {
        // Correct! Award points based on remaining guesses
        // First try: guesses = 3 -> +3 points
        // Second try: guesses = 2 -> +2 points
        // Third try: guesses = 1 -> +1 point
        points += guesses;

        // Set guesses to 0 to break out and move to next question
        guesses = 0;
      } else {
        // Incorrect: subtract 1 guess and try again if any remain
        guesses--;

        // If they used all guesses, move to next question with 0 points
        // (Points are not changed here because missing earns 0)
        if (guesses === 0) {
          // Optional feedback message (assignment doesn't forbid it)
          alert("Out of attempts! The correct answer was: " + answers[i]);
        } else {
          alert("Not quite — try again!");
        }
      }
    }
  }

  // After the quiz completes, return accumulated points
  return points;
}

// ============================================
// Call the quiz function and display score
// ============================================

// Create a call to the quiz function and collect cumulative score
let score = quiz();

// Display the score on the page
document.getElementById("scoreOutput").textContent =
  "Your total score is: " + score + " point(s).";