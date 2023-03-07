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

  return (
    <div className="p-4 flex flex-wrap gap-6 justify-center  md:justify-start">
      {renderBooks}
    </div>
  );
}

export default BookList;
