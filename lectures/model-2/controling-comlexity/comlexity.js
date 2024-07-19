// Function to calculate the area of a rectangle
function calculateRectangleArea(length, width) {
    return length * width;
}

// Function to calculate the distance traveled
function calculateDistance(speed, time) {
    return speed * time;
}

// Function to calculate earnings after a pay cut
function calculateEarningsAfterPayCut(originalEarnings, payCut) {
    return originalEarnings - payCut;
}

// Usages examples

let length = 7;
let width = 5;
let rectangleArea = calculateRectangleArea(length, width);
console.log(rectangleArea);

let speed = 60;
let time = 2;
let distance = calculateDistance(speed, time);
console.log(distance);

// Improvement

function multiply(a, b) {
    return a * b;
}

function subtract(a, b) {
    return a - b;
}

function calculateRectangleArea(length, width) {
    return multiply(length, width);
}

function calculateDistance(speed, time) {
    return multiply(speed, time);
}

function calculateEarningsAfterPayCut(originalEarnings, payCut) {
    return subtract(originalEarnings, payCut);
}

console.log(calculateRectangleArea(5, 7)); // Outputs: 35
console.log(calculateDistance(60, 2)); // Outputs: 120
console.log(calculateEarningsAfterPayCut(5000, 500)); // Outputs: 4500
