import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import { Link } from 'react-router-dom'
import escapeRegExp from 'escape-string-regexp'
import PropTypes from 'prop-types'

class SearchBooks extends Component {
  static propTypes = {
    onUpdateShelf: PropTypes.func.isRequired
  }

  state = {
    query: '',
    showingBooks: []
  }

  componentDidUpdate () {
    if (this.state.query && this.state.showingBooks.length == 0) {
      console.log("Searching: " + this.state.query)
      BooksAPI.search(this.state.query)
      .then((books) => {
        if(books.error) {
          console.log("Search error: " + books.error)
        }
        else {
          console.log("found: ")
          console.log(books)
          this.setState({showingBooks: books})
        }
      })
    }
  }

  updateQuery = (query) => {
    console.log("Query: " + query)
    this.setState({query: query})
    this.setState({showingBooks: []})
  }

  render() {
    const onUpdateShelf = this.props

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link
            to="/"
            className="close-search">Close</Link>
          {/*<a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a> */}
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={(event) => this.updateQuery(event.target.value)}/>
          </div>
        </div>
        <div className="search-books-results">
          show found books for {this.state.query}
        </div>
      </div>
    )
  }
}

export default SearchBooks;
