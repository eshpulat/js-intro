// Challenge-1
// Remove spaces

var space = "I Love JavaScript";
var result = space.replaceAll(" ", "");

console.log(result);

// Challenge-2

var javascript = "javjzbdcusdhkcjascript";

var firstIdx = javascript.indexOf("s");
var part1 = javascript[0].toUpperCase();
var part2 = javascript.slice(1, firstIdx);
var part3 = javascript[firstIdx].toUpperCase();
var part4 = javascript.slice(firstIdx + 1);

var javascript = part1 + part2 + part3 + part4;
console.log(javascript);

// Challenge-3

var fullName = "Muhammad Eshpulatov";
var firstName = fullName[0];
var idxname = fullName.indexOf(" ");
var lastName = fullName[idxname + 1];
var initial = firstName + lastName;
console.log(initial);

// Challenge-4

var alphabet = "abcdefghijklomnpqrstuvwxyz";
var lettername = "a";
var letternameidx = alphabet.indexOf(lettername);
var alphabetWithoutMyNameFirstCharacter =
    alphabet.slice(0, letternameidx) + alphabet.slice(letternameidx + 1);

console.log(alphabetWithoutMyNameFirstCharacter);

//  Challenge-5

var completeSentence = "The quick brown fox jumps over the lazy dog.";
var randomChar = "o";
var randomCharidx = completeSentence.indexOf(randomChar);
var missingRandomCharString =
    completeSentence.slice(0, randomCharidx) +
    completeSentence.slice(randomCharidx + 1);
console.log(missingRandomCharString);

// Challenge-6
var randomString = "program to calculate the number";
var randomChar = "u";
var randomCharlength = randomString.length;
var finalychar = randomString.replaceAll(randomChar, "");
var randomCharcount = randomCharlength - finalychar.length;
console.log(randomCharcount);
