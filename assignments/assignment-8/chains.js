var result1 = "hello".includes("e").toUpperCase(); // Invalid Chain
// this includes() methods returns (boolen), toUppercase working with only string

var result2 = "world".indexOf("o").concat("cean"); // invalid chain
//  this indexOf() methods returns (number), we can not concat number to string

var result3 = "goodbye".endsWith("e").replace("e", "a"); // invailid chain
// endWith() => (boolen)  replace => string , we can not use boolen and string.

var result4 = "example".slice(0, 3).indexOf("a"); // invalid chain
// slice() => string, indexOf() => number we can not use number and string.

var result5 = "space" // valid chain
    .trimStart()
    .trimEnd()
    .toUpperCase()
    .slice(-1)
    .toLowerCase();
// everything returns string, we can use string to string

var result6 = "boolean".startsWith("b").toString().replace("true", "yes"); /// ?????

var result7 = "JavaScript".toLowerCase().trim().concat(" is fun"); // valid chain
// toLowercase() and trim() => string, we can use concat() with string

var result8 = "Learning".slice(0, 4).toUpperCase().endsWith("N"); // invalid chain
// slice() => string, toUpperCase() => string, endsWith => boolen, we can not use boolen with string

var result9 = " Hello, World! ".trim().replace("World", "Everyone"); // valid chain
// everthing returns string

var result10 = "Data".concat(" Analysis").trimStart().toLowerCase(); // vaild chain
// everthing returns string

var result11 = "Search".indexOf("e").toString().slice(0, 1); // ????

var result12 = "coding".toUpperCase().startsWith("C"); // invaild chain ??
// to uppercase => string startWith => boolen we can mot use boolen with string

var result13 = "text".toUpperCase().includes(5); // invalid chain
// toUppercase => string includes => boolen, we can mot use boolen with string

var result14 = "number".indexOf("n").startsWith("0"); // invalid chain
// indexof() => number, startwith() => boolen we can mot use boolen with number\

var result15 = "trim".trimEnd().length.concat(" characters"); // valid chain
// length returns number. we can use concat with number

var result16 = "ReplaceAll"
    .replaceAll("l", "ll")
    .indexOf("ll")
    .toString()
    .trim(); // valid chain
// toString() changed method to string

var result17 = "find me".toUpperCase().includes("FIND"); // valid chain

var result18 = " space ".trim().trimStart().trimEnd().length.toString(); // valid chain
// this all trim() give the string, toString() change method for string and everthing will be string

var result19 = "EndsWith".toLowerCase().endsWith("swith"); // valid chain
// Explanation: The methods are correctly applied in sequence to operate on strings.

var result20 = "multiple words".slice(0, 8).trim().toUpperCase(); // valid chain
// this all working with string, results will bu string.
