// hoisting

console.log(myVar);
var myVar = 5;
console.log(myVar);

// console.log(myLetVar);
// let myLetVar = 10;

console.log(myFunction());
function myFunction() {
    return "Hello";
}

// console.log(myFunctionExpression()); // Throws TypeError: myFunctionExpression is not a function
// var myFunctionExpression = function () {
//     return "Hello";
// };

var myFunctionExpression; // Hoisted declaration, initialized to undefined
myFunctionExpression(); // Attempt to invoke myFunctionExpression
myFunctionExpression = function () {
    console.log("hello");
}; // Assignment happens here, but after the console.log
