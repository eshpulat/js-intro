// ------------------------------------ isValidEmail(email)

function isValidEmail(email) {
    let symbol = 0;
    for (let i = 0; i < email.length; i++) {
        if (email[i] === "@") {
            symbol++;
        }
    }
    if (symbol === 1) {
        console.log(true);
    } else console.log(false);

    let splitEmail = email.split("@");
    console.log(splitEmail);
    let userName = splitEmail[0];
    let dot = 0;
    let underscore = 0;

    for (let i = 0; i < userName.length; i++) {
        if (userName[i] === ".") {
            dot++;
        }
        if (userName[i] === "_") {
            underscore++;
        }

        if (userName[i] === ".") {
            console.log(true);
        } else if (userName[i] === "_") {
            console.log(true);
        } else if (
            userName[i][0] === "_" &&
            userName[i][userName.length - 1] === "_"
        ) {
            console.log(false);
        } else if (
            userName[i][0] === "." &&
            userName[i][userName.length - 1] === "."
        ) {
            console.log(false);
        }
    }
    if (dot === 1) {
        console.log(true);
    } else console.log(false);
    if (underscore === 1) {
        console.log(true);
    } else console.log(false);
}

// Regular and valid email
isValidEmail("john.doe@example.com"); // Should return: true

// Valid email with numbers in username
isValidEmail("john2.doe3@example.com"); // Should return: true

// Valid email with underscore in username
isValidEmail("john_doe@example.com"); // Should return: true

// Valid email with capital letters
isValidEmail("John.Doe@Example.com"); // Should return: true

// Test for an email with three-letter domain extension
isValidEmail("john.doe@example.net"); // Should return: true

// Test for an email with two-letter domain extension
isValidEmail("john.doe@example.co"); // Should return: true

// Test for an email with one letter domain name
isValidEmail("john@d.com"); // Should return: true

// Test for an email with no "@" symbol:
isValidEmail("johndoexample.com"); // Should return: false

// Test for an email with multiple "@" symbols:
isValidEmail("john@doe@example.com"); // Should return: false

// Test for an email where username starts or ends with a dot or an underscore:
isValidEmail(".john@doe.com"); // Should return: false
isValidEmail("john.@doe.com"); // Should return: false
isValidEmail("_john@doe.com"); // Should return: false
isValidEmail("john_@doe.com"); // Should return: false

// Test for an email where username has adjacent dots or underscores:
isValidEmail("john..doe@example.com"); // Should return: false
isValidEmail("john__doe@example.com"); // Should return: false
isValidEmail("john._doe@example.com"); // Should return: false
isValidEmail("john_.doe@example.com"); // Should return: false

// Test for an email where domain does not have exactly one "." character:
isValidEmail("john@doecom"); // Should return: false
isValidEmail("john@doe.com.com"); // Should return: false

// Test for an email where domain name or extension is not of valid length:
isValidEmail("john@doe.c"); // Should return: false
isValidEmail("john@doe.comm"); // Should return: false

// Test for an email where domain name or extension contains invalid characters:
isValidEmail("john@do3.com"); // Should return: false
isValidEmail("john@doe.c_m"); // Should return: false
