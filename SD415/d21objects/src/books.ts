// /node_modules
// /.gitignore

// Define the Book type

type Book = {

  title: string;

  author: string;

  libraryID: number;

};
 
// Array to store the library books

const libraryBooks: Book[] = [];
 
// Function to create a new book and add it to the libraryBooks array

function createBook(title: string, author: string, libraryID: number): Book {

  const newBook: Book = { title, author, libraryID };

  libraryBooks.push(newBook);

  return newBook;

}
 
// Function to find and return all book titles, sorted alphabetically

function findTitles(): string[] {

  return libraryBooks.map((book) => book.title).sort();

}
 
// Function to find and return all authors, sorted alphabetically

function findAuthors(): string[] {

  return libraryBooks.map((book) => book.author).sort();

}
 
// Function to find and return all libraryIDs, sorted alphabetically

function findIDs(): number[] {

  return libraryBooks.map((book) => book.libraryID).sort();

}
 
// Handle button clicks and display the result in the textarea

function handleButtonClick(event: Event): void {

  const button = event.target as HTMLButtonElement;

  const action = button.value;
 
  let result: string[] = [];

  if (action === 'Titles') {

    result = findTitles();

  } else if (action === 'Authors') {

    result = findAuthors();

  } else if (action === 'libraryID') {

    result = findIDs().map((id) => id.toString());

  }
 
  const textarea = document.getElementById('result') as HTMLTextAreaElement;

  textarea.value = result.join('\n');

}
 
// Attach click event handlers to the buttons

document.addEventListener('DOMContentLoaded', () => {

  const buttons = document.querySelectorAll('button');

  buttons.forEach((button) => {

    button.addEventListener('click', handleButtonClick);

  });

});
