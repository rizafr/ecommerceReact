import React from 'react';
import PropTypes from 'prop-types';

const CatalogItem = props => {
  return (
    <div className="product-card">
      <h2 className="product-card__title">{props.product.name}</h2>
      <img src="" alt="" />
      <p className="product-card__description">{props.product.description}</p>
      <div className="product-card__send">
        <p>{props.product.price}</p>
        <a>Add to cart</a>
      </div>
    </div>
  );
};

CatalogItem.propTypes = {
  product: PropTypes.object,
  onAddToCart: PropTypes.func
};

export default CatalogItem;