import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Search from './pages/Search';
import ShoppingCart from './pages/ShoppingCart';
import ProductDetail from './pages/ProductDetail';
import Checkout from './pages/Checkout';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Search } />
          <Route path="/shopping-cart" component={ ShoppingCart } />
          <Route path="/product/:id" component={ ProductDetail } />
          <Route path="/checkout" component={ Checkout } />
          {/* <Route
            path="/product/:id/evaluation/forms"
            component={ ProductDetail }
          /> */}
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
