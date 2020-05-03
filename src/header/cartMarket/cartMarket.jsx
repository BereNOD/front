import React from 'react';

import cart_icon from "./cart_icon.png";
import '../header.scss';

class cartMarket extends React.Component {
  render() {
    return (
   <div className="Cart">
     <img src={cart_icon}/>
     <a href="#" style={{ color: '#68D6F4' }} className="Cart_link">Корзина</a>
   </div>

    )
  }
}

export default cartMarket;
