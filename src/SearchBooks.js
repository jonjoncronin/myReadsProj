import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import RemoteLibrary from './RemoteLibrary'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

class SearchBooks extends Component {
  static propTypes = {
    onUpdateShelf: PropTypes.func.isRequired
  }

  state = {
    query: '',
    foundBooks: []
  }

  componentDidUpdate () {
    if (this.state.query && this.state.foundBooks.length === 0) {
      console.log("Searching: " + this.state.query)
      BooksAPI.search(this.state.query)
      .then((books) => {
        if(books.error) {
          console.log("Search error: " + books.error)
        }
        else {
          console.log("found: ")
          console.log(books)
          this.setState({foundBooks: books})
        }
      })
    }
  }

  updateQuery = (query) => {
    console.log("Query: " + query)
    this.setState({query: query})
    this.setState({foundBooks: []})
  }

  render() {
    const onUpdateShelf = this.props.onUpdateShelf;
    let count = this.state.foundBooks.length;

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link
            to="/"
            className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={(event) => this.updateQuery(event.target.value)}/>
          </div>
        </div>
        <div className="search-books-results">
          {this.state.query && `Found ${count} books for ${this.state.query}`}
          <RemoteLibrary books={this.state.foundBooks} onUpdateShelf={onUpdateShelf} />
        </div>
      </div>
    )
  }
}

export default SearchBooks;
