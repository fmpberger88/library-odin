const library = [];

function Book (title, author, publisher, releaseYear, language, pages, read = false) {
    this.title = title;
    this.author = author;
    this.publisher = publisher;
    this.releaseYear = releaseYear;
    this.language = language;
    this.pages = pages;
    this.read = read;
}

// add a book to library
const addBookToLibrary = (title, author, publisher, releaseYear, language, pages, read = false) => {
    const book = new Book(title, author, publisher, releaseYear, language, pages, read);
    library.push(book);
}

// example data
book1 = new Book("The Hobbit", "J. J. R. Tokien", "George Allen & Unwin (UK)", 1937, "EN", 310);
book2 = new Book("Lord Of The Rings", "J. J. R. Tolkien", "George Allen & Unwin (UK)", 1954, "EN", 1216, true);
book3 = new Book("Lord Of The Rings", "J. J. R. Tolkien", "George Allen & Unwin (UK)", 1962, "EN", 304);

library.push(book1);
library.push(book2);
library.push(book3);

// show booklist
for (book in library) {
    console.log(library[book]);
    document.querySelector("#booklist");

    // Card Element
    card = document.createElement("div")

    // Book Elements
    title = document.createElement("h2");
    title.textContent = book.title;

    author = document.createElement("strong");
    author.textContent = book.author;

    publisher = document.createElement("em");
    publisher.textContent = book.publisher;

    releaseYear = document.createElement("p");
    releaseYear.textContent = book.releaseYear;

    language = document.createElement("p");
    language.textContent = book.language;

    pages = document.createElement("p");
    pages.textContent = book.pages;

    read = document.createElement("p");
    read.textContent = book.read ? "No" : "Yes";
}




