import React, { Component } from 'react'
import PropTypes from 'prop-types'
import sortBy from 'sort-by'

class BookShelf extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired,
    onUpdateShelf: PropTypes.func.isRequired
  }

  render() {
    const { title, books, onUpdateShelf } = this.props

    let filter
    switch (title) {
      case "Currently Reading":
        filter = "currentlyReading"
        break;
      case "Want to Read":
        filter = "wantToRead"
        break;
      case "Read":
        filter = "read"
        break;
      default:
        filter = "none"
        break;
    }

    let showingBooks = books
    showingBooks.sort(sortBy('title'))

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {showingBooks.map((book) => (
              <li key={book.id}>
                <div className="book">
                  <div className="book-top">
                    <div className="book-cover"
                      style={{
                        width: 128,
                        height: 193,
                        backgroundImage:
                          `url(${book.imageLinks.smallThumbnail})` }}>
                    </div>
                    <div className="book-shelf-changer">
                      <select
                        defaultValue={filter}
                        onChange={(event) => {
                          onUpdateShelf(book, event.target.value)
                        }}>
                        <option value="move" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none" disabled>None</option>
                      </select>
                    </div>
                  </div>
                  <div className="book-title">{book.title}</div>
                  <div className="book-authors">{book.authors[0]}</div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default BookShelf;
