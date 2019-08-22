import React, {useState, useEffect} from 'react';
import './App.css';
import * as BooksAPI from './BooksAPI';
import ListBooks from './ListBooks';
import SearchBooks from './SearchBooks';
import {Route} from 'react-router-dom';
import {Link} from 'react-router-dom';

const BooksApp = () => {
  const [myBooks, updateBooks] = useState([]);
  /**
   * When the BooksApp component mounts we need to call the BooksAPI to get the
   * list of books that needs to be displayed by the App.
   * The useEffect API is called on every update acting as the substitute for the
   * ComponentDidMount and ComponentDidUpdate lifecycle methods. If we want to 
   * perform logic on only the didMount lifecycle we can specify that logic as the
   * first element in the chain of calls useEffect is firing on.
   */
  useEffect(() => {
    BooksAPI.getAll().then((books) => {
      updateBooks(books);
    });
  }, []);

  const updateBookShelf = (book, shelf) => {
    // console.log("updating " + book.title + " to shelf " + shelf)
    let myLib = myBooks.filter((libBook) => libBook.id !== book.id);
    let updatedBook = book;
    updatedBook.shelf = shelf;
    myLib.push(updatedBook);
    updateBooks(myLib);
    BooksAPI.update(book, shelf);
  };

  const getBookShelf = (bookId) => {
    let existingBook = myBooks.find((book) => book.id === bookId);
    if (existingBook) {
      return existingBook.shelf;
    } else {
      return 'none';
    }
  };

  return (
    <div className='app'>
      <Route
        exact
        path='/'
        render={() => (
          <div>
            <ListBooks
              books={myBooks}
              onUpdateShelf={updateBookShelf}
              onGetBookShelf={getBookShelf}
            />
            <div className='open-search'>
              <Link to='/search' className='open-search'>
                Add Book
              </Link>
            </div>
          </div>
        )}
      />
      <Route
        path='/search'
        render={({history}) => (
          <SearchBooks
            onUpdateShelf={updateBookShelf}
            onGetBookShelf={getBookShelf}
          />
        )}
      />
    </div>
  );
};

export default BooksApp;
