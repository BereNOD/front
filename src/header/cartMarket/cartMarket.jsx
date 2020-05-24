import React from 'react';

import cart_icon from "./cart_icon.png";
import './cartMarket.sass';


class cartMarket extends React.Component {
  render() {
    return (
  <div className="Cart">
    <a href="#" style={{ color: '#68D6F4' }} className="Cart_link">
         <img width="29" height="27" src={cart_icon}/>
         <span className="Data_cart">Корзина
       </span>
     </a>
   </div>

    )
  }
}

export default cartMarket;
