/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book }) => (
  <div className="books-container">
    <div>
      <div className="book-category">{book.category}</div>
      <div className="book-title">{book.title}</div>
      <div className="book-author">{book.author}</div>
    </div>

    <div>
      <div className="book-completed-chart" />
      <div className="book-completed">
        {book.completed}
        %
      </div>
      <div className="book-completed-prefix">completed</div>
    </div>

    <div>
      <div className="book-current-chapter">Current Chapter</div>
      <div className="book-current-chapter">
        Chapter
        {book.currentChapter}
        <span className="book-current-chapter-title">
          {book.currentChapterTitle}
        </span>
      </div>
    </div>

    <button type="button"> Remove </button>
  </div>
);

Book.propTypes = {
  book: PropTypes.objectOf(PropTypes.any),
};

Book.defaultProps = {
  book: {},
};

export default Book;
