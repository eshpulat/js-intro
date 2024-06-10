// ----------- 1 ---------------- stringIndexMultiplier

function stringIndexMultiplier(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        let lengthOfString = arr[i].length;
        sum += lengthOfString * i;
    }
    return sum;
}

console.log(stringIndexMultiplier(["Hello", "world", "!"]));

// ------------ 2 --------------- divisibilityFilter

function divisibilityFilter(arr) {
    let array = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 3 === 0 && arr[i] % 5 === 0) {
            continue;
        }
        if (arr[i] % 3 === 0 || arr[i] % 5 === 0) {
            array.push(arr[i]);
        }
    }
    return array;
}

console.log(divisibilityFilter([3, 5, 15, 18, 20, 30])); // Outputs [3, 5, 18, 20])

// -------------- 3 -------------- singleDigitSum

function singleDigitSum(arr) {}

// ----------- 4 ------------- binaryCounter

function binaryCounter(arr) {
    let array = [];
    let numberOfZero = 0;
    let numberOfOne = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 1) {
            numberOfOne++;
        }
        if (arr[i] === 0) {
            numberOfZero++;
        }
    }
    array.push(numberOfOne, numberOfZero);
    return array;
}

console.log(binaryCounter([0, 1, 0, 1, 1, 0, 0, 1])); // Outputs [4, 4])

// ------------ 5 ---------- uniqueStringFilter

function uniqueStringFilter1(arr) {
    let count = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i][1] === "O" || arr[i][1] === "E") {
            continue;
        }
        if (arr[i][0] === "H" || arr[i][0] === "T" || arr[i][0] === "W") {
            count.push(arr[i]);
        }
    }

    return count;
}

function uniqueStringFilter(words) {
    var unique = [];
    var lowercasedUnique = [];

    for (var i = 0; i < words.length; i++) {
        var word = words[i];

        if (!lowercasedUnique.includes(word.toLowerCase())) {
            unique.push(word);
            lowercasedUnique.push(word.toLowerCase());
        }
    }
    return unique;
}

//["Hello", "hi"].includes("hello");
console.log(
    uniqueStringFilter([
        "Hello",
        "helLo",
        "world",
        "World",
        "world",
        "WORLD",
        "hello",
        "HELLO",
        "Test"
    ])
); // Outputs ["Hello", "world", "Test"]

// -------------- 6 ------------ oddNumberSum

function oddNumberSum(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            sum += arr[i];
        }
    }
    return sum;
}

console.log(oddNumberSum([1, 2, 3, 4, 5, 6, 7, 8, 9])); // Outputs 25

// ------------- 7 -------------- reverseArray

function reverseString(arr) {
    let array = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        array.push(arr[i]);
    }
    return array;
}

console.log(reverseString(["H", "e", "l", "l", "o"])); // Outputs [ 'o', 'l', 'l', 'e', 'H' ]
console.log(reverseString([])); // Outputs []
console.log(reverseString(["a"])); // Outputs [];

// ------------- 8 ---------------- arrayElementMultiplier

function arrayElementMultiplier(arr) {
    let array = [];
    for (let i = 0; i < arr.length; i++) {
        array.push(arr[i] * 2);
    }
    return array;
}

console.log(arrayElementMultiplier([1, 2, 3, 4, 5])); // Outputs [2, 4, 6, 8, 10]
console.log(arrayElementMultiplier([])); // Outputs []

// -------------- 9 ---------------- evenIndexSum ?????

function evenIndexSum(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            sum += arr[i];
        }
    }
    return sum;
}

console.log(evenIndexSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // Outputs 30
console.log(evenIndexSum([10, 20, 30, 40, 50])); // Outputs 90
console.log(evenIndexSum([])); // Outputs 0
console.log(evenIndexSum([100])); // Outputs 100
