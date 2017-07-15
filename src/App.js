import React, { Component } from 'react';
import './App.css';
import { products as catalogProducts } from './data/data';

import Header from './components/header';
import Catalog from './components/catalog';
import Cart from './components/cart';

class App extends Component {
  constructor() {
    super();
    this.state = {
      page: 'catalog',
      products: catalogProducts,
      cart: []
    }

    // scope
    this.handleNavigate = this.handleNavigate.bind(this);
    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.handleChangeQuantity = this.handleChangeQuantity.bind(this);

  }

  // Manage cart
  handleAddToCart(selectedProduct) {
    let cartItems = this.state.cart;
    let existingProduct = cartItems.find(product => product.id === selectedProduct.id);
    if (existingProduct) {
      cartItems = cartItems.map(product => {
        if (product.id === selectedProduct.id) {
          product.qty += 1;
        }
        return product;
      });
    } else {
      const newProduct = Object.assign({}, selectedProduct, { qty: 1 });
      cartItems = cartItems.concat([newProduct]);
    }

    this.setState({
      cart: cartItems,
      page: 'cart'
    });
  }

  // Manual Router
  handleNavigate(newPage) {
    this.setState({
      page: newPage
    });
  }

  getComponent(page) {
    switch (page) {
      case 'catalog':
        return <Catalog
          products={this.state.products}
          onAddToCart={this.handleAddToCart}
        />
      case 'cart':
        return <Cart products={this.state.cart} />
      default:
        return null;
    }
  }


  handleChangeQuantity(selectedProduct, qty) {
    const cartItems = cartItems.map(product => {
      if (product.id === selectedProduct.id) {
        product.qty = qty;
      }
      return product;
    }).filter(product => product.qty > 0);

    this.setState({
      cart: cartItems
    })
  }


  render() {
    const component = this.getComponent(this.state.page);
    return (
      <div>
        <h1><Header title="CATALOG"></Header></h1>
        {component}
      </div>
    );
  }
}
export default App;
