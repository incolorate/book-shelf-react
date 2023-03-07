import { useState } from "react";
import BookEdit from "./BookEdit";
function BookShow({ book, deleteBook, editBook }) {
  const [showEdit, setShowEdit] = useState(true);

  const handleEdit = () => {
    setShowEdit((prev) => !prev);
  };
  return (
    <div className=" p-5">
      <p className=" text-red-900" onClick={() => deleteBook(book.id)}>
        X
      </p>
      <p onClick={handleEdit}>Edit</p>

      {showEdit ? (
        <p>{book.title}</p>
      ) : (
        <BookEdit book={book} editBook={editBook} handleSave={handleEdit} />
      )}
    </div>
  );
}

export default BookShow;
