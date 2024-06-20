// object

const car = {
    make: "Toyota",
    modelYear: 2022,
    engine_type: "V6",
    _mileage: 50000
};
console.log(car);
const car2 = {
    stOwner: "Alice", // Invalid, starts with a number
    "model-year": 2022, // Must be in quotes because of the hyphen
    "car type": "Sedan" // Must be in quotes because of the space
};

console.log(car2);

const car1 = {
    make: "Toyota",
    model: "Corolla",
    year: 2022,
    color: "red"
};

console.log(car1.make);

console.log(car1["color"]); // Outputs: "red"
let property = "year";
console.log(car1[property]); // Outputs: 2022

const car3 = {
    "first-owner": "Alice",
    make: "Toyota",
    "2022model": "Corolla" // Starting with a number
};

console.log(car["first-owner"]); // Correct
console.log(car["2022model"]); // Correct

car1.color = "blue";
console.log(car1.color);
car1["year"] = 2023;
console.log(car1.year);

car1.owner = "Alice"; // Adds a new property 'owner' with the value "Alice"
car1["registration"] = "XYZ123"; // Adds a new property 'registration'

console.log(car1.registration);
console.log(car1);

delete car1.owner;
console.log(car1);

// ------ assignment-26 ----------- //

const movies = {
    title: "John-Wick",
    director: "Jonatan",
    releaseYear: 2020,
    genre: "Action",
    rating: 4.5
};

console.log(movies);

// --------- task-2 ----------- //
console.log(movies.title);
console.log(movies["title"]);

console.log(movies.director);
console.log(movies["director"]);

console.log(movies.releaseYear);
console.log(movies["releaseYear"]);

// ------------ task-4 ---------- //

movies.rating = 4.8;
console.log(movies);

// ------------ task-5 ---------- //

movies.boxOffice = 12000000;
console.log(movies);

// ------------ task - 6 -------- //

delete movies.boxOffice;
console.log(movies);

// ----------- Extra Challenge --------- //

function movieObject() {
    const movies = {
        title: "John-Wick",
        director: "Jonatan",
        releaseYear: 2020,
        genre: "Action",
        rating: 4.5
    };
    console.log(
        `The movie ${movies.title} was directed by ${movies.director} and was released in ${movies.releaseYear}. It is a ${movies.genre} film with a rating of ${movies.rating}.`
    );
}

movieObject();
