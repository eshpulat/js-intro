// split method
var str = "The quick brown fox jumps over the lazy dog";

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
console.log(joined);
