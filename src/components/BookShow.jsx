function BookShow({ book, deleteBook }) {
  return (
    <div className=" p-5">
      <p className=" text-red-900" onClick={() => deleteBook(book.id)}>
        X
      </p>
      {book.title}
    </div>
  );
}

export default BookShow;
