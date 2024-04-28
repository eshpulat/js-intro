// ------ 1 ----- sumExclusiveRange

function sumExclusiveRange(min, max) {
    var themselvesMin = min + 1;
    var sum = 0;
    if (max < min) {
        return "Not valid range.";
    }
    for (var i = themselvesMin; i < max; i++) {
        sum += i;
    }
    return sum;
}
console.log(sumExclusiveRange(1, 5));
console.log(sumExclusiveRange(5, 1));
console.log(sumExclusiveRange(3, 7));

// -------- 2 -------- sumEvenNumbers

function sumEvenNumbers(n) {
    var sum = 0;

    for (var i = 0; i <= n; i++) {
        if (i % 2 !== 0) {
            continue;
        }
        sum += i;
    }
    return sum;
}

console.log(sumEvenNumbers(10)); // 32
console.log(sumEvenNumbers(7)); // 12
console.log(sumEvenNumbers(15)); // 56

// ------ 3 ------- factorial
function factorial(n) {
    var factorial = 1;
    for (var i = n; i >= 1; i--) {
        factorial = factorial * i;
    }
    return factorial;
}
console.log(factorial(5));
console.log(factorial(3));
console.log(factorial(7));

// ----------- 4 --------- sumUpToMax

function sumUpToMax(num1, num2, num3) {
    var maxNum = num1;
    if (maxNum < num2) maxNum = num2;
    if (maxNum < num3) maxNum = num3;

    var sum = 0;
    for (var i = 1; i <= maxNum; i++) {
        sum += i;
    }
    return sum;
}

console.log(sumUpToMax(3, 5, 1)); // Outputs: 15 (sum of numbers from 1 to 5)
console.log(sumUpToMax(10, 5, 3)); // Outputs: 55 (sum of numbers from 1 to 10)
console.log(sumUpToMax(1, 2, 3)); // Outputs: 6 (sum of numbers from 1 to 3)
console.log(sumUpToMax(-1, -2, -3)); // Outputs: 0 (no positive numbers up to the max) // ???????
console.log(sumUpToMax(7, 0, 5)); // Outputs: 0 (presence of zero invalidates the sum) // ??????

// ------- 5 --------- sumDivisibleByFour

function sumDivisibleByFour(min, max) {
    var sum = 0;
    for (var i = min; i <= max; i++) {
        if (i % 4 !== 0) {
            continue;
        }
        sum += i;
    }
    return sum;
}

console.log(sumDivisibleByFour(1, 10)); // Outputs: 12 (4+8)
console.log(sumDivisibleByFour(4, 20)); // Outputs: 56 (4+8+12+16+20)
console.log(sumDivisibleByFour(3, 15)); // Outputs: 24 (4+8+12)
