import React from 'react'
import './App.css'
import * as BooksAPI from './BooksAPI'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    myBooks: []
  }

  /**
   * When the BooksApp component mounts we need to call the BooksAPI to get the
   * list of books that needs to be displayed by the App.
   */
  componentDidMount () {
    BooksAPI.getAll()
    .then((books) => {
      this.setState({myBooks: books})
    })
  }

  updateBookShelf = (book, shelf) => {
    // console.log("updating " + book.title + " to shelf " + shelf)
    let myLib = this.state.myBooks.filter(libBook => (libBook.id !== book.id))
    let updatedBook = book
    updatedBook.shelf = shelf
    myLib.push(updatedBook)
    this.setState({myBooks: myLib})
    BooksAPI.update(book,shelf)
  }

  getBookShelf = (bookId) => {
    let existingBook = this.state.myBooks.find(book => book.id === bookId)
    if(existingBook) {
      return existingBook.shelf
    }
    else {
      return "none"
    }
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <div>
            <ListBooks
              books={this.state.myBooks}
              onUpdateShelf={this.updateBookShelf}
              onGetBookShelf={this.getBookShelf} />
            <div className="open-search">
              <Link to="/search" className="open-search">Add Book</Link>
            </div>
          </div>
        )}/>
        <Route path="/search" render={({ history }) => (
          <SearchBooks
            onUpdateShelf={this.updateBookShelf}
            onGetBookShelf={this.getBookShelf} />
        )}/>
      </div>
    )
  }
}

export default BooksApp
