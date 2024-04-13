// Password Correctness Check

var password1 = "Enes-aridenez";
var password2 = " Ahmat-enes";

if (password1 === password2) {
    console.log("Access Granted.");
} else {
    console.log("Access Denied. Incorrect Password.");
}

// Age Verification for Content Access

var age1 = 18;
var age2 = 18;

if (age1 <= age2) {
    console.log("You have access to the content.");
} else {
    console.log("Access restricted. You must be 18 years or older.");
}

// Checking Input Length
var username = "Muhammad";

if (username.length === 5) {
    console.log("Username is valid.");
} else {
    console.log("Username must be at least 5 characters long.");
}

// Simple Quiz
// question 2 + 2

var randomanswer = 1;
var correctanswer = 2;

if (correctanswer === randomanswer) {
    console.log("Correct! You may proceed.");
} else {
    console.log("Incorrect answer. Please try again.");
}
