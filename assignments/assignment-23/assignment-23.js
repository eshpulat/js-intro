// loop - string

var str = "Hello world";
for (var i = 0; i < str.length; i++) {}
// console.log(str[i - 1]);

// use cases

var str = "Hello world";
var count = 0;
for (var i = 0; i < str.length; i++) {
    if (str[i] === "o") {
        count++;
    }
}
// console.log(count);

// reversing string

var str = "Hello world";
var reversed = "";
for (var i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
}
// console.log(reversed);

// Removing Specific Characters

var str = "Hello world";
var result = "";
for (var i = 0; i < str.length; i++) {
    if (str[i] !== "o") {
        result += str[i];
    }
}
// console.log(result);

// Creating an Acronym ???

var str = "Hello World Wide Web";
var acronym = "";
for (var i = 0; i < str.length; i++) {
    if (i === 0 || str[i - 1] === " ") {
        acronym += str[i];
    }
}
// console.log(acronym);

// assignment-23

// ---------- 1 ----------- stringToArray

function stringToArray(str) {
    var array = [];
    for (var i = 0; i < str.length; i++) {
        array.push(str[i]);
    }

    return array;
}
// console.log(stringToArray("Hello, World!"));
// console.log(stringToArray("JavaScript"));

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
// console.log(areVowelsMore("Hello"));
// console.log(areVowelsMore("Eerie"));

// ------------- 3 --------------- sumOfLetterPositions ?????????

function sumOfLetterPositions(str) {
    var alphabet = "absdefjhijklmnopqrstuvwxyz";

    var sum = 0;

    for (var i = 0; i < str.length; i++) {
        var strLowerCase = str[i].toLowerCase();
        var eachLetter = alphabet.indexOf(strLowerCase);
        if (str[i] !== -1) {
            sum += eachLetter + 1;
        }
    }

    return sum;
}

// console.log(sumOfLetterPositions("abc"));
// console.log(sumOfLetterPositions("Hello"));

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

// console.log(countMatchingChars("hello", "hxllo"));

// console.log(countMatchingChars("abc", "def")); // Returns: 0 (no matching characters)

// --------------- 5 ------------ convertToAlphabetPositions

function convertToAlphabetPositions(str) {
    let alphabet = "abcdefjhijklmnopqrstuvwxyz";

    let newString = "";

    for (let i = 0; i < str.length; i++) {
        let lowerCase = str[i].toLowerCase();
        let eschLetter = alphabet.indexOf(lowerCase);

        if (eschLetter === -1) {
            continue;
        }
        newString += eschLetter + 1 + " ";
    }
    return newString;
}

// console.log(convertToAlphabetPositions("abc")); // Returns: "1 2 3"
// console.log(convertToAlphabetPositions("Hello World!")); // Returns: "8 5 12 12 15 23 15 18 12 4"

// -------------- 6 ------------- extractConsonants

function extractConsonants(str) {
    let array = [];
    let result = "";

    for (let i = 0; i < str.length; i++) {
        if (
            str[i] !== "o" &&
            str[i] !== "a" &&
            str[i] !== "e" &&
            str[i] !== "i" &&
            str[i] !== "u" &&
            str[i] !== " " &&
            str[i] !== "," &&
            str[i] !== "!"
        ) {
            result += str[i] + " ";
        }
    }
    array.push(result);
    return array;
}

// console.log(extractConsonants("Hello, World!"));
// console.log(extractConsonants("JavaScript"));

// ----------------- 7 ---------- countUppercaseLetters ???

function countUppercaseLetters(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (i === 0 || str[i - 1] === " ") {
            count++;
        }
    }

    return count;
}

// console.log(countUppercaseLetters("Hello, World!")); // Returns: 2
// console.log(countUppercaseLetters("JavaScript")); // Returns: 2

// -------------- 8 ---------- hasConsecutiveSameLetters

function hasConsecutiveSameLetters(str) {
    for (let i = 0; i < str.length - 1; i++) {
        if (str[i] === str[i + 1]) {
            return true;
        }
    }
    return false;
}

// console.log(hasConsecutiveSameLetters("hello")); // Returns: true (because of "ll")
// console.log(hasConsecutiveSameLetters("world")); // Returns: false

// ----------------- 9 ------------- isPalindrome ?????

// --------------- 10 ------------ countQueryStrings

function countQueryStrings(str) {
    let array = [];
    let equal = 0;
    let logical = 0;
    let questionMark = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === "=") {
            equal++;
        }
        if (str[i] === "&") {
            logical++;
        }

        if (str[i] === "?") {
            questionMark++;
        }
    }
    array.push(questionMark, logical, equal);
    return array;
}

console.log(
    countQueryStrings("https://example.com?page=1&sort=desc&order=asc")
); // Returns: [1, 3, 2]
console.log(
    countQueryStrings("https://example.com?search=test&filter=active&limit=10")
); // Returns: [1, 3, 2]
