import React from "react";
import toSalePercent from "../utils/toSalePercent.js";

import checkIcon from "./check-icon.png"


class Card extends React.Component {
  render() {
    return (
      <div className="card_wrapper">
        <div className="card">
          <div className="card_header">
            {this.props.salePrice ? (
              <div className="card_discount">
                <button className="card_discount_button">{toSalePercent(this.props.price, this.props.salePrice)}</button>
              </div>) : null
            }
            <div className="card_picture">
              <img src={this.props.productimg} />
            </div>
          </div>
          <div className="card_checkboxes">
            <div className="card_stars">
              <ul className="rating_block">
                <li className='label_rating'>
                  <img className="rating_index" src={this.props.ratingIndex} />
                </li>
                <li className='label_rating'>
                  <img className="rating_index" src={this.props.ratingIndex} />
                </li>
                <li className='label_rating'>
                  <img className="rating_index" src={this.props.ratingIndex} />
                </li>
                <li className='label_rating'>
                  <img className="rating_index" src={this.props.ratingIndex} />
                </li>
                <li className='label_rating'>
                  <img className="rating_index" src={this.props.ratingIndex} />
                </li>
              </ul>
            </div>
            <div className="card_checkbox">
              <div className="checkbox_block">
                <img src={checkIcon} />
              </div>
              <div className="checkbox_text">
                <p>в наличии</p>
              </div>
            </div>
          </div>
          <div className="card_text">
            <p>
              {this.props.cardText}
            </p>
          </div>
          <div className="card_weight">
            <div className="radio_info">
              <input
                name="weight"
                defaultValue="option"
                id="weight_4"
                type="radio"
                hidden

              />
              <label htmlFor="weight_4" className="weight_label" />
              <p className="radio_title">300 гр</p>
            </div>
            <div className="radio_info">
              <input
                name="weight"
                defaultValue="option"
                id="weight_3"
                type="radio"
                hidden
              />
              <label htmlFor="weight_3" className="weight_label" checked />
              <p className="radio_title">1 кг</p>
            </div>
            <div className="radio_info">
              <input
                name="weight"
                defaultValue="option"
                id="weight_2"
                type="radio"
                hidden
              />
              <label htmlFor="weight_2" className="weight_label" />
              <p className="radio_title">2 кг</p>
            </div>
            <div className="radio_info">
              <input
                name="weight"
                defaultValue="option"
                id="weight_1"
                type="radio"
                hidden
              />
              <label htmlFor="weight_1" className="weight_label" />
              <p className="radio_title">5 кг</p>
            </div>
          </div>
          <div className="order_menu">
            <div className="price">
              <span className="strikethrough">{this.props.salePrice ? this.props.price : null}</span>
              <span className="real_price">{this.props.salePrice ? this.props.salePrice : this.props.price}₽</span>
            </div>
            <div className="cart">
              <button className="cart_button">В корзину</button>
            </div>
          </div>
        </div>
      </div>
    );

  }

}

export default Card;