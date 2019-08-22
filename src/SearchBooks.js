import React, {useState, useEffect} from 'react';
import * as BooksAPI from './BooksAPI';
import RemoteLibrary from './RemoteLibrary';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

const SearchBooks = (props) => {
  const {onUpdateShelf, onGetBookShelf} = props;
  const [query, updateQuery] = useState('');
  const [foundBooks, updateFound] = useState([]);

  useEffect(() => {
    if (query && foundBooks.length === 0) {
      BooksAPI.search(query).then((books) => {
        if (books.error) {
          console.log('Search error: ' + books.error);
        } else {
          updateFound(books);
        }
      });
    }
  });

  const handleUserQuery = (query) => {
    // console.log("Query: " + query)
    updateQuery(query);
    updateFound([]);
  };

  return (
    <div className='search-books'>
      <div className='search-books-bar'>
        <Link to='/' className='close-search'>
          Close
        </Link>
        <div className='search-books-input-wrapper'>
          <input
            type='text'
            placeholder='Search by title or author'
            value={query}
            onChange={(event) => handleUserQuery(event.target.value)}
          />
        </div>
      </div>
      <div className='search-books-results'>
        {query && `Found ${foundBooks.length} books for ${query}`}
        <RemoteLibrary
          books={foundBooks}
          onUpdateShelf={onUpdateShelf}
          onGetBookShelf={onGetBookShelf}
        />
      </div>
    </div>
  );
};

SearchBooks.propTypes = {
  onUpdateShelf: PropTypes.func.isRequired,
  onGetBookShelf: PropTypes.func.isRequired,
};

export default SearchBooks;
