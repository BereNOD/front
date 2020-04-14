import React from "react";

import productimg from "./product.png";

import "./index.scss";

const data = [
  {
    src: productimg,
  },
  {
    src: productimg,
  },
  {
    src: productimg,
  },
  {
    src: productimg,
  },
  {
    src: productimg,
  },
  {
    src: productimg,
  },
];

class Popularcard extends React.Component {
  render() {
    return (
      <div className="popular_container">
        <div className="card_wrapper">
          <div className="card">
            <div className="card_header">
              <div className="card_discount">
                <button className="card_discount_button">-40%</button>
              </div>
              <div className="card_picture">
                <img src={productimg} />
              </div>
            </div>
            <div className="card_checkboxes">
              <div className="card_stars">
                <div className="rating_block">
                  <input
                    name="rating"
                    defaultValue="5"
                    id="rating_5"
                    type="radio"
                  />
                  <label htmlFor="rating_5" className="label_rating" />
                  <input
                    name="rating"
                    defaultValue="4"
                    id="rating_4"
                    type="radio"
                  />
                  <label htmlFor="rating_4" className="label_rating" />
                  <input
                    name="rating"
                    defaultValue="3"
                    id="rating_3"
                    type="radio"
                  />
                  <label htmlFor="rating_3" className="label_rating" />
                  <input
                    name="rating"
                    defaultValue="2"
                    id="rating_2"
                    type="radio"
                    defaultChecked
                  />
                  <label htmlFor="rating_2" className="label_rating" />
                  <input
                    name="rating"
                    defaultValue="1"
                    id="rating_1"
                    type="radio"
                  />
                  <label htmlFor="rating_1" className="label_rating" />
                </div>
              </div>
              <div className="card_checkbox">
                <div className="checkbox_block">
                  <img src="./check-icon.png" />
                </div>
                <div className="checkbox_text">
                  <p>в наличии</p>
                </div>
              </div>
            </div>
            <div className="card_text">
              <p>
                Сухой корм Hill's Science Plan Adult Large Breed Lamb &amp; Rice
                для взрослых собак
              </p>
            </div>
            <div className="card_weight">
              <div className="radio_info">
                <input
                  name="weight"
                  defaultValue="option"
                  id="weight_4"
                  type="radio"
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
                  defaultChecked
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
                />
                <label htmlFor="weight_1" className="weight_label" />
                <p className="radio_title">5 кг</p>
              </div>
            </div>
            <div className="order_menu">
              <div className="price">
                <span className="strikethrough">999 ₽</span>
                <span className="real_price">222 ₽</span>
              </div>
              <div className="cart">
                <button className="cart_button">В корзину</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Popularcard;
