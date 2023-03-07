import BookShow from "./BookShow";

function BookList({ books, deleteBook, id }) {
  const renderBooks = books.map((book) => {
    return <BookShow key={book.id} book={book} deleteBook={deleteBook} />;
  });

  return <div>{renderBooks}</div>;
}

export default BookList;
