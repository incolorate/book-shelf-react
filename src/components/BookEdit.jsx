import { useState } from "react";

function BookEdit({ book, editBook, handleSave }) {
  let [title, setTitle] = useState(book.title);

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editBook(book.id, title);
    handleSave();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={handleChange}
          className="text-xl text-red-900 mt-2 font-bold border-2 border-indigo-500/100"
        />
        <button className="text-xl text-red-900 mt-2 font-bold">Save</button>
      </form>
    </div>
  );
}

export default BookEdit;
