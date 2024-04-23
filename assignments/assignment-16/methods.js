// 1 ---- sumStrings

function sumStrings(num1, num2) {
    return parseInt(num1) + parseInt(num2);
}

console.log(sumStrings("123", "654")); // 777
console.log(sumStrings("101", "899")); // 1000

// 2 ------- sumDigits

function sumDigits(stringInteger) {
    var integer0 = parseInt(stringInteger[0]);
    var integer1 = parseInt(stringInteger[1]);
    var integer2 = parseInt(stringInteger[2]);
    var integer3 = parseInt(stringInteger[3]);
    var sumDigits = integer0 + integer1 + integer2 + integer3;
    return sumDigits;
}
console.log(sumDigits("1234")); // 10
console.log(sumDigits("9009")); // 18
console.log(sumDigits("1111")); // 4

// 3 ------ multiplyRandomPositions

function multiplyRandomPositions(strInteger) {
    var strLength = strInteger.length;
    var strRandom1 = Math.floor(Math.random() * [strLength]);
    var strRandom2 = Math.floor(Math.random() * [strLength]);
    var randomNum1 = strInteger[strRandom1];
    var randomNum2 = strInteger[strRandom2];

    var strMultiplies = parseInt(randomNum1) * parseInt(randomNum2);
    return strMultiplies;
}
console.log(multiplyRandomPositions("12345"));
console.log(multiplyRandomPositions("67890"));
console.log(multiplyRandomPositions("98765"));

// 4 ------- multiplyHalves

function multiplyHalves(numInteger) {
    if (numInteger % 2 === 0) {
        var halfnumInteger = numInteger.length / 2;
        var firstSliceInteger = numInteger.slice(0, halfnumInteger);
        var lastNumInteger = numInteger.slice(halfnumInteger);
        var halvesMultiply =
            parseInt(firstSliceInteger) * parseInt(lastNumInteger);
        return halvesMultiply;
    } else if (numInteger % 2 !== 0) {
        var halfnumInteger = Math.floor(numInteger.length / 2);
        var firstSliceInteger = numInteger.slice(0, halfnumInteger);
        var lastNumInteger = numInteger.slice(halfnumInteger + 1);
        var halvesMultiply =
            parseInt(firstSliceInteger) * parseInt(lastNumInteger);
        return halvesMultiply;
    }
}
console.log(multiplyHalves("123456"));
console.log(multiplyHalves("56789"));
console.log(multiplyHalves("246802343"));

// 5 --------- isOddStringInteger

function isOddStringInteger(strInteger) {
    var number = parseInt(strInteger);
    var oddNumber = number % 2 !== 0;
    return oddNumber;
}
console.log(isOddStringInteger("1234")); // false
console.log(isOddStringInteger("2468")); // false
console.log(isOddStringInteger("1357")); // true

// 6 --------- roundAndConvert

function roundAndConvert(number) {
    var wholeNumber = Math.round(number);
    var toStringNumber = wholeNumber.toString();
    return toStringNumber;
}

console.log(roundAndConvert(12.3));
console.log(roundAndConvert(5.499));
console.log(roundAndConvert(7.1));

// 7 -------- formatCurrency

function formatCurrency(number) {
    var decimalNumber = number.toFixed(2);
    var withDollarSign = "$" + decimalNumber;
    return withDollarSign;
}
console.log(formatCurrency(1500));
console.log(formatCurrency(15.378));
console.log(formatCurrency(0.99));

// 8 --------- extractDecimal ???????

function extractDecimal(number) {
    // var toStringNumber = number.toString();
    var stringNumaber = number.toString();
    var parseIntNumber = parseInt(stringNumaber);
    var minusNumber = number - parseIntNumber;
    console.log(parseIntNumber);
    return minusNumber;
}
console.log(extractDecimal(123.456));

// 9 ----------- integerToString ???????

function integerToString(number) {
    var stringToNumber = parseFloat(number);
    return stringToNumber;
}
console.log(integerToString(1234));

// 10 ----------- displayAsPercentage
