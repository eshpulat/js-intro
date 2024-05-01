// -------- 1 --------- Challenge-1

function isPrime(n) {
    for (var i = 2; i <= n; i++) {
        if (n % i !== 0) {
            return true;
        } else if (n / 2 === 1) {
            return true;
        } else return false;
    }
}
console.log(isPrime(2)); // Should return true
console.log(isPrime(3)); // Should return true
console.log(isPrime(6)); // Should return false
console.log(isPrime(29)); // Should return true

// ---------- 2 --------- Challenge-2

function listPrimes(n) {
    for (var i = 1; i <= n; i++) {
        if (i / 3 === 0 && i / 2 === 0) {
            console.log(i);
        }
        if (i % 2 !== 0 && i % 3 !== 0) {
            console.log(i);
        }
    }
}
listPrimes(10); // Should return "2, 3, 5, 7"
listPrimes(20); // Should return "2, 3, 5, 7, 11, 13, 17, 19"
listPrimes(1); // Should return ""
listPrimes(2); // Should return "2"
