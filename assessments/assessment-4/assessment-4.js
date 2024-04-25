// Challenge-1

var singleWord = "variable";
var index = singleWord.length - 1; // 7
var random1 = Math.floor(Math.random() * 8);
var random2 = Math.floor(Math.random() * 8);
var character1 = singleWord[random1];
var character2 = singleWord[random2];
console.log(character1.toUpperCase(), character2.toUpperCase());

// Challenge-2

var randomNumber = Math.floor(Math.random() * 1001);

var number1 = randomNumber % 2 === 0; // even
console.log(number1);

var number2 = randomNumber % 3 === 0; // odd
console.log(number2);

// Challenge-3

var numerator = Math.floor(Math.random() * 101) - 100;
var denominator = Math.floor(Math.random() * 4) + 5;
var divide = numerator / denominator;
var round = Math.round(divide);
console.log(divide);
console.log(round);

// Challenge-4

var testNumber = Math.floor(Math.random() * 2475) + 25;
var test5 = testNumber % 5 === 0;
var calculate = testNumber - test5;
var test3 = calculate % 3 === 0;
console.log(test3);

// Challenge-5

var divTest = Math.floor(Math.random() * 100) + 101;

var randomtest3 = divTest % 3 === 0;
var remove3 = divTest - randomtest3;
var randomtest5 = remove3 % 5 === 0;
console.log(randomtest5);

// Challenge-6

var creativeString =
    "Exploring the vast universe of code can lead to unexpected discoveries.";
var randomIndex = Math.floor(Math.random() * creativeString.length);
var extractedText = creativeString.slice(randomIndex + 1);
console.log("Text after index " + randomIndex + ": " + extractedText);
