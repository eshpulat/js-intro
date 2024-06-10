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
