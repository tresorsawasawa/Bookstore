import React from 'react';
import { useSelector } from 'react-redux';
// import booksList from '../data/data';
import Book from './Book';

const Books = () => {
  const books = useSelector((state) => state.booksReducer);
  return (
    <section>
      {books.map((book) => (
        <Book key={book.id} book={book} />
      ))}
    </section>
  );
};

export default Books;
