import React, { Component } from 'react'
import BookShelf from './BookShelf'
import PropTypes from 'prop-types'

class ListBooks extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    onUpdateShelf: PropTypes.func.isRequired
  }

  render() {
    const { books, onUpdateShelf } = this.props
    let showingBooks = books

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>Jon&#39;s Reads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelf
              title="Currently Reading"
              onUpdateShelf={onUpdateShelf}
              books={showingBooks.filter((book) => {
                return book.shelf === "currentlyReading"
              })} />
            <BookShelf
              title="Want to Read"
              onUpdateShelf={onUpdateShelf}
              books={showingBooks.filter((book) => {
                return book.shelf === "wantToRead"
              })} />
            <BookShelf
              title="Read"
              onUpdateShelf={onUpdateShelf}
              books={showingBooks.filter((book) => {
                return book.shelf === "read"
              })} />
          </div>
        </div>
      </div>
    )
  }
}

export default ListBooks;
