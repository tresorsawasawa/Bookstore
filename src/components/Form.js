import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

const Form = () => {
  const [progress, setProgress] = useState(0);
  const [bookTitle, setBookTitle] = useState('');
  const [bookCategory, setBookCategory] = useState('');
  const dispatch = useDispatch();

  const submitBookToStore = (e) => {
    e.preventDefault();

    if (bookTitle && bookCategory) {
      if (progress > 100) return progress;
      const newBook = {
        item_id: uuidv4(),
        title: bookTitle,
        category: bookCategory,
        author: 'Tresor Sawasawa',
        completed: progress,
        currentChapter: 17,
        currentChapterTitle: '',
      };
      setProgress((progress + Math.floor(Math.random() * 100)));
      dispatch(addBook(newBook));
      setBookTitle('');
      setBookCategory('');
    }
    return progress;
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
          <option className="gray-color" value="action" defaultValue hidden>
            Category
          </option>
          <option value="Action">Action</option>
          <option value="Science Fiction">Science Fiction</option>
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
