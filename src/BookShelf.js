import React, { Component } from 'react'
import PropTypes from 'prop-types'

class BookShelf extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    // books: PropTypes.array.isRequired
  }

  render() {
    const { title, books } = this.props
    let showingBooks

    switch (title) {
      case "Currently Reading":
        showingBooks = books.filter((book) => (
          book.shelf === "currentlyReading"
        ))
        break;
      case "Want to Read":
        showingBooks = books.filter((book) => (
          book.shelf === "wantToRead"
        ))
        break;
      case "Read":
        showingBooks = books.filter((book) => (
          book.shelf === "read"
        ))
        break;
      default:
        showingBooks = books.filter((book) => (
          book.shelf === "none"
        ))
        break;
    }
    console.log(books)
    console.log(showingBooks)

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {showingBooks.map((book) => (
              <li key={book.id}>
                <div className="book">
                  <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
                    <div className="book-shelf-changer">
                      <select>
                        <option value="none" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
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
