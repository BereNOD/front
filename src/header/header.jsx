import React from 'react';

import logo from "./kenguru/logo.png";
import phone_icon from "./kenguru/phone_icon.png";
import location_icon from "./kenguru/location_icon.png";
import user_icon from "./kenguru/user_icon.png";
import cart_icon from "./kenguru/cart_icon.png";
import './header.scss';

class header extends React.Component {
  render() {
    return (
      <div className="Header">
        <div className="Top_header">
          <div className="Logo_Wrapper">
            <img src={logo} />
        </div>

      <div className="Contacts">
        <div className="Telnumber">
          <img src={phone_icon} />
          <a href="#">+7(930) 635 65 25</a>
        </div>
          <div className="location_icon">
            <img src={location_icon} />
            <a href="#">г.Тула,ул.Пузакова,44</a>
          </div>
      </div>

      <div className="Search">
           <form class="form-inline my-2 my-lg-0">
                <input id="Search_product" class="form-control mr-sm-2"
                type="search" placeholder="Поиск по товарам" aria-label="Search"></input>
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Найти</button>
           </form>
      </div>

      <div className="Profile">
         <img src={user_icon} />
            <a href="#" style="color: #68D6F4" className="Profile_link">Личный кабаинет</a>
            </div>

      <div className="Cart">
         <img src={cart_icon} />
         <a href="#" style="color: #68D6F4" className="Cart_link">Корзина</a>
            </div>
          </div>
      </div>
       )
      }
    }
