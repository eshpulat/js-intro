let book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    pages: 180,
    publisher: "Charles Scribner's Sons",
    year: 1925,
    keywords: ["classic", "American", "novel"],

    // Method to get a summary of the book
    getSummary: function () {
        return `${this.title} is a ${this.pages}-page book written by ${this.author}.`;
    },

    // Method to add a keyword to the book
    addKeyword: function (keyword) {
        this.keywords.push(keyword);
    }
};
console.log(book.getSummary());

// getSummary: This method constructs and returns a concise summary of the book using its properties (this.title, this.pages, and this.author). For instance, invoking book.getSummary() yields "The Great Gatsby is a 180-page book written by F. Scott Fitzgerald.". Here, this refers to the current object (book), enabling access to its attributes within the method.//

//addKeyword: This method facilitates the addition of a new keyword to the keywords array property of the book object. By utilizing this.keywords.push(keyword), it appends the supplied keyword to the existing array. For example, calling book.addKeyword('fiction') modifies book.keywords to ['classic', 'American', 'novel', 'fiction'].//
