<!-- TOC depthFrom:1 depthTo:6 withLinks:1 updateOnSave:1 orderedList:0 -->

- [Summary](#summary)
- [Requirements](#requirements)
	- [Application Setup](#application-setup)
	- [Main page](#main-page)
	- [Search page](#search-page)
	- [Routing](#routing)
	- [Code Functionality](#code-functionality)
	- [Documentation](#documentation)
- [High Level Design](#high-level-design)
- [Components](#components)
	- [BooksApp](#booksapp)
	- [ListBooks](#listbooks)
	- [SearchBooks](#searchbooks)
	- [BookShelf](#bookshelf)
	- [RemoteLibrary](#remotelibrary)
	- [Book](#book)
- [Resources](#resources)
	- [/public/index.html](#publicindexhtml)
	- [/src/index.js](#srcindexjs)
	- [/src/App.js](#srcappjs)
	- [/src/ListBooks.js](#srclistbooksjs)
	- [/src/BookShelf.js](#srcbookshelfjs)
	- [/src/SearchBooks.js](#srcsearchbooksjs)
	- [/src/RemoteLibrary.js](#srcremotelibraryjs)
	- [/src/Book.js](#srcbookjs)
	- [/src/BooksAPI.js](#srcbooksapijs)
- [Usage](#usage)

<!-- /TOC -->

# Summary
The MyReads project is a bookshelf app that allows you to select and categorize
books you have read, are currently reading, or want to read. The project
emphasizes using React to build the application and provides an API server and
client library that you will use to persist information as you interact with the
application.

The MyReads project is the 1st project laid out in the curriculum for the
Udacity React Nanodegree.

# Requirements
## Application Setup
* Installation and Setup
  - The application was created with create-react-app and requires only npm
    install and npm start to get it installed and launched.
* Documentation
  - An updated README that describes the project and has instructions for
    installing and launching the project is included.

## Main page
* 3 Categories/Bookshelves
  - The main page shows 3 shelves for books, and each book is shown on the
    correct shelf.
* Ability to move books between Bookshelves
  - The main page shows a control that allows users to move books between
    shelves. The control should be tied to each book instance. The functionality
    of moving a book to a different shelf works correctly.
* Persistent Data
  - When the browser is refreshed, the same information is displayed on the
    page.

## Search page
* Search Input Field
  - The search page has a search input field.
  - The search page behaves correctly:
    - As the user types into the search field, books that match the query are
      displayed on the page.
    - Search results are not shown when all of the text is deleted out of the
      search input box.
    - Invalid queries are handled and prior search results are not shown.
    - The search works correctly when a book does not have a thumbnail or an
      author. (To test this, try searching for "poetry" and "biography").
    - The user is able to search for multiple words, such as “artificial
      intelligence.”
* Ability to move books to a bookshelf
  - Search results on the search page allow the user to select “currently
    reading”, “want to read”, or “read” to place the book in a certain shelf.
    Books that have not been assigned a shelf should have a checkmark next to
    "None."
* Bookselves on main page reflect selections made on search page
 - When an item is categorized on the search page and the user navigates to the
   main page, it appears on that shelf in the main page.

## Routing
* Main page links to search page
  - The main page contains a link to the search page. When the link is clicked,
    the search page is displayed and the URL in the browser’s address bar is
    /search.
* Search page links back to main page
  - The search page contains a link to the main page. When the link is clicked,
    the main page is displayed and the URL in the browser’s address bar is /.

## Code Functionality
* State Management
  - Component state is passed down from parent components to child components.
    The state variable is not modified directly - setState() function is used
    correctly.
  - Books have the same state on both the search page and the main application
    page: If a book is on a bookshelf, that is reflected in both locations.
* JSX Formatting
  - All JSX code is formatted properly and functional.

## Documentation   
# High Level Design
The MyReads application is a Single Page Application that allows a user to
select and categorize books they have read, are currently reading, or want to
read. It additionally allows the user to "search" a remote repository of books
so that they can be added into the users personal "library" of bookshelves.

The backend foundations to store and maintain a users personal library as well
as to supply a remote repository of books was actually supplied as part of the
project definition and is outside the scope of this project. The intent of this
project was to exercise and demonstrate how the React JS framework can be used
to implement the front end of this SPA.

The front end of this project is made up of 6 different React components that
when pulled all together allow the user to see books in their personal library
categorized by bookshelf, move specific books from one bookshelf to another or
remove them from the library, search a remote repository of books via a keyword
search, move books from the search results into bookshelves in the personal
library.

# Components
Each of the following components are organized and defined with the intent that
they only deal with the rendering of and maintenance of state for information
that make sense specifically for them. There is an inherent Parent-Child
relationship to some of these components.

## BooksApp
The BooksApp is the top level component really representing the MyReads
application. It is here that the definition for the books array that represents
all the books in the users current set of bookshelves is made as well as the
onUpdateShelf functionality that is used to move books from one shelf to
another. Further this component also contains the Routing for application
between the main page and search page.

In the main page instance this component will encapsulate calls to the ListBooks
component that will show the users bookshelves as well as to the SearchBooks
component that will allow the user to search a remote library for books that
match inputted search values.

## ListBooks
The ListBooks component is a component that renders all the books in the
various bookshelves that make up a users personal library. The ListBooks
component has no state but does require that it be invoked with a list of books
and a function to update the shelf a book may be placed in.

The ListBook component does some rendering but will encapsulate multiple
instances of the BookShelf components representing the categories books can be
in.

## SearchBooks
The SearchBooks component is a component that renders and maintains state for
the search query as well as the list of books returned from that search lookup
made to the remote repository of books.

The SearchBooks component does contain a query state variable as well as a
foundBooks state variable. This allows the component to maintain the current and
potentially changing search query the user may be supplying as well as the
list of books that a search will return from a remote library.

The SearchBooks component requires that it be invoked with a function to update
the shelf a book may be placed in.

The component does some rendering but also encapsulates an instance of a
RemoteLibrary which represents the list of books that a search returns.

## BookShelf
The BookSelf component is a component that renders all the books in a specific
list of books. The BookShelf component has no state but does require that it be
invoked with a title, a list of books, and a function to update the shelf a book
may be placed in. The intent is that the parent component knows what title,
set of books and update function should be used when invoked.

The BookShelf component does rendering for the bookshelf by looping over the
list of books and encapsulating multiple instances of the Book components
representing the books in that specific bookshelf.

## RemoteLibrary
The RemoteLibrary component is a component similar to the BookShelf component
that renders all the books in a specific list of books. The RemoteLibrary
component has no state but does require that it be invoked with a list of books
and a function to update the shelf a book may be placed in. The intent is that
the parent component knows what the set of books and update function should be
used when invoked.

The RemoteLibrary renders the books by looping over the list and encapsulating
multiple instances of the Book component.

## Book
The Book component is a component that renders a specific book and the input
controls to dictate which self a book should be placed. This component
contains no state but does require that it be invoked with a book object and a
function to update the shelf a book may be placed in.

The Book component renders the book using the fields of the book and
additionally provides an input for the user to select which bookshelf they want
a book to be classified under. This user input will execute the passed in
function to update the shelf a book is in. This update will travel up through
the layers of invocation and update the main state variables being maintained by
the BooksApp component.

This Book component is utilized in both the RemoteLibrary component as well
as the BookShelf component.

# Resources
## /public/index.html
index.html is the initial page that is served up to a user browsing to the site.
This page is extremely simplistic but contains an element that is very
important. The "root" div is the div where the application will populate all
rendered content. Without this "root" div nothing in the rest of the Single Page
Application would be visible to the user.

## /src/index.js
index.js, similar to index.html, is a simplistic JavaScript file but contains
a call to the ReactDOM library which will render all the components listed out
and described below.
There is an important addition made to the index.js file to support Routing.
The BrowserRouter package allows routing support and is described in the
Usage section below.

## /src/App.js
App.js defines a BooksApp class that begins to define the foundations of the
MyReads application. This file contains definition for the App component that
contains the state model for the entire application.

## /src/ListBooks.js
ListBooks.js defines a ListBooks class that will render the 3 categories of
bookshelves - Want to Read, Currently Reading, Read - that the user can have
books currently classified under.

## /src/BookShelf.js
BookShelf.js defines a BookShelf class that will render the books in a specific
bookshelf.

## /src/SearchBooks.js
SearchBooks.js defines a SearchBooks class that will render the input text field
the user will put their search query in as well as encapsulate an instance of
a RemoteLibrary component that represents the set of books that match the search
query supplied by the user.

## /src/RemoteLibrary.js
RemoteLibrary.js defines a RemoteLibrary class that will render the books in
a list that is returned for a specific search query.

## /src/Book.js
Book.js defines a Book class that will render a specific book.

## /src/BooksAPI.js
BooksAPI.js was supplied by the instructors as part of the rubric. This
JavaScript file defines a set of functions that can be used to retrieve a
users library of books, retrieve a single book in a users library, update the
shelf for a specific book and search a remote repository of books. This API
allows the student working on this project to not have to worry about the
backend implementation of the application. This API is necessary to support
multiple users of the application and is used by the BooksApp component to
initially load the set of books in a users personal library. It is also used
by the SearchBooks component after a user has specified a search query to
retrieve the set of books from the remote repository. Finally it is also used
again by the BooksApp component when the shelf of a book needs to be updated.
The shelf update travels up from the Book component either via the RemoteLibrary
component or via the BookShelf component.

# Usage
This project assumes that you've got NPM installed. As the JavaScript to
handle dynamic rendering of content and responding to user input is all included
in the folders of the repo, a user additionally needs to be using a web browser
that supports JavaScript.

1. Pull the entirety of the repo and the directory structure to your local machine.
2. Navigate to that directory via terminal or the command line.
3. Execute npm install
4. Execute npm start

The application should automatically open a web browser and navigate to
http://localhost:3000
