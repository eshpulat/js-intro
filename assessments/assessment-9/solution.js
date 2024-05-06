console.log("Muhammad");

// Challenge-4

function generatePatternedString(n) {
    var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    var alphabetRandom = Math.ceil(Math.random() * alphabet.length);
    var randomLetters = alphabet[alphabetRandom];

    var stringNumber = "0123456789";
    var stringRandom = Math.ceil(Math.random() * stringNumber.length);
    var randomStringNumber = stringNumber[stringRandom];

    var string = "";

    for (var i = 1; i <= n; i++) {
        if (i % 4 < 3) {
            string += randomLetters;
        } else {
            string += randomStringNumber;
        }
    }
    console.log(string);
}
generatePatternedString(7); // Output might look like "xaz4bnc"
generatePatternedString(10); // Output might look like "tkc4qwe9rt"
