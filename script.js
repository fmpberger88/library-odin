const library = [];

function Book(title, author, publisher, releaseYear, language, pages, read = false) {
  this.title = title;
  this.author = author;
  this.publisher = publisher;
  this.releaseYear = releaseYear;
  this.language = language;
  this.pages = pages;
  this.read = read;
}

// Add a book to library
const addBookToLibrary = (title, author, publisher, releaseYear, language, pages, read = false) => {
  const book = new Book(title, author, publisher, releaseYear, language, pages, read);
  library.push(book);
};

// Remove a book from the library
const removeBookFromLibrary = (title) => {
  const index = library.findIndex((book) => book.title === title);
  if (index !== -1) {
    library.splice(index, 1);
  }
};

// Example data
addBookToLibrary('The Hobbit', 'J. R. R. Tolkien', 'George Allen & Unwin (UK)', 1937, 'EN', 310);
addBookToLibrary('Lord Of The Rings', 'J. R. R. Tolkien', 'George Allen & Unwin (UK)', 1954, 'EN', 1216, true);
addBookToLibrary('Lord Of The Rings', 'J. R. R. Tolkien', 'George Allen & Unwin (UK)', 1962, 'EN', 304);

// Show book list
const displayBooks = () => {
  const booklist = document.querySelector('#booklist');
  booklist.textContent = ''; // Clear existing content

  library.forEach((book) => {
    // Card Element
    const card = document.createElement('div');
    card.setAttribute('class', 'card');

    // Book Elements
    const titleElement = document.createElement('h2');
    titleElement.textContent = book.title;
    titleElement.setAttribute('class', 'title');

    const authorElement = document.createElement('strong');
    authorElement.textContent = book.author;
    authorElement.setAttribute('class', 'author');

    const publisherElement = document.createElement('p');
    publisherElement.textContent = book.publisher;
    publisherElement.setAttribute('class', 'publisher');

    const releaseYearElement = document.createElement('p');
    releaseYearElement.textContent = `Publication date: ${book.releaseYear}`;
    releaseYearElement.setAttribute('class', 'releaseYear');

    const languageElement = document.createElement('p');
    languageElement.textContent = `Language: ${book.language}`;
    languageElement.setAttribute('class', 'language');

    const pagesElement = document.createElement('p');
    pagesElement.textContent = `Pages: ${book.pages}`;
    pagesElement.setAttribute('class', 'pages');

    const readElement = document.createElement('p');
    readElement.textContent = book.read ? 'Already read' : 'Not read yet';
    readElement.setAttribute('class', 'read');

    // Delete Button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'X';
    deleteButton.setAttribute('class', 'deleteButton');
    deleteButton.addEventListener('click', () => {
      removeBookFromLibrary(book.title);
      displayBooks(); // Refresh the list
    });

    // Append to card
    card.appendChild(deleteButton);
    card.appendChild(titleElement);
    card.appendChild(authorElement);
    card.appendChild(releaseYearElement);
    card.appendChild(languageElement);
    card.appendChild(pagesElement);
    card.appendChild(readElement);
    card.appendChild(publisherElement);

    // Append card to booklist
    booklist.appendChild(card);
  });
};

// Get modal element
const modal = document.querySelector('#addBookModal');
// Get open modal button
const addButton = document.querySelector('#addBook');
// Get closeModalButton
const closeModalButton = document.querySelector('.close');
// Get saveBookButton
const saveBookButton = document.querySelector('#saveBook');

// Open Modal when add bookButton is clicked
addButton.addEventListener('click', () => {
  modal.style.display = 'block';
});
// Clode modal when closeModalButton is clicked
closeModalButton.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Add book when save button is clicked
saveBookButton.addEventListener('click', () => {
  const title = document.querySelector('#bookTitle').value;
  const author = document.querySelector('#bookAuthor').value;
  const publisher = document.querySelector('#bookPublisher').value;
  const releaseYear = document.querySelector('#bookReleaseYear').value;
  const language = document.querySelector('#bookLanguage').value;
  const pages = document.querySelector('#bookPages').value;
  const read = document.querySelector('#bookRead').value;

  addBookToLibrary(title, author, publisher, releaseYear, language, pages, read);
  displayBooks();
});

displayBooks();
