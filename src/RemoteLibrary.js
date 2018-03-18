import React, { Component } from 'react'
import PropTypes from 'prop-types'
import sortBy from 'sort-by'
import Book from './Book'

class RemoteLibrary extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    onUpdateShelf: PropTypes.func.isRequired
  }

  render() {
    const { books, onUpdateShelf } = this.props

    let showingBooks = books

    if (showingBooks) {
      console.log("Library Books to show:")
      console.log(showingBooks)
      showingBooks.sort(sortBy('title'))
    }
    else {
      console.log("No books to show")
    }

    return (
      <div className="bookshelf">
        <div className="bookshelf-books">
          <ol className="books-grid">
            {
              showingBooks && showingBooks.map((book) => (
                <Book key={book.id} book={book} onUpdateShelf={onUpdateShelf} />
              ))
            }
          </ol>
        </div>
      </div>
    )
  }
}

export default RemoteLibrary;
