import React, { Component } from 'react';
import { Prompt } from "react-router-dom";

export default class AddBook extends Component {
    constructor(props) {
        super(props);
        this.state = { title: "", info: "", isBlocking: false }
      }
      addBook = (event) => {
        event.preventDefault();
        var bookStore = this.props.bookStore;
        bookStore.addBook({title: this.state.title, info: this.state.info});
        event.target.reset();
        this.setState({ isBlocking: false });
      }
      onChange = (event) => {
        this.setState({[event.target.id]: event.target.value})
        this.setState({isBlocking: event.target.value.length > 0 });
      }
    render() {
      const { isBlocking } = this.state;
      return (
        <div>
          <h2>Add Book</h2>        
          <form onSubmit={this.addBook} onChange={this.onChange}>
          <input placeholder="Title" id="title" /><br/>
          <input placeholder="Info" id="info" /><br/>
          <button>Save</button>
        </form>
        <Prompt
          when={isBlocking}
          message={location =>
            `Are you sure you want to go to ${location.pathname} and not finish adding your book?`
          }
        />
        </div>
      )
    }
  }