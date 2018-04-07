import React, { Component } from 'react';
import { HashRouter, Route, Switch, NavLink } from "react-router-dom";
import Product from './Product';
import AddBook from './AddBook';


const Header = () => (
  <div>
    <ul className="header">
      <li><NavLink exact activeClassName="active" to="/">Home</NavLink></li>
      <li><NavLink activeClassName="active" to="/products">Products</NavLink></li>
      <li><NavLink activeClassName="active" to="/addbook">Add Book</NavLink></li>
      <li><NavLink activeClassName="active" to="/company">Company</NavLink></li>
    </ul>
  </div>
)

const NoMatch = () => (
  <div>
    <h2>No Match Found</h2>
  </div>
)

const Home = () => (
  <div>
    <h2>Home View</h2>
  </div>
)

const Company = () => (
  <div>
    <h2>Company View</h2>
  </div>
)

class App extends Component {
  render() {
    return (
      <HashRouter >
        <div>
          <Header />
          <Switch>
            <Route exact path="/" render={() => <Home />} />
            <Route path="/products" render={(props) => <Product bookStore = {this.props.bookStore} {...props}/>} />
            <Route path="/addbook" render={(props) => <AddBook bookStore = {this.props.bookStore} {...props}/>} />
            <Route path="/company" render={() => <Company />} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default App;
