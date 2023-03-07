import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import { nanoid } from "nanoid";

function App() {
  const [books, setBooks] = useState([]);

  // create a new book object
  const createBook = (title) => {
    setBooks((prevBooks) => [
      ...prevBooks,
      {
        id: nanoid(),
        title: title,
      },
    ]);
  };

  // delete a book

  const deleteBook = (id) => {
    setBooks((prevBooks) => {
      return prevBooks.filter((book) => {
        return book.id !== id;
      });
    });
  };

  return (
    <div>
      <BookCreate createBook={createBook} />
      <BookList deleteBook={deleteBook} books={books} />
    </div>
  );
}

export default App;
