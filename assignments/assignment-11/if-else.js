// Password Correctness Check

var correctPassword = "Enes-aridenez";
var userInputPassword = " Ahmat-enes";

if (correctPassword === userInputPassword) {
    console.log("Access Granted.");
} else {
    console.log("Access Denied. Incorrect Password.");
}

// Age Verification for Content Access

var userAge = 20;

if (userAge >= 18) {
    console.log("You have access to the content.");
} else {
    console.log("Access restricted. You must be 18 years or older.");
}

// Checking Input Length
var username = "Muhammad";

if (username.length >= 5) {
    console.log("Username is valid.");
} else {
    console.log("Username must be at least 5 characters long.");
}

// Simple Quiz
// question 2 + 2

var correctAnswer = "42"; // Store the correct answer to a question
var userAnswer = "42"; // Simulate a user's answer
if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
    console.log("Correct! You may proceed.");
} else {
    console.log("Incorrect answer. Please try again.");
}
