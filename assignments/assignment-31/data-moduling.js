let book = [
    {
        title: "Atomic habits",
        author: "James Clear",
        yearPublished: 2005,
        genres: ["Fantastic", "Action", "Drama"],
        ratings: [
            { user: "Alica", score: 5 },
            { user: "Bob", score: 5 }
        ]
    },
    {
        title: "1984",
        author: "George Orwel",
        yearPublished: 2000,
        genres: ["Fntastic", "Drama", "Action"],
        ratings: [
            { user: "John", score: 10 },
            { user: "Micheal", score: 9 }
        ]
    }
];

for (let i = 0; i < book.length; i++) {
    console.log(book[i]);
    for (let j = 0; j < book[i].ratings.length; j++) {
        console.log(book[i].ratings[j]);
    }
}
// const ratings = [
//     { id: 1, user: "john", score: 10 },
//     { id: 2, user: "Micheal", score: 9 }
// ];

// let book = {
//     title: "Atomic habits",
//     author: "James Clear",
//     yearPublished: 2005,
//     genres: ["Fantastic", "Action", "Drama"],
//     ratings: [
//         { ratingsId: 1, ticketType: "Regular" },
//         { ratingId: 2, ticketType: "Regular" }
//     ]
// };

// console.log(book);
