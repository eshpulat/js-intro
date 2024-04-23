// Generate a Random User Name

var randomNumber1 = Math.floor(Math.random() * 10) + 1;

if (randomNumber1 >= 1 && randomNumber1 <= 3) {
    console.log("Bob");
} else if (randomNumber1 >= 4 && randomNumber1 <= 7) {
    console.log("Martin");
} else {
    console.log("Jennifer");
}

// Select a Greeting Message Template

var randomNumber2 = Math.ceil(Math.random() * 4);
var name = "Muhammad";

if (randomNumber2 === 1) {
    console.log(
        `Dear ${name}, wishing you a day filled with happiness and a year filled with joy.`
    );
} else if (randomNumber2 === 2) {
    console.log(
        `Dear ${name}, sending you smiles for every moment of your special day.`
    );
} else if (randomNumber2 === 3) {
    console.log(`Dear ${name}, have a wonderful time and a very happy day!`);
} else {
    console.log(
        `Dear ${name}, hope your special day brings you all that your heart desires!`
    );
}
