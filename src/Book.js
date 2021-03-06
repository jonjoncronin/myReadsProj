import React from 'react'
import './App.css'
import PropTypes from 'prop-types'

class Book extends React.Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    onUpdateShelf: PropTypes.func.isRequired,
    onGetBookShelf: PropTypes.func.isRequired
  }
  render() {
    const { book, onUpdateShelf, onGetBookShelf } = this.props

    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover"
              style={{
                width: 128,
                height: 193,
                backgroundImage:book.imageLinks ? `url(${book.imageLinks.smallThumbnail})`: ``
                }}>
            </div>
            <div className="book-shelf-changer">
              <select
                defaultValue={onGetBookShelf(book.id)}
                onChange={(event) => {
                  onUpdateShelf(book, event.target.value)
                }}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">{book.authors ? book.authors[0]:`no author`}</div>
        </div>
      </li>
    )
  }
}

export default Book
