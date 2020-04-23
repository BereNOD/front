import React from 'react';
import _ from 'lodash'
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

const data = [
  {
    price: 295,
    salePrice: 237
  },
  {
    price: 350,
    salePrice: 209
  },
  {
    price: 99,
    salePrice: 58
  },
  {
    price: 229,

  }
];

class Sale extends React.Component {
  render() {
    return (
        <div className="sale">
          <h2 className="title">СКИДКИ</h2>
          <div className="main__cards">
            {_.map(arr, item => (
              <div className="sale__card">
                <div className="sale__img">
                  <div className="value">-8%</div>
                  <img className="title__img" src={placeForPhoto} />
                </div>
                <div className="rating">
                  <div className="rating__block">
                    <ul className="rating__stars">
                      <li className="rating__img"><img className="rating1" src={starFull} /></li>
                      <li className="rating__img"><img className="rating2" src={starFull} /></li>
                      <li className="rating__img"><img className="rating3" src={starFull} /></li>
                      <li className="rating__img"><img className="rating4" src={starFull} /></li>
                      <li className="rating__img"><img className="rating5" src={starFull} /></li>
                    </ul>
                    <div className="Availability">
                      <img src={checkIcon} alt="Availability__icon" />
                      <div className="Availability__index">в наличии</div>
                    </div>
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
                        <div className="weight-table-icon-value-active">5 кг</div>
                      </li>
                    </ul>
                    <div className="shop">
                      <div className="oldprice">{item.price}
                        <span className="oldprice__number">295</span>
                        <span>
                          <img className="oldprice__logo" src={roubleSign2} />
                        </span>
                      </div>
                      <div className="newprice">{item.salePrice}
                        <span className="newprice__number">237</span>
                        <span>
                          <img className="newprice__logo" src={roubleSign1} />
                        </span>
                      </div>
                      <button className="basket">В корзину</button>
                    </div>
              </div>
            ))}

        </div>
        </div>

        )
  }
}
export default Sale;
