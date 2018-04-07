import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";

const Details = ({match,books}) => {
    var book = books.find(book => book.id === Number(match.params.bookId));
    var bookData;
  
    if(book)
    bookData = <div>
        <p>Detailed info for <b>{book.title}</b> </p>
        <p>ID: {book.id}</p>
        <p>Info: {book.info}</p>        
        </div>
    else
    bookData = <h2> Sorry. No book with that ID exist </h2>;
  
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
      var bookList = books.map( (book) => {
        return(
          <li key = {book.id}>            
              {book.title} <Link to={`${match.url}/${book.id}`}>details</Link>
          </li>
          )   
        })

      return (
        <div>
          <h2>Product View</h2>        
          <ul>
              {bookList}
          </ul>
          
          <Route path={`${match.url}/:bookId`}
            render={(props) => <Details books={books} {...props} />} />
          <Route exact path={match.url}
            render={() => <h3>Book details for selected book will go here</h3>}
          />
        </div>
      )
    }
  }

  export default Product;

