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

// 4. countPerfectSquares ?????????

// ---------- 5 ---------- countDigitsSumDivisibleByThree
function countDigitsSumDivisibleByThree(num1, num2) {
    var result = 0;
    for (var i = num1; i <= num2; i++) {
        if (i % 3 === 0) result += 1;
    }
    return result;
}
// console.log(countDigitsSumDivisibleByThree(7, 12)); // Outputs: 2
