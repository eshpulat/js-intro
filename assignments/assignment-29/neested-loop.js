// ------------- 1 ------------- characterPairs

function characterPairs(str) {
    let posiblePairs = [];
    for (let i = 0; i < str.length; i++) {
        let pairs1 = str[i];
        for (let j = i + 1; j < str.length; j++) {
            let pairs2 = str[j];

            posiblePairs.push(pairs1 + pairs2);
        }
    }
    return posiblePairs;
}

// console.log(characterPairs("abc")); // Expected output: ['ab', 'ac', 'bc']
// console.log(characterPairs("abcd")); // Expected output: ['ab', 'ac', 'ad', 'bc', 'bd', 'cd']

// ---------------- 2 ------------- divisibleByThreePairSum ??????????

function divisibleByThreePairSum(arr) {
    let array = [];
    for (let i = 0; i < arr.length; i++) {
        let num1 = arr[i];
        for (let j = i + 1; j < arr.length; j++) {
            let num2 = arr[j];
            if ((num1 + num2) % 3 === 0) {
                array.push([num1, num2]);
            }
        }
    }
    return array;
}

// console.log(divisibleByThreePairSum([1, 2, 3, 4, 5]));
// // Expected output: [[0, 1], [1, 3], [0, 4], [3, 4]]

// console.log(divisibleByThreePairSum([3, 6, 9, 12]));
// // Expected output: [[0, 1], [0, 2], [0, 3], [1, 2], [1, 3], [2, 3]]

// ------------- 3 --------------- sumOfPairs

function sumOfPairs(arr, num) {
    let array = [];
    for (let i = 0; i < arr.length; i++) {
        let num1 = arr[i];

        for (let j = i + 1; j < arr.length; j++) {
            let num2 = arr[j];

            if (num1 + num2 === num) {
                array.push([num1, num2]);
            }
        }
    }
    return array;
}

// console.log(sumOfPairs([1, 2, 3, 4, 5], 5));
// // Expected output: [[1, 4], [2, 3]]

// console.log(sumOfPairs([10, 20, 30, 40, 50], 50));
// // Expected output: [[10, 40], [20, 30]]

// ----------- 4 ------------- checkPrime

function checkPrime(num) {
    if (num % 2 !== 0 && num % 3 !== 0) {
        return true;
    } else return false;
}

// console.log(checkPrime(7));
// // Expected output: true

// console.log(checkPrime(4));
// // Expected output: false

// console.log(checkPrime(13));
// // Expected output: true

// ------------- 5 ----------- primeRange ???????

function primeRange(arr) {
    let num1 = parseInt(arr[0]);
    let num2 = parseInt(arr[1]);

    let count = 0;
    let array = [];
    let object = {};

    for (let i = 0; i <= num2; i++) {
        let num3 = arr[i];
        // console.log(num3);
        // console.log(num1);
        // for (let j = num1[1]; j <= num1[2]; j++) {}

        // if (arr[i] % 2 === 0 && arr[i] % 3 === 0) {
        //     // count += arr[i];
        //     // console.log(count);
        //     // array.push(arr[i]++);
        // }
    }
    // return array;
}

// console.log(primeRange([10, 20]));
// // Expected output: { primes: [11, 13, 17, 19], count: 4 }

// console.log(primeRange([1, 10]));
// // Expected output: { primes: [2, 3, 5, 7], count: 4 }

// --------------- 6 ------------ allSubstrings ????????

function allSubstrings(str) {
    let array = [];
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j <= str.length; j++) {
            let str2 = str.slice(i, j);
            array.push(str2);
        }
    }

    return array;
}

console.log(allSubstrings("abc"));
// Expected output: ['a', 'ab', 'abc', 'b', 'bc', 'c']

console.log(allSubstrings("abcd"));
// Expected output: ['a', 'ab', 'abc', 'abcd', 'b', 'bc', 'bcd', 'c', 'cd', 'd']
