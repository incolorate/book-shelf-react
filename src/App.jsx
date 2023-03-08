import { useState, useEffect } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import axios from "axios";

function App() {
  const [books, setBooks] = useState([]);

  // Load books from DB;
  useEffect(() => {
    const getBooks = async () => {
      const response = await axios.get(`http://localhost:3000/books`);
      setBooks(response.data);
      console.log(response.data);
    };
    getBooks();
  }, []);

  // create a new book object
  const createBook = async (title) => {
    const response = await axios.post(`http://localhost:3000/books`, {
      title,
    });
    setBooks((prevBooks) => [...prevBooks, response.data]);
  };

  // delete a book
  const deleteBook = async (id) => {
    const response = await axios.delete(`http://localhost:3000/books/${id}`);

    setBooks((prevBooks) => {
      return prevBooks.filter((book) => {
        return book.id !== id;
      });
    });
  };

  // New title
  const editBook = async (id, newTitle) => {
    const response = await axios.put(`http://localhost:3000/books/${id}`, {
      title: newTitle,
    });
    // Update the book list
    setBooks((prevBooks) =>
      prevBooks.map((book) => {
        return book.id === id ? response.data : book;
      })
    );
  };

  return (
    <div>
      <BookCreate createBook={createBook} />
      <BookList deleteBook={deleteBook} books={books} editBook={editBook} />
    </div>
  );
}

export default App;
