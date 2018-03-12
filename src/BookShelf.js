import React, { Component } from 'react'
import PropTypes from 'prop-types'

class BookShelf extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    // books: PropTypes.array.isRequired
  }

  handleChange = (filter, book) => {
    alert("For book " + book.title + " you chose " + filter)
  }

  render() {
    const { title, books } = this.props
    let showingBooks
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

    showingBooks = books.filter((book) => (
      book.shelf === filter
    ))

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
                      <select defaultValue={filter} onChange={(event) => this.handleChange(event.target.value, book)}>
                        <option value="move" disabled>Move to...</option>
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
