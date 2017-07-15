import React, { Component } from 'react';
import './App.css';
import { products as catalogProducts } from './data/data';

import Header from './components/header';
import Catalog from './components/catalog';

class App extends Component {
  constructor() {
    super();
    this.state = {
      page: 'catalog',
      products: catalogProducts
    }

    // scope
    this.handleNavigate = this.handleNavigate.bind(this);
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
        return <Catalog products={ this.state.products }/>
        break;
      default:
        return null;
        break;
    }
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
