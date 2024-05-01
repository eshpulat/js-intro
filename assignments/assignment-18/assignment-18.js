// -------- 1 ----------- countDivisibleByThreeOrFive

function countDivisibleByThreeOrFive(n) {
    var divisibleNum = 0;
    for (var i = 1; i < n; i++) {
        if (i % 3 === 0 && i % 5 !== 0) divisibleNum += 1;
        else if (i % 5 === 0 && i % 3 !== 0) divisibleNum += 1;
    }
    return divisibleNum;
}
// console.log(countDivisibleByThreeOrFive(15)); // Outputs: 6 (3, 5, 6, 9, 10, 12)
// console.log(countDivisibleByThreeOrFive(10)); // Outputs: 4 (3, 5, 6, 9)
// console.log(countDivisibleByThreeOrFive(30)); // Outputs: 12 (3, 5, 6, 9, 10, 12, 18, 20, 21, 24, 27)

// -------- 2 --------- sumUpToBoth
function sumUpToBoth(num1, num2) {
    var sumUpNum1 = 0;
    for (var i = 1; i <= num1; i++) {
        sumUpNum1 += i;
    }
    var sumUpNum2 = 0;
    for (var i = 1; i <= num2; i++) {
        sumUpNum2 += i;
    }
    return sumUpNum1 + sumUpNum2;
}

// console.log(sumUpToBoth(5, 7)); // Outputs: 43 (1+2+3+4+5 + 1+2+3+4+5+6+7)
// console.log(sumUpToBoth(3, 4)); // Outputs: 16 (1+2+3 + 1+2+3+4)
// console.log(sumUpToBoth(6, 3)); // Outputs: 27 (1+2+3+4+5+6 + 1+2+3)

// -------- 3 --------- sumOfSquares
function sumOfSquares(n) {
    var sum = 0;
    for (var i = 1; i <= n; i++) {
        sum += i * i;
    }
    return sum;
}
// console.log(sumOfSquares(3)); // Outputs: 14 (1^2 + 2^2 + 3^2)
// console.log(sumOfSquares(5)); // Outputs: 55 (1^2 + 2^2 + 3^2 + 4^2 + 5^2)
// console.log(sumOfSquares(2)); // Outputs: 5 (1^2 + 2^2)

//  ---------- 4 ---------- countPerfectSquares

function countPerfectSquares(num1, num2) {
    var counter = 0;
    for (var i = num1; i <= num2; i++) {}
    return counter;
}

console.log(countPerfectSquares(1, 25)); // Outputs: 5 (1, 4, 9, 16, 25)
console.log(countPerfectSquares(9, 49)); // Outputs: 5 (9, 16, 25, 36, 49)
console.log(countPerfectSquares(30, 70)); // Outputs: 2 (36, 49)

// ---------- 5 ---------- countDigitsSumDivisibleByThree

function sumUpDigits(number) {
    if (number < 10) {
        return number;
    }

    var stringNumber = number.toString();
    var sum = 0;
    sum += parseInt(stringNumber[0]) + parseInt(stringNumber[1]);

    if (stringNumber.length === 3) {
        sum += parseInt(stringNumber[2]);
    }

    return sum;
}

function countDigitsSumDivisibleByThree(min, max) {
    var counter = 0;
    for (var i = min; i <= max; i++) {
        var digitSum = sumUpDigits(i);
        if (digitSum % 3 === 0) {
            counter++;
        }
    }
    return counter;
}
// console.log(countDigitsSumDivisibleByThree(7, 12)); // Outputs: 2

// ------------- 6 ------------- multiplyAllDigits

function multiplyAllDigits(num1, num2) {
    var stringNumber1 = num1.toString();
    var stringNumber2 = num2.toString();
    var multiplyNumber1 =
        parseInt(stringNumber1[0]) *
        parseInt(stringNumber1[1]) *
        parseInt(stringNumber1[2]);

    var multiplyNumber2 =
        parseInt(stringNumber2[0]) *
        parseInt(stringNumber2[1]) *
        parseInt(stringNumber2[2]);

    return multiplyNumber1 * multiplyNumber2;
}

// console.log(multiplyAllDigits(123, 678));
// // Expected output: 2016
// // Explanation: 1*2*3*6*7*8 = 2016

// console.log(multiplyAllDigits(234, 567));
// // Expected output: 30240
// // Explanation: 2*3*4*5*6*7 = 5040

// console.log(multiplyAllDigits(111, 999));
// // Expected output: 729
// // Explanation: 1*1*1*9*9*9 = 729
