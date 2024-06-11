// split method
/*var str = "The quick brown fox jumps over the lazy dog";

var words = str.split(" ");
console.log(words);

var char = str.split("");
console.log(char);

// split with limit

var limited = str.split(" ", 3);
console.log(limited);

var limitedWithChar = str.split("", 3);
console.log(limitedWithChar);

var phrase = "National Aeronautics and Space Administration";
var words = phrase.split(" ");
var abbreviation = "";

for (var i = 0; i < words.length; i++) {
    abbreviation += words[i].charAt(0);
}

console.log(abbreviation); // Output: "NASA"

// join method

var arr = ["The", "quick", "brown", "fox"];
var sentence = arr.join(" ");
console.log(sentence);

var arr = ["The", "quick", "brown", "fox"];
var withOutSpace = arr.join();
console.log(withOutSpace);

var arr = ["2024", "06", "08"];
var hyphenSperated = arr.join("-");
console.log(hyphenSperated);

var arr = ["H", "e", "l", "l", "o"];
let joined = arr.join("");
console.log(joined); */

// Assignment-25

// ----------- 1 ------------- createCamelCase(str)

function createCamelCase(str) {
    let lowerCaseStr = str.toLowerCase();
    let splitStr = lowerCaseStr.split(" ");
    let newstr = splitStr.pop();
    let upperCase = newstr[0].toUpperCase() + newstr.replace(newstr[0], "");
    let array = [];
    array.push(splitStr[0], upperCase);
    let camelCase = array.join("");

    console.log(camelCase);
}

createCamelCase("hello word"); // Outputs "helloWorld"
createCamelCase("Hi everyone"); // Outputs "hiEveryone"
createCamelCase("super Expensive"); // Outputs "superExpensive"
createCamelCase("Bye Everyone"); // Outputs "byeEveryone"

// ------------- 2 ------------- replaceSpacesWithUnderscore

function replaceSpacesWithUnderscore(str) {
    let splitStr = str.split(" ");
    let joinWithUderScore = splitStr.join("_");
    console.log(joinWithUderScore);
}

replaceSpacesWithUnderscore("hello world"); // Outputs "hello_world"
replaceSpacesWithUnderscore("OpenAI GPT-4 rocks"); // Outputs "OpenAI_GPT-4_rocks"

// ------------ 3 --------------- swapFirstAndLastName

function swapFirstAndLastName(fullName) {
    let splitStr = fullName.split(" ");
    let array = [];
    array.push(splitStr[1], splitStr[0]);
    let joinArray = array.join(" ");
    console.log(joinArray);
}

swapFirstAndLastName("Ali Ramazon"); // Outputs "Ramazon, Ali";

// ----------- 4 ------------- createHashTag

function createHashTag(str) {
    let splitStr = str.split(" ");
    let result = "#";

    for (let i = 0; i < splitStr.length; i++) {
        result +=
            splitStr[i][0].toUpperCase() +
            splitStr[i].replace(splitStr[i][0], "");
    }
    console.log(result);
}

createHashTag("hello world"); // Outputs "#HelloWorld"
createHashTag("OpenAI is awesome"); // Outputs "#OpenAIIIsAwesome"
