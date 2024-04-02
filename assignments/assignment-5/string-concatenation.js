var part1 = "The greatest glory in";
var part2 = "living lies not in";
var part3 = "never falling, but in";
var part4 = "rising every time";
var part5 = "we fall.";
var author = " - Nelson Mandela";

// First, use the template literal method.

var result = `${part1} ${part2} ${part3} ${part4} ${part5} ${author}`;
console.log(result);

// Second, use the .concat() method.

var result1 = part1.concat(
    " ",
    part2,
    " ",
    part3,
    " ",
    part4,
    " ",
    part5,
    " ",
    author
);
console.log(result1);

// Third, use the + operator.

var result2 =
    part1 +
    " " +
    part2 +
    " " +
    part3 +
    " " +
    part4 +
    " " +
    part5 +
    " " +
    author;

console.log(result2);

// Fourth, use the += operator.

var result3 = "The greatest glory in";
result3 += " living lies not in";
result3 += " never falling, but in";
result3 += " rising every time";
result3 += " we fall.";
result3 += "  - Nelson Mandela";

console.log(result3);
