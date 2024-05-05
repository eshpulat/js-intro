// --------- 1 ------------ extractFirstAndLast

function extractFirstAndLast(arr) {
    var array = [];
    var firstNumber = arr[0];
    array.push(firstNumber);

    var lastNumber = arr.slice(-1);
    var firstAndLastNumber = array.concat(lastNumber);

    console.log(firstAndLastNumber);
}

extractFirstAndLast([1, 2, 3, 4]); // Returns: [1, 4]
extractFirstAndLast([10, 20]); // Returns: [10, 20]

// ----------- 2 ----------- extractOddSpecialElements

function extractOddSpecialElements(arr) {
    if (arr.length <= 1) {
        console.log(arr);
    }
    if (arr.length > 1) {
        var array = [];
        var firstNumber = arr[0];
        array.push(firstNumber);

        var lengthArray = arr.length;
        var middleNumber = lengthArray / 2;
        var middleNumberArray = arr[Math.floor(middleNumber)];
        array.push(middleNumberArray);

        var lastNumber = arr[arr.length - 1];
        var firstAndLastNumber = array.concat(lastNumber);

        console.log(firstAndLastNumber);
    }
}
extractOddSpecialElements([1, 2, 3, 4, 5]); // Returns: [1, 3, 5]
extractOddSpecialElements([10, 20, 30, 40, 50, 60, 70]); // Returns: [10, 40, 70]
extractOddSpecialElements([15]); // Returns: [15]

// ---------- 3 ----------- sumStringNumbers

function sumStringNumbers(arr) {
    if (arr.length <= 1) {
        return parseInt(arr);
    }

    if (arr.length === 2) {
        sum = parseInt(arr[0]) + parseInt(arr[1]);
        return sum;
    }
    if (arr.length === 3) {
        sum = parseInt(arr[0]) + parseInt(arr[1]) + parseInt(arr[2]);

        return sum;
    }
}

console.log(sumStringNumbers(["1", "2", "3"])); // Returns: 6
console.log(sumStringNumbers(["10", "20"])); // Returns: 30
console.log(sumStringNumbers(["5"])); // Returns: 5

// --------- 4 ----------- findLongestOfFour

function findLongestOfFour(arr) {
    var lengthToString1 = arr[0].length;
    var lengthToString2 = arr[1].length;
    var lengthToString3 = arr[2].length;
    var lengthToString4 = arr[3].length;

    if (
        lengthToString1 > lengthToString2 &&
        lengthToString1 > lengthToString3 &&
        lengthToString1 > lengthToString4
    ) {
        console.log(arr[0]);
    } else if (
        lengthToString2 > lengthToString1 &&
        lengthToString2 > lengthToString3 &&
        lengthToString2 > lengthToString4
    ) {
        console.log(arr[1]);
    } else if (
        lengthToString3 > lengthToString1 &&
        lengthToString3 > lengthToString2 &&
        lengthToString3 > lengthToString4
    ) {
        console.log(arr[2]);
    } else {
        console.log(arr[3]);
    }
}

findLongestOfFour(["apple", "banana", "cherrye", "date"]); // Returns: "banana"
findLongestOfFour(["dog", "cat", "elephant", "bee"]); // Returns: "elephant"

// ----------- 5 ------------- sumSelectedWordLengths

function sumSelectedWordLengths(arr) {
    if (arr.length % 2 === 0) {
        var firstString = arr[0].length;
        var lastString = arr.pop();
        var lengthLastString = lastString.length;

        var sumStreingLength = firstString + lengthLastString;
        console.log(sumStreingLength);
    } else if (arr.length % 2 !== 0) {
        var firstString = arr.shift().length;

        var lengthArray = arr.length;
        var middleNumber = lengthArray / 2;
        var middleNumberArray = arr[Math.floor(middleNumber) - 1].length;

        var lastNumber = arr.pop().length;
        var sumOfString = firstString + middleNumberArray + lastNumber;

        console.log(sumOfString);
    }
}

sumSelectedWordLengths(["hello", "world", "again"]); // Returns: 15 (5 + 5 + 5)
sumSelectedWordLengths(["quick", "brown", "fox", "jumps"]); // Returns: 10 (5 + 5)
sumSelectedWordLengths(["one", "two", "three", "four", "five"]); // Returns: 12 (3 + 5 + 4)
