import React from 'react';
import toSalePercent from '../utils/toSalePercent.js';

import checkIcon from './images/check-icon.png';
import placeForPhoto from './images/place_for_photo.png';
import placeForPhoto1 from './images/place_for_photo_1.png';
import placeForPhoto2 from './images/place_for_photo_2.png';
import placeForPhoto3 from './images/place_for_photo_3.png';
import printIconBlue from './images/print-icon-blue.png';
import printIconEmpty from './images/print-icon-empty.png';
import roubleSign1 from './images/rouble-sign_1.png';
import roubleSign2 from './images/rouble-sign_2.png';
import roubleSign3 from './images/rouble-sign_3.png';
import starEmpty from './images/star-empty.png';
import starFull from './images/star-full.png';

import './styles.css';

const ratingList = [1, 2, 3, 4, 5];

class SaleCard extends React.Component {
  render() {
    return (
      <div className="sale__card">
        <div className="sale__img">
        {this.props.salePrice ? (
            <div className="value">{toSalePercent(this.props.price, this.props.salePrice)}</div>
            ) : null}
              <img className="title__img" src={placeForPhoto} />

        </div>
          <div className="rating__block">
            <ul className="rating__stars">
            {_.map(ratingList, rate => (
              <li className="rating__img">
                  <img
                    className="rating__index"
                    src={this.props.rating >= rate ? starFull : starEmpty}
                  />
              </li>
            ))}
            </ul>
            <div className="Availability">
              <img src={checkIcon} alt="Availability__icon" />
              <div className="Availability__index">в наличии</div>
            </div>
          </div>
        <div className="description">
          Сухой корм Acana Lamb & Okanagan Apple для взрослых собак, с ягнёнком и яблоком
        </div>
        <ul className="weight">
              <li className="weight-table">
                <img className="weight-table-icon" src={printIconEmpty} />
                <div className="weight-table-icon-value">300 гр</div>
              </li>
              <li className="weight-table">
                <img className="weight-table-icon" src={printIconEmpty} />
                <div className="weight-table-icon-value">1 кг</div>
              </li>
              <li className="weight-table">
                <img className="weight-table-icon" src={printIconEmpty} />
                <div className="weight-table-icon-value">2 кг</div>
              </li>
              <li className="weight-table">
                <img className="weight-table-icon-blue" src={printIconBlue} />
                <div className="weight-table-icon-value">5 кг</div>
              </li>
            </ul>
            <div className="price">
            {this.props.salePrice ? (
              <div className="oldprice">
                  {this.props.price}
                  <span className="oldprice__number">
                      <img className="oldprice__logo" src={roubleSign2} />
                  </span>
              </div>
            ) : null}
            <div className="newprice">
                {this.props.salePrice ? this.props.salePrice : this.props.price}
                <span className="newprice__number">
                    <img className="newprice__logo" src={roubleSign1} />
                </span>
            </div>
              <button className="basket">В корзину</button>
            </div>
      </div>




        )
  }
}
export default SaleCard;