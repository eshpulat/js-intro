// loop - string

var str = "Hello world";
for (var i = 0; i < str.length; i++) {}
console.log(str[i - 1]);

// use cases

var str = "Hello world";
var count = 0;
for (var i = 0; i < str.length; i++) {
    if (str[i] === "o") {
        count++;
    }
}
console.log(count);

// reversing string

var str = "Hello world";
var reversed = "";
for (var i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
}
console.log(reversed);

// Removing Specific Characters

var str = "Hello world";
var result = "";
for (var i = 0; i < str.length; i++) {
    if (str[i] !== "o") {
        result += str[i];
    }
}
console.log(result);

// Creating an Acronym ???

var str = "Hello World Wide Web";
var acronym = "";
for (var i = 0; i < str.length; i++) {
    if (i === 0 || str[i - 1] === " ") {
        acronym += str[i];
    }
}
console.log(acronym);

// assignment-23

// ---------- 1 ----------- stringToArray

function stringToArray(str) {
    var array = [];
    for (var i = 0; i < str.length; i++) {
        array.push(str[i]);
    }

    return array;
}
console.log(stringToArray("Hello, World!"));
console.log(stringToArray("JavaScript"));

// ------------- 2 ------------ areVowelsMore

function areVowelsMore(str) {
    var string = str.toLowerCase();
    var count = "";
    for (var i = 0; i < string.length; i++) {
        if (
            string[i] !== "o" &&
            string[i] !== "e" &&
            string[i] !== "i" &&
            string[i] !== "u" &&
            string[i] !== "a"
        ) {
            count += string[i];
        }
    }
    var consonantsChar = count.length;
    var vowelsChar = str.length - count.length;
    if (vowelsChar > consonantsChar) {
        return true;
    } else {
        return false;
    }
}
console.log(areVowelsMore("Hello"));
console.log(areVowelsMore("Eerie"));

// ------------- 3 --------------- sumOfLetterPositions ?????????

function sumOfLetterPositions(str) {
    var alphabet = "absdefjhijklmnopqrstuvwxyz";

    var count = alphabet[9];

    for (var i = 0; i < str.length; i++) {}

    return count;
}

console.log(sumOfLetterPositions("abcuy"));

// ---------------- 4 -------------- countMatchingChars

function countMatchingChars(str1, str2) {
    if (str1.length !== str2.length) {
        console.log("length not equal");
    }

    let count = 0;

    for (var i = 0; i < str1.length; i++) {
        if (str1[i] === str2[i]) {
            count++;
        }
    }
    return count;
}

console.log(countMatchingChars("hello", "hxllo"));

console.log(countMatchingChars("abc", "def")); // Returns: 0 (no matching characters)

// --------------- 5 ------------
