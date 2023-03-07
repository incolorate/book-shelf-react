import { useState } from "react";

function BookCreate({ createBook }) {
  const [bookTitle, setBookTitle] = useState("");

  const handleChange = (e) => {
    setBookTitle(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    createBook(bookTitle);
    setBookTitle("");
  };

  return (
    <div className="bg-sky-700 m-0 p-5">
      <form onSubmit={handleSubmit} className="mt-5 flex flex-col gap-3">
        <label htmlFor="title" className="font-mono text-4xl">
          Title:
        </label>
        <input
          id="title"
          className="bg-sky-200 rounded-xl h-8 max-w-lg"
          type="text"
          alt="Book title"
          value={bookTitle}
          onChange={handleChange}
        ></input>
        <button
          className="max-w-sm h-8 font-mono text-l rounded-xl bg-sky-200 text-sky-900 md:text-3xl"
          type="submit"
        >
          New book
        </button>
      </form>
    </div>
  );
}

export default BookCreate;
