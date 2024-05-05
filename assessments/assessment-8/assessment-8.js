// -------- 1 --------- Challenge-1

function isPrime(number) {
    if (number < 2) {
        return false;
    }

    if (number <= 3) {
        return true;
    }

    for (var i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}
// console.log(isPrime(2)); // Should return true
// console.log(isPrime(3)); // Should return true
// console.log(isPrime(6)); // Should return false
// console.log(isPrime(29)); // Should return true

// ---------- 2 --------- Challenge-2 ?????????????

function listPrimes(n) {
    if (n === 1) {
        console.log(" ");
    }
    for (var i = 1; i <= n; i++) {
        if (i < 2) {
            continue;
        }
        if (i <= 3) {
            console.log(i.toString());
        }

        if (i % 2 !== 0 && i % 3 !== 0) {
            var stringToNumber = i.toString();

            console.log(stringToNumber);
        }
    }
}

listPrimes(10); // Should return "2, 3, 5, 7"
listPrimes(20); // Should return "2, 3, 5, 7, 11, 13, 17, 19"
listPrimes(1); // Should return ""
listPrimes(2); // Should return "2"

// ------------ 3 ------------- generateRandomString16 ????????????

// ------------ 4 -------------- Challenge-4

// function filterAndFormatNumbers(min, max){
