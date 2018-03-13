import React, { Component } from 'react'
import BookShelf from './BookShelf'
import * as BooksAPI from './BooksAPI'

class ListBooks extends Component {
  state = {
    books: []
  }

  /**
   * When BooksApp component mounts we need to call the BooksAPI to get the
   * list of books that needs to be displayed by the App.
   */
  componentDidMount () {
    BooksAPI.getAll()
    .then((books) => {
      this.setState({books})
    })
    .then(() => {
      console.log(this.state.books)
    })
  }

  updateBookShelf = (book, shelf) => {
    console.log("updating " + book.title + " to shelf " + shelf)
    BooksAPI.update(book,shelf).then(() => {
      BooksAPI.getAll()
      .then((books) => {
        this.setState({books})
      })
      .then(() => {
        console.log(this.state.books)
      })
    })
  }

  render() {

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>Jon&#39;s Reads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelf
              title="Currently Reading"
              onUpdateShelf={this.updateBookShelf}
              books={this.state.books.filter((book) => {
                return book.shelf === "currentlyReading"
              })} />
            <BookShelf
              title="Want to Read"
              onUpdateShelf={this.updateBookShelf}
              books={this.state.books.filter((book) => {
                return book.shelf === "wantToRead"
              })} />
            <BookShelf
              title="Read"
              onUpdateShelf={this.updateBookShelf}
              books={this.state.books.filter((book) => {
                return book.shelf === "read"
              })} />
          </div>
        </div>
      </div>
    )
  }
}

export default ListBooks;
