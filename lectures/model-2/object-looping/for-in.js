let car = {
    brand: "Toyota",
    model: "Camry",
    year: 2022,
    color: "silver",
    mileage: 15000
};

// console.log(car);

for (let key in car) {
    // console.log(`${key}: ${car[key]}`);
    // console.log(`${key} : ${car[key]}`);
}

// use case

function mostFrequentChar(str) {
    // Step 1: Create an empty object to store character counts
    let charCount = {};

    // Step 2: Loop through the string to count occurrences of each character
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        console.log(str[i]);
        if (charCount[char]) {
            charCount[char]++;
            console.log(charCount[char]);
        } else {
            charCount[char] = 1;
        }
    }

    // Step 3: Initialize variables to track the most frequent character
    let maxChar = "";
    let maxCount = 0;

    // Step 4: Loop through the charCount object to find the most frequent character
    for (let char in charCount) {
        if (charCount[char] > maxCount) {
            maxChar = char;
            maxCount = charCount[char];
        }
    }

    // Step 5: Return the most frequent character
    return maxChar;
}

// Example usage:
let result = mostFrequentChar("hello world");
console.log(`Most frequent character: ${result}`); // Output: Most frequent character: l
