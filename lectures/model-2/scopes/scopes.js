// Global scopes

var globalVar = "i am a global variable";

function accsessGlobalVar() {
    console.log(globalVar);
}

accsessGlobalVar();
console.log(globalVar);

// local scopes

function myFunction() {
    var localVar = "I am a local variable";
    console.log(localVar);
}

myFunction();
// console.log(localVar);

// Naming

var book = "Global book";

function readBook() {
    var book = "Local book";
    console.log(book);
}

readBook();
console.log(book);

// Overriding Global Variables

var globalVar = "Initial value";
console.log(globalVar);

var globalVar = "Overridden value";
console.log(globalVar);

var globalCount = 0;

function incrementCount() {
    globalCount += 1;
}

incrementCount();
console.log(globalCount);
