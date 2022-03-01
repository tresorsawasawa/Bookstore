import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

const Form = () => {
  const [bookTitle, setBookTitle] = useState('');
  const [bookCategory, setBookCategory] = useState('');
  const dispatch = useDispatch();

  const submitBookToStore = (e) => {
    e.preventDefault();

    if (bookTitle && bookCategory) {
      const newBook = {
        id: new Date().getTime().toString(),
        title: bookTitle,
        category: bookCategory,
        author: 'Suzanne Collins',
        completed: 64,
        currentChapter: 17,
        currentChapterTitle: '',
      };
      dispatch(addBook(newBook));
      setBookTitle('');
      setBookCategory('');
    }
  };

  const handleBookTitle = (e) => setBookTitle(e.target.value);

  const handleBookCategory = (e) => setBookCategory(e.target.value);

  return (
    <section className="form-container">
      <h2>Add New Book</h2>
      <form className="form">
        <input
          type="text"
          placeholder="Book Title"
          value={bookTitle}
          onChange={handleBookTitle}
          required
        />
        <select
          name="category"
          className="form-control"
          value={bookCategory}
          onChange={handleBookCategory}
          required
        >
          <option className="gray-color" disabled value="">
            Category
          </option>
          <option value="Action">Action</option>
          <option value="Science">Science Fiction</option>
          <option value="Economy">Economy</option>
        </select>
        <button type="submit" onClick={submitBookToStore}>
          {' '}
          Add Book
        </button>
      </form>
    </section>
  );
};

export default Form;
