//   .includes()

var includ = "Looking for the hidden gems in the city.";
var result = includ.includes("hidden"); // true

console.log(result);

//  .indexOf

var index = "Repeat after me: JavaScript is fun!";
var result1 = index.indexOf("JavaScript");
// this result will be 17 becouse indexOf method accepted one characters

console.log(result1);

// .replace()

var feedback = "This product is good!";
var newfeedback = feedback.replace("good", "excellent"); // his product is excellent!

console.log(newfeedback);

// .toUpperCase() and toLowerCase()

var shout = "can you hear me?";
var newshout = shout.toUpperCase(); // CAN YOU HEAR ME?

console.log(newshout);

var voice = "PLEASE LOWER YOUR VOICE";
var newvoice = voice.toLowerCase(); // please lower your voice

console.log(newvoice);

// .trim(), .trimStart(), and .trimEnd()

var gap = " JavaScript is awesome! ";
var space = gap.trim();
var start = gap.trimStart();
var end = gap.trimEnd();

console.log(space);
console.log(start);
console.log(end);

// .slice()

var lastword = "Hello, world!";
var hello = lastword.slice(0, 5); // Hello
var world = lastword.slice(7); // world!

console.log(hello);
console.log(world);
