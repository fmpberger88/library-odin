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
for (let book in library) {
    console.log(library[book]);
    const booklist = document.querySelector("#booklist");

    // Card Element
    const card = document.createElement("div")
    card.setAttribute("class", "card");

    // Book Elements
    const title = document.createElement("h2");
    title.textContent = library[book].title;
    title.setAttribute("class", "title");

    const author = document.createElement("strong");
    author.textContent = library[book].author;
    author.setAttribute("class", "author");

    const publisher = document.createElement("p");
    publisher.textContent = library[book].publisher;
    publisher.setAttribute("class", "publisher");

    const releaseYear = document.createElement("p");
    releaseYear.textContent = library[book].releaseYear;
    releaseYear.setAttribute("class", "releaseYear");

    const language = document.createElement("p");
    language.textContent = library[book].language;
    language.setAttribute("class", "language");

    const pages = document.createElement("p");
    pages.textContent = library[book].pages;
    pages.setAttribute("class", "pages");

    const read = document.createElement("p");
    read.textContent = library[book].read ? "Yes" : "Not read yet";
    read.setAttribute("class", "read");

    // Append to card
    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(publisher);
    card.appendChild(releaseYear);
    card.appendChild(language);
    card.appendChild(pages);
    card.appendChild(read);

    // append cards to booklist
    booklist.appendChild(card);
}




