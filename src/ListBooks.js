import React, { Component } from 'react'
import BookShelf from './BookShelf'
import PropTypes from 'prop-types'

class ListBooks extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    onUpdateShelf: PropTypes.func.isRequired,
    onGetBookShelf: PropTypes.func.isRequired
  }

  render() {
    const { books, onUpdateShelf, onGetBookShelf } = this.props
    const shelves = [
      {
        id: "currentlyReading",
        title: "Currently Reading",
        books: books.filter(book => book.shelf === "currentlyReading")
      },
      {
        id: "wantToRead",
        title: "Want to Read",
        books: books.filter(book => book.shelf === "wantToRead")
      },
      {
        id: "read",
        title: "Read",
        books: books.filter(book => book.shelf === "read")
      }
    ]

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>Jon&#39;s Reads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {
              shelves.map(shelf => (
                <BookShelf
                  key={shelf.id}
                  title={shelf.title}
                  onUpdateShelf={onUpdateShelf}
                  books={shelf.books}
                  onGetBookShelf={onGetBookShelf} />
              ))
            }
          </div>
        </div>
      </div>
    )
  }
}

export default ListBooks;
