import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ListBooks extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired
  }

  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>Jon&#39;s Reads</h1>
        </div>
        <div className="list-books-content">
          <ul>
            <li>Bookshelf 1</li>
            <li>Bookshelf 2</li>
            <li>Bookshelf 3</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default ListBooks;
