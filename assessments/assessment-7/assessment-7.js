// Challenge-1

function countAE(str1) {
    var countCharUpperStr1A = str1.replaceAll("A", "");
    var countCharUpperStr1E = str1.replaceAll("E", "");
    var countCharUpperStr1a = str1.replaceAll("a", "");
    var countCharUpperStr1e = str1.replaceAll("e", "");
    var lengthOfCountStr1A = countCharUpperStr1A.length;
    var lengthOfCountStr1E = countCharUpperStr1E.length;
    var lengthOfCountStr1a = countCharUpperStr1a.length;
    var lengthOfCountStr1e = countCharUpperStr1e.length;
    var included = str1.includes(countCharUpperStr1A);
    console.log(included);
    console.log(countCharUpperStr1A);

    // var countCharlowera = str1.replace("a", "") && str2.replace("a", "");
    // var countCharUpperE = str1.replace("E", "") && str2.replace("E", "");
    // var countCharlowere = str1.replace("e", "") && str2.replace("e", "");
    // var lowerCaseStr = str1.toLowerCase();
    // var lowerCaseStr = str2.toLowerCase();
    // var countCharstr1 = str1.replace("a", "");
    // var countCharstr2 = str2.replace("A", "");
}
console.log(countAE("AREA")); // True
// console.log(countAE("banana", "SAND") === "banana"); // True
// console.log(countAE("Agile", "Eagle") === "Eagle"); // True
// console.log(countAE("case", "CASE") === "case"); // True, as either is acceptable since the counts are equal.
// console.log(countAE("rate", "tear") === "rate"); // True, as either is acceptable since the counts are equal.

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
