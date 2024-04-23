// ---------- 1 ---------- //

function isOdd(number) {
    var oddNumber = number % 2 !== 0;
    console.log(oddNumber);
}
isOdd(3); // true
isOdd(4); // false

// ---------- 2 ------------//

function isEven(number) {
    var evenNumber = number % 2 === 0;
    console.log(evenNumber);
}
isEven(4); // true
isEven(5); // false

// ------------ 3 -----------//

function isIncludes(mainString, targetString) {
    var targetStringlowercase = targetString.toLowerCase();
    var checkIncludes = mainString.includes(targetStringlowercase);

    console.log(checkIncludes);
}
isIncludes("Hello world", "world"); // true
isIncludes("Look here", "there"); // false

// ---------- 4 --------------//

function minValue(number3, number4) {
    if (number3 < number4) {
        console.log(number3);
    } else if (number3 > number4) {
        console.log(number4);
    }
    if (number3 === number4) {
        console.log(number3, number4);
    }
}
minValue(20, 10);
minValue(40, 40);

// ----------- 5 ------------//

function maxValue(number5, number6) {
    if (number5 > number6) {
        console.log(number5);
    } else if (number5 < number6) {
        console.log(number6);
    }
    if (number5 === number6) {
        console.log(number5, number6);
    }
}
maxValue(10, 20);
maxValue(30, 30);

// ----------- 6 ------------//

function power(base, exponent) {
    var exponentiation = base ** exponent;
    console.log(exponentiation);
}
power(2, 3); // 8
power(5, 0); // 1

// -------------- 7 -----------//

function isProductGreater(num1, num2, num3) {
    var product = num1 * num2 * num3;
    var sum = num1 + num2 + num3;
    console.log(product > sum);
}
isProductGreater(1, 2, 3); // false
isProductGreater(5, 6, 2); // true

// ------------ 8 -----------//

function swapFirstAndLastChars(string) {
    if (string.length > 1) {
        var firstChar = string[0];
        var lastChar = string[string.length - 1];
        var middle = string.slice(1, string.length - 1);
        var newString = lastChar + middle + firstChar;
        console.log(newString);
    } else {
        console.log(string); // Handles case where string is only one character or empty
    }
}

// ------------- 9 ------------//

function firstHalf(string2) {
    var cauntchar = string2.length;
    var devidedChar = cauntchar / 2;
    var mathfloornum = Math.floor(devidedChar);
    var stringSlice = string2.slice(0, mathfloornum);
    console.log(stringSlice);
}
firstHalf("Hello"); // he
firstHalf("four"); // fo

// ------------ 10 ------------//

function getInitials(fullName) {
    var firstSpaceIndex = fullName.indexOf(" ");
    var lastSpaceIndex = fullName.lastIndexOf(" ");
    var initial1 = fullName[0];
    var initial2 = fullName[firstSpaceIndex + 1];
    var initial3 = fullName[lastSpaceIndex + 1];
    var initials = initial1 + initial2 + initial3;
    console.log(initials.toUpperCase());
}
