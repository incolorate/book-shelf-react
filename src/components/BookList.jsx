import BookShow from "./BookShow";

function BookList({ books }) {
  const renderBooks = books.map((book) => {
    return <BookShow key={book.id} title={book.title} />;
  });

  return <div>{renderBooks}</div>;
}

export default BookList;
