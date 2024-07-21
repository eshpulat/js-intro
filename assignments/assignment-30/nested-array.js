// let nestedArray = [
//     ["apple", "banana"],
//     ["carrot", "broccoli"]
// ];

// for (let i = 0; i < nestedArray.length; i++) {
//     for (let j = 0; j < nestedArray[i].length; j++) {
//         console.log(nestedArray[i][j]);
//     }
// }

// let coordinates = [
//     [37.7749, -122.4194],
//     [34.0522, -118.2437],
//     [51.5074, -0.1278]
// ];

// for (let i = 0; i < coordinates.length; i++) {
//     for (let j = 0; j < coordinates[i].length; j++) {
//         console.log(coordinates[i][j]);
//     }
// }
// ------------- Assignment -------------- //

// ------------- 1 ---------  findMaxNumber

function findMaxNumber(arr) {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] > max) {
                max = arr[i][j];
            }
        }
    }
    return max;
}

// console.log(
//     findMaxNumber([
//         [1, 2, 3],
//         [4, 5, 6],
//         [7, 8, 9]
//     ])
// );
// Expected output: 9

// ------------- 2 ------------ countCharacters ???????????????????????

function countCharacters(arr) {
    let charCount = {};
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            let char = arr[i][j];
            if (charCount[char]) {
                charCount[char]++;
            } else {
                charCount[char] = 1;
            }
        }
    }
    // return charCount[char];
}

// console.log(
//     countCharacters([
//         ["a", "b", "a"],
//         ["c", "a", "d"]
//     ])
// );
// // Expected output: { a: 3, b: 1, c: 1, d: 1 }

// ------------- 3 -------------- filterDivisibleByThree

function filterDivisibleByThree(arr) {
    let array = [];

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] % 3 === 0) {
                array.push(arr[i][j]);
            }
        }
    }
    return array;
}

// console.log(
//     filterDivisibleByThree([
//         [1, 2, 3],
//         [4, 5, 6],
//         [7, 8, 9]
//     ])
// );
// // Expected output: [3, 6, 9]

// -------------- 4 ------------ findLongestString

function findLongestString(arr) {
    let max = 0;
    let longestStr = "";

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            let string = arr[i][j].length;
            if (string > max) {
                max = string;
            }
            if (max === string) {
                longestStr = arr[i][j];
            }
        }
    }
    return longestStr;
}

// console.log(
//     findLongestString([
//         ["apple", "banana"],
//         ["carrot", "date", "eggplant"],
//         ["fig"]
//     ])
// );
// // Expected output: 'eggplant'

// -------------- 5 --------------- sumArray ????????????????????????

function sumArray(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {}
    }
}

console.log(sumArray([1, 2, [3, 4, 5, 6], 7, [8, 9]]));
// Expected output: 45

// ------------------- 6 ------------- capitalizeStrings ???????????

function capitalizeStrings(arr) {
    let array1 = [];
    let array = [];

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            array1.push(arr[i][j].toUpperCase());
        }
    }
}

// console.log(
//     capitalizeStrings([["apple", "banana"], ["carrot", "date"], ["eggplant"]])
// );
// // Expected output: [['APPLE', 'BANANA'], ['CARROT', 'DATE'], ['EGGPLANT']]

// --------------- 7 ------------------ findMinMaxArrays

function findMinMaxArrays(arr) {
    let max = 0;
    let min = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            console.log(arr[i][j]);
        }
    }
    return;
}

console.log(
    findMinMaxArrays([
        [1, 2, 3],
        [4, 5],
        [6, 7, 8, 9]
    ])
);
// Expected output: { min: [4, 5], max: [6, 7, 8, 9] }

// ----------------- 8 ---------------- mergeNestedArrays

function mergeNestedArrays(arr) {
    let array = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            array.push(arr[i][j]);
        }
    }
    return array;
}

// console.log(
//     mergeNestedArrays([
//         [1, 2],
//         [3, 4],
//         [5, 6]
//     ])
// );
// // Expected output: [1, 2, 3, 4, 5, 6]
