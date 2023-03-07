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
      <form onSubmit={handleSubmit} className="mt-5">
        <label
          htmlFor="title"
          className=" p-4
        "
        >
          Title:
        </label>
        <input
          id="title"
          className=" bg-slate-400"
          type="text"
          alt="Book title"
          value={bookTitle}
          onChange={handleChange}
        ></input>
        <button
          className=" w-1/4 font-mono radius-xl  mx-5 bg-slate-200"
          type="submit"
        >
          Submit new book
        </button>
      </form>
    </div>
  );
}

export default BookCreate;
