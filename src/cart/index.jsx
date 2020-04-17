import React, { Component } from 'react';
import _ from 'lodash';

class Cart extends Component {
  render() {
    return (
      <div>
        В корзине {_.size(this.props.products)} товаров:
        {_.map(this.props.products, product => (
          <div>{JSON.stringify(product)}</div>
        ))}
      </div>
    );
  }
}

export default Cart;
