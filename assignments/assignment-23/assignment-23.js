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
