import BookShow from "./BookShow";

function BookList({ books, deleteBook, editBook }) {
  const renderBooks = books.map((book) => {
    return (
      <BookShow
        key={book.id}
        book={book}
        deleteBook={deleteBook}
        editBook={editBook}
      />
    );
  });

  return <div>{renderBooks}</div>;
}

export default BookList;
