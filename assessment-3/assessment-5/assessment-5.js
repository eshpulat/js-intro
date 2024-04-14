// Challenge-1

var number1 = Math.ceil(Math.random() * 15) + 15;
var number2 = Math.ceil(Math.random() * 15) + 15;

if (number1 === number2) {
    console.log("The numbers are equal.");
} else if (number1 > number2) {
    console.log("The first number is greater.");
} else {
    console.log("The second number is greater than the first one.");
}

// Challenge-2

var string1 = "examplestringonegenerated";
var string2 = "secondexamplestringgenerated";

var numberabc = Math.ceil(Math.random() * 26);
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var targetCharacter = alphabet[numberabc];

var calculate1 = string1.replaceAll(targetCharacter, "");
var calculate2 = string2.replaceAll(targetCharacter, "");

var count1 = string1.length - calculate1.length;
var count2 = string2.length - calculate2.length;

if (count1 && count2 >= 0) {
    console.log(`Number of ${targetCharacter} is the same in both strings.`);
}
if (count1 > count2) {
    console.log(
        `Number of ${targetCharacter} in the first string is greater than the second one. `
    );
}
if (count1 < count2) {
    console.log("The second one is greater.");
}
if (count1 && count2 === 0) {
    console.log("Character does not exist in each string.");
}

// Challenge-3

var randomNumber = Math.ceil(Math.random() * 1000);

//Challenge-4

var sentence =
    "I find myself reflecting on past adventures, realizing that my greatest discoveries were often right at home, hidden in plain sight, waiting to be appreciated, and truly making them mine.";

var words = sentence
    .replaceAll("I", "we")
    .replaceAll("my", "our")
    .replaceAll("myself", "ourselves")
    .replaceAll("mine", "ours");
console.log(words);

// Challenge-5
