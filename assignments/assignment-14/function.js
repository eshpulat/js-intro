// ---------- 1 ---------- //

function isOdd(number) {
    var oddNumber = number % 2 !== 0;
    console.log(oddNumber);
}
isOdd(3); // true
isOdd(4); // false

// ---------- 2 ------------//

function isEven(number2) {
    var evenNumber = number2 % 2 === 0;
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
    if (number5 < number6) {
        console.log(number6);
    } else if (number5 > number6) {
        console.log(number5);
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
    var numproductsum = num1 * num2 * num3 > num1 + num2 + num3;
    console.log(numproductsum);
}
isProductGreater(1, 2, 3); // false
isProductGreater(5, 6, 2); // true

// ------------ 8 -----------//

function swapFirstAndLastChars(string) {
    var stringfirstchar = string[0];
    var stringmiddlechar = string.slice(1, -1);
    var stringlastchar = string.slice(-1);
    var swap = stringlastchar + stringmiddlechar + stringfirstchar;
    console.log(swap);
}
swapFirstAndLastChars("hello"); // oellh
swapFirstAndLastChars("abcd"); // dbsa

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
    var firstLetterName = fullName[0];
    var secondLetterIdx = fullName.indexOf(" ");
    var secondLetterName = fullName[secondLetterIdx + 1];
    var withoutfirstspace = fullName.replace(" ", "");
    var thirdletterIdx = withoutfirstspace.indexOf(" ");
    var thirdLetterName = withoutfirstspace[thirdletterIdx + 1];
    var fullNameLetter = firstLetterName + secondLetterName + thirdLetterName;
    console.log(fullNameLetter);
}
getInitials("John Fitzgerald Kennedy"); // JFK
getInitials("Martin Luther King"); //  MLK
