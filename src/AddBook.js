import React, { Component } from 'react';

export default class AddBook extends Component {
    constructor(props) {
        super(props);
        this.state = { title: "", info: "" }
      }
      addBook = (event) => {
        event.preventDefault();
        var bookStore = this.props.bookStore;
        bookStore.addBook({title: this.state.title, info: this.state.info});
        event.target.reset();
      }
      onChange = (evt) => {
        this.setState({[evt.target.id]: evt.target.value})
      }
    render() {
      return (
        <div>
          <h2>Add Book</h2>        
          <form onSubmit={this.addBook} onChange={this.onChange}>
          <input placeholder="Title" id="title" /><br/>
          <input placeholder="Info" id="info" /><br/>
          <button>Save</button>
        </form>
        </div>
      )
    }
  }