import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from './header';
import CartItem from './cart_item';

class Cart extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    const cartItems = this.products.map(product => {
      <CartItem key={product.id} product={ product }></CartItem>
    });

    const total = this.props.products.reduce((acc, product) => {
      return acc + (product.price * product.qty);
    }, 0).toFixed(2);

    return (
      <div>
        <Header title="Cart"></Header>
        <p>{ cartItems }</p>
        <p>{ total }</p>
        <a className="button">Continue Shopping</a>
        <a className="button">Finish Shopping</a>
      </div>
    );
  }
}

Cart.propTypes = {
  products: PropTypes.array,
};

export default Cart;