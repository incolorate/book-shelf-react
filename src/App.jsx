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

  return (
    <div>
      <BookCreate createBook={createBook} />
      <BookList books={books} />
    </div>
  );
}

export default App;
