// // ------------- 1 ------------//

function sumUp(num1, num2, num3, num4, num5) {
    var total = 0;
    if (num1 % 2 === 0) {
        total += num1;
    }
    if (num2 % 2 === 0) {
        total += num2;
    }
    if (num3 % 2 === 0) {
        total += num3;
    }
    if (num4 % 2 === 0) {
        total += num4;
    }
    if (num5 % 2 === 0) {
        total += num5;
    }

    return total;
}
console.log(sumUp(2, 4, 5, 7, 8)); // 14
console.log(sumUp(1, 3, 5, 7, 9)); // 0
console.log(sumUp(2, 2, 2, 2, 2)); // 10

// ----------- 2-----------//

function max(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        return num1;
    } else if (num2 > num1 && num2 > num3) {
        return num2;
    } else {
        return num3;
    }
}
console.log(max(100, 90, 120));

// -------------- 3 ---------------//

function min(num1, num2, num3) {
    if (num1 < num2 && num1 < num3) {
        return num1;
    } else if (num2 < num1 && num2 < num3) {
        return num2;
    } else {
        return num3;
    }
}
console.log(min(100, 90, 120));

// -------------- 4 ------------- //

function longestString(string1, string2, string3) {
    if (string1.length > string2.length && string1.length > string3.length) {
        return string1;
    } else if (
        string2.length > string1.length &&
        string2.length > string3.length
    ) {
        return string2;
    } else {
        return string3;
    }
}

console.log(longestString("hello", "world", "spaces here")); // Outputs: "spaces here"
console.log(longestString("short", "medium length", "longest one here")); // Outputs: "longest one here"
console.log(longestString("one", "two", "three")); // Outputs: "three"
