// ---------- Challenge-1 ---------- // ??????

function areAnagrams(str1, str2) {
    let str1LowerCase = str1.toLowerCase();
    let str2LowerCase = str2.toLowerCase();
    let char1 = "";
    let char2 = "";
    let count = 0;
    for (let i = 0; i < str1LowerCase.length; i++) {
        if (str1LowerCase[i].length > count) {
            char1 = str1LowerCase[i];
        }

        for (let i = 0; i < str2LowerCase.length; i++) {
            if (str2LowerCase[i].length > count) {
                char2 = str2LowerCase[i];
            }
        }
        if (char1 === char2) {
            return true;
        }
    }
}

console.log(areAnagrams("Listen", "Silent")); // Expected outcome: true
console.log(areAnagrams("Hello", "World")); // Expected outcome: false
console.log(areAnagrams("Dormitory", "Dirty room")); // Expected outcome: true

// ---------- Challenge-2 ------------- //

function findFrequentChars(str, n) {
    let charCount = {};
    let array = [];

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (charCount[char]) {
            charCount[char]++;
        }

        // if (char1 === char2) {
        //     return true;
        // }
    }
    return charCount[char];
}

console.log(findFrequentChars("hello world", 1)); // Might return ['l', 'o']
console.log(findFrequentChars("abracadabra", 2)); // Might return ['a', 'b', 'r']
console.log(findFrequentChars("mississippi", 3)); // Might return ['i', 's']
