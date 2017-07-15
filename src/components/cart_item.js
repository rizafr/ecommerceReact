import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CartItem extends Component {
  render() {
    const { id, name, description, qty, price } = this.props.product;
    return (
      <div>
        <p>{name}</p>
        <p>{description}</p>
        <p>{price} &euro;</p>
        <p>{price * qty} &euro;</p>
        <div className="button">+ 1</div>
        <div className="button">- 1</div>
        <div className="button">Delete</div>
      </div>
    );
  }
}

CartItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    qty: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired
  }).isRequired
};

export default CartItem;