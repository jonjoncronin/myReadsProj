import React from 'react';
import PropTypes from 'prop-types';
import sortBy from 'sort-by';
import Book from './Book';

const BookShelf = (props) => {
  const {title, books, onUpdateShelf, onGetBookShelf} = props;

  let showingBooks = books;

  if (showingBooks) {
    showingBooks.sort(sortBy('title'));
  } else {
    console.log('No books to show');
  }

  return (
    <div className='bookshelf'>
      <h2 className='bookshelf-title'>{title}</h2>
      <div className='bookshelf-books'>
        <ol className='books-grid'>
          {showingBooks &&
            showingBooks.map((book) => (
              <Book
                key={book.id}
                book={book}
                onUpdateShelf={onUpdateShelf}
                onGetBookShelf={onGetBookShelf}
              />
            ))}
        </ol>
      </div>
    </div>
  );
};

BookShelf.propTypes = {
  title: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired,
  onUpdateShelf: PropTypes.func.isRequired,
  onGetBookShelf: PropTypes.func.isRequired,
};

export default BookShelf;
