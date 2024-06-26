// --------------- 1 --------------- //

function arrayToObject(arr) {
    const newObject = {
        country: arr[0],
        population: arr[1],
        language: arr[2],
        GDP: arr[3]
    };

    return newObject;
}

console.log(arrayToObject(["USA", 331000000, "English", 21433226]));

// -------------- 2 ------------ createBookObject

function createBookObject(name, author, numberOfPages, genre) {
    const newObject = {
        name: name,
        population: author,
        numberOfPages: numberOfPages,
        genre: genre
    };

    return newObject;
}

console.log(createBookObject("1984", "George Orwell", 328, "Dystopian"));
// Outputs: {name: "1984", author: "George Orwell", numberOfPages: 328, genre: "Dystopian"}
console.log(
    createBookObject("The Great Gatsby", "F. Scott Fitzgerald", 218, "Novel")
);
// Outputs: {name: "The Great Gatsby", author: "F. Scott Fitzgerald", numberOfPages: 218, genre: "Novel"}

// ------------- 3 ---------------- findMaxNumber

function findMaxNumber(numbers) {
    let max = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    if (max === 0) {
        return "undefined";
    }
    return max;
}

console.log(findMaxNumber([1, 3, 2, 5, 4])); // Outputs: 5
console.log(findMaxNumber([])); // Outputs: undefined
console.log(findMaxNumber([7, 22, 15])); // Outputs: 22

// ---------- 4 ------------- findMinNumber

function findMinNumber(numbers) {
    let max = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    let min = max;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < min) {
            min = numbers[i];
        }
    }
    if (max === 0) {
        return "undefined";
    }

    return min;
}

console.log(findMinNumber([5, 2, 9, 3])); // Returns: 2
console.log(findMinNumber([])); // Returns: undefined
console.log(findMinNumber([45, -10, 0, 30])); // Returns: -10

// ---------- 5 ----------- // findMinMax

function findMinMax(numbers) {
    let max = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    let min = max;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < min) {
            min = numbers[i];
        }
    }
    const object = {
        min: min,
        max: max
    };
    if (object.min === 0) {
        object.min = "undefind";
    }
    if (object.max === 0) {
        object.max = "undefind";
    }

    return object;
}

console.log(findMinMax([3, 1, 4, 1, 5, 9, 2, 6])); // Returns: { min: 1, max: 9 }
console.log(findMinMax([])); // Returns: { min: undefined, max: undefined }
console.log(findMinMax([7])); // Returns: { min: 7, max: 7 }

// --------------- 6 ---------------- findLongestShortestString

function findLongestShortestString(strings) {
    let count = 0;
    let longest = "";

    for (let i = 0; i < strings.length; i++) {
        if (strings[i].length > count) {
            count = strings[i].length;
        }
        if (count === strings[i].length) {
            longest = strings[i];
        }
    }
    let count1 = count;
    let shortest = "";
    for (let i = 0; i < strings.length; i++) {
        if (strings[i].length < count1) {
            count1 = strings[i].length;
        }
        if (count1 === strings[i].length) {
            shortest = strings[i];
        }
    }
    const object = {
        longest: longest,
        shortest: shortest
    };

    if (object.longest === "") {
        object.longest = "undefind";
    }
    if (object.shortest === "") {
        object.shortest = "undefind";
    }

    return object;
    // return longest;
}

console.log(findLongestShortestString(["apple", "banana", "grape", "kiwi"])); // Returns: { longest: "banana", shortest: "kiwi" }
console.log(findLongestShortestString([])); // Returns: { longest: undefined, shortest: undefined }
console.log(findLongestShortestString(["circle", "point"])); // Returns: { longest: "circle", shortest: "point" }

// ------------- 7 ------------- countCharactersIgnoreSpaces ???

function countCharactersIgnoreSpaces(str) {}
