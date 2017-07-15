import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CatalogItem from './catalog_item';

class Catalog extends Component {
  render() {
    const items = this.props.products.map(product =>
      <CatalogItem product={ product } key={product.id}/>
    );
    return (
      <div>
        <h3 className="page-subtitle">Products</h3>
        <ul>
            { items }
        </ul>
      </div>
    );
  }
}

Catalog.propTypes = {
  products: PropTypes.array
};

export default Catalog;