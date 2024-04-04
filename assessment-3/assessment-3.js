// Challenge-1
// Remove spaces

var space = "I Love JavaScript";
var result = space.trim();

console.log(result.includes(" "));

// Challenge-2

var javascript = "javascript";
var anotherjavascript = javascript.replace("javascript", "JavaScript");
console.log(anotherjavascript);

// Challenge-3

var fullName = "Muhammad Eshpulatov";
var initial = fullName.toUpperCase().slice(0, 1);
console.log(initial);

// Challenge-4

var alphabet = "abcdefghijklomnpqrstuvwxyz";
var alphabetWithoutMyNameFirstCharacter = alphabet.replace(
    "abcdefghijklomnpqrstuvwxyz",
    "abcdefghijklonpqrstuvwxyz"
);

console.log(alphabetWithoutMyNameFirstCharacter);

//  Challenge-5

var completeSentence = "The quick brown fox jumps over the lazy dog.";

// Challenge-6
var randomString = "Exptected";
