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
