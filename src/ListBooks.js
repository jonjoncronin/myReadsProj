import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BookShelf from './BookShelf'

class ListBooks extends Component {
  // static propTypes = {
  //   books: PropTypes.array.isRequired
  // }

  render() {
    const { books } = this.props

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>Jon&#39;s Reads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelf title="Currently Reading" books={books} />
            <BookShelf title="Want to Read" books={books} />
            <BookShelf title="Read" books={books} />
            <BookShelf title="To Be Classified" books={books} />
          </div>
        </div>
      </div>
    )
  }
}

export default ListBooks;
