// Generate a Random User Name

var random = Math.floor(Math.random() * 10) + 1;

if (random >= 1 && random <= 3) {
    console.log("Bob");
} else if (random >= 4 && random <= 7) {
    console.log("Martin");
} else {
    console.log("Jennifer");
}

// Select a Greeting Message Template

var randomnumber = Math.ceil(Math.random() * 4);
var name = "Muhammad";

if (randomnumber === 1) {
    console.log(
        `Dear ${name}, wishing you a day filled with happiness and a year filled with joy.`
    );
} else if (randomnumber === 2) {
    console.log(
        `Dear ${name}, sending you smiles for every moment of your special day.`
    );
} else if (randomnumber === 3) {
    console.log(`Dear ${name}, have a wonderful time and a very happy day!`);
} else {
    console.log(
        `Dear ${name}, hope your special day brings you all that your heart desires!`
    );
}
