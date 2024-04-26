// Challenge-1

// Challenge-2

function findMax(num1, num2, num3, num4) {
    if (num1 > num2 && num1 > num3 && num1 > num4) {
        return num1;
    } else if (num2 > num1 && num2 > num3 && num2 > num4) {
        return num2;
    } else if (num3 > num1 && num3 > num2 && num3 > num4) {
        return num3;
    } else return num4;
}

console.log(findMax(1, 2, 3, 4) === 4); // True
console.log(findMax(4, 1, 2, 3) === 4); // True
console.log(findMax(-3, -1, -4, -2) === -1); // True
console.log(findMax(0, 0, 0, 0) === 0); // True
console.log(findMax(102, 24, 95, 3) === 102); // True
console.log(findMax(56, 78, 12, 34) === 78); // True

// Challenge-3

function findMinAbsValue(str1, str2, str3) {
    var stringToNumber1 = parseFloat(str1);
    var stringToNumber2 = parseFloat(str2);
    var stringToNumber3 = parseFloat(str3);

    var number1 = Math.abs(stringToNumber1);
    var number2 = Math.abs(stringToNumber2);
    var number3 = Math.abs(stringToNumber3);

    if (number1 < number2 && number1 < number3) {
        return number1;
    } else if (number2 < number1 && number2 < number3) {
        return number2;
    } else return number3;
}
console.log(findMinAbsValue("-10", "5.5", "3.14159") === 3.14159); // True
console.log(findMinAbsValue("0.0001", "-100", "20") === 0.0001); // True
console.log(findMinAbsValue("-1.5", "2.5", "-1.6") === 1.5); // True
console.log(findMinAbsValue("102.3", "-55.55", "55.56") === 55.55); // True
console.log(findMinAbsValue("-999", "1000", "0") === 0); // True

// Challenge-4

function fewerZeroes(num1, num2) {
    var convertToString1 = num1.toString();
    var convertToString2 = num2.toString();

    var replaceToString1 = convertToString1.replaceAll("0", " ");
    var replaceToString2 = convertToString2.replaceAll("0", " ");

    if (replaceToString1 === replaceToString2) {
        return num1;
    } else if (replaceToString1 < replaceToString2) {
        return num1;
    } else {
        return num2;
    }
}
console.log(fewerZeroes(1234567890, 123456789) === 123456789); // True
console.log(fewerZeroes(100000001, 200000000) === 100000001); // True
console.log(fewerZeroes(900000000, 800000001) === 800000001); // True
console.log(fewerZeroes(123000123, 456000456) === 123000123); // True
console.log(fewerZeroes(100100100, 200200200) === 100100100); // True

// Challenge-5

function multiplyMinMaxLength(str1, str2, str3) {
    var strLength1 = str1.length;
    var strLength2 = str2.length;
    var strLength3 = str3.length;

    var maxVal = strLength1;
    if (strLength2 < maxVal) maxVal = strLength2;
    if (strLength3 < maxVal) maxVal = strLength3;

    var minVal = strLength1;
    if (strLength2 > minVal) minVal = strLength2;
    if (strLength3 > minVal) minVal = strLength3;

    var multiplyLength = maxVal * minVal;
    return multiplyLength;
}

console.log(multiplyMinMaxLength("hello", "world", "hi") === 10); // True, min length is 2 ("hi"), max length is 5 ("hello" or "world"), product is 10
console.log(multiplyMinMaxLength("apple", "banana", "cherry") === 30); // True, min length is 5 ("apple"), max length is 6 ("banana" or "cherry"), product is 30
console.log(multiplyMinMaxLength("short", "medium", "lengthier") === 35); // True, min length is 5 ("short"), max length is 9 ("lengthier"), product is 45
console.log(multiplyMinMaxLength("one", "three", "five") === 15); // True, min length is 3 ("one"), max length is 5 ("three" or "five"), product is 15
console.log(multiplyMinMaxLength("tiny", "bit", "longer") === 18); // True, min length is 3 ("bit"), max length is 6 ("longer"), product is 18
