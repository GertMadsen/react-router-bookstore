import React, { Component } from 'react';
import { Route, Switch, Link } from "react-router-dom";

const Details = ({ match, books }) => {
  var book = books.find(book => book.id === Number(match.params.bookId));
  var bookData;

  if (book)
    bookData = <div>
      <p>Detailed info for <b>{book.title}</b> </p>
      <p>ID: {book.id}</p>
      <p>Info: {book.info}</p>
    </div>
  else
    bookData = <h2> Sorry. No book with that ID exist!</h2>;

  return (
    <div>
      {bookData}
    </div>
  )
}

const DelBook = ({ match, bookStore }) => {
  var id = Number(match.params.bookId);
  var book = bookStore.books.find(book => book.id === id);
  var bookData;

  if (book) {
    bookData = <div>
      <p><b>{book.title}</b> has now been deleted.</p>
    </div>
    bookStore.removeBook(id);
  }
  else { bookData = <h2> Not deleted. No book found with that ID!</h2>; }
  return (
    <div>
      {bookData}
    </div>
  )
}


class Product extends Component {
  render() {
    var books = this.props.bookStore.books;
    var match = this.props.match;
    var bookList = books.map((book) => {
      return (
        <li key={book.id}>
          {book.title} <Link to={`${match.url}/${book.id}`}>details</Link> <Link to={`${match.url}/delete/${book.id}`}>delete</Link>
        </li>
      )
    })

    return (
      <div>
        <h2>Product View</h2>
        <ul>
          {bookList}
        </ul>
        <Switch>
          <Route exact path={`${match.url}/:bookId`}
            render={(props) => <Details books={books} {...props} />} />
          <Route path={`${match.url}/delete/:bookId`}
            render={(props) => <DelBook bookStore={this.props.bookStore} {...props} />} />
          <Route exact path={match.url}
            render={() => <h3>Book details for selected book will go here</h3>}
          />
        </Switch>
      </div>
    )
  }
}


export default Product;

