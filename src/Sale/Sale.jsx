import React from 'react'

import check-icon from 'src/Sale/images/check-icon.png'
import place_for_photo from 'src/Sale/images/place_for_photo.png'
import place_for_photo_1 from 'src/Sale/images/place_for_photo_1.png'
import place_for_photo_2 from 'src/Sale/images/place_for_photo_2.png'
import place_for_photo_3 from 'src/Sale/images/place_for_photo_3.png'
import print-icon-blue from 'src/Sale/images/print-icon-blue.png'
import print-icon-empty from 'src/Sale/images/print-icon-empty.png'
import rouble-sign_1 from 'src/Sale/images/rouble-sign_1.png'
import rouble-sign_2 from 'src/Sale/images/rouble-sign_2.png'
import rouble-sign_3 from 'src/Sale/images/rouble-sign_3.png'
import star-empty from 'src/Sale/images/star-empty.png'
import star-full from 'src/Sale/images/star-full.png'

import 'src/Sale/styles.css'

class Sale extends React.components {
  render() {
    return (
      <div className="sale">
        <h2 className="title">СКИДКИ</h2>
        <div className="main__cards">
        <div className="sale__card">
          <div className="sale__img">
            <div className="value">-8%</div>
            <img className="title__img" src={place_for_photo} />
          </div>
          <div className="rating">
            <div className="rating__block">
              <ul className="rating__stars">
                <li className="rating__img"><img className="rating1" src={star-full} /></li>
                <li className="rating__img"><img className="rating2" src={star-full} /></li>
                <li className="rating__img"><img className="rating3" src={star-full} /></li>
                <li className="rating__img"><img className="rating4" src={star-full} /></li>
                <li className="rating__img"><img className="rating5" src={star-full} /></li>
              </ul>
              <div className="Availability">
                <img src={check-icon} alt="Availability__icon" />
                <div className="Availability__index">в наличии</div>
              </div>
            </div>
          </div>
          <div className="description">
            Сухой корм Acana Lamb & Okanagan Apple для взрослых собак, с ягнёнком и яблоком
          </div>
          <ul className="weight">
                <li className="weight-table">
                  <img className="weight-table-icon" src={print-icon-empty} />
                  <div className="weight-table-icon-value">300 гр</div>
                </li>
                <li className="weight-table">
                  <img className="weight-table-icon" src={print-icon-empty} />
                  <div className="weight-table-icon-value">1 кг</div>
                </li>
                <li className="weight-table">
                  <img className="weight-table-icon" src={print-icon-empty} />
                  <div className="weight-table-icon-value">2 кг</div>
                </li>
                <li className="weight-table">
                  <img className="weight-table-icon-blue" src={print-icon-blue} />
                  <div className="weight-table-icon-value-active">5 кг</div>
                </li>
              </ul>
              <div className="shop">
                <div className="oldprice">
                  <span className="oldprice__number">295</span>
                  <span>
                    <img className="oldprice__logo" src={rouble-sign_2} />
                  </span>
                </div>
                <div className="newprice">
                  <span className="newprice__number">237</span>
                  <span>
                    <img className="newprice__logo" src={rouble-sign_1} />
                  </span>
                </div>
                <button className="basket">В корзину</button>
              </div>
        </div>
        <div className="sale__card">
          <div className="sale__img">
            <div className="value">-8%</div>
            <img className="title__img" src={place_for_photo_1} alt="sale_card1" />
          </div>
          <div className="rating">
            <div className="rating__block">
              <ul className="rating__stars">
                <li className="rating__img"><img className="rating1" src={star-full} alt="rating_block" /></li>
                <li className="rating__img"><img className="rating2" src={star-empty} alt="rating_block" /></li>
                <li className="rating__img"><img className="rating3" src={star-empty} alt="rating_block" /></li>
                <li className="rating__img"><img className="rating4" src={star-empty} alt="rating_block" /></li>
                <li className="rating__img"><img className="rating5" src={star-empty} alt="rating_block" /></li>
              </ul>
              <div className="Availability">
                <img src={check-icon} alt="Availability__icon">
                <div className="Availability__index">в наличии</div>
              </div>
            </div>
          </div>
          <div className="description">
            Спрей Биосфера БиоВакс, Гадить? Нет!
          </div>
          <div className="weight__hidden"></div>
              <div className="shop">
                <div className="oldprice">
                  <span className="oldprice__number">350</span>
                  <span>
                    <img className="oldprice__logo" src={rouble-sign_2} />
                  </span>
                </div>
                <div className="newprice">
                  <span className="newprice__number">209</span>
                  <span>
                    <img className="newprice__logo" src={rouble-sign_1} />
                  </span>
                </div>
                <button className="basket">В корзину</button>
              </div>
        </div>
        <div className="sale__card">
          <div className="sale__img">
            <div className="value">-5%</div>
            <img className="title__img" src={place_for_photo_2} alt="sale_card1" />
          </div>
          <div className="rating">
            <div className="rating__block">
              <ul className="rating__stars">
                <li className="rating__img"><img className="rating1" src={star-full} alt="rating_block" /></li>
                <li className="rating__img"><img className="rating2" src={star-full} alt="rating_block" /></li>
                <li className="rating__img"><img className="rating3" src={star-full} alt="rating_block" /></li>
                <li className="rating__img"><img className="rating4" src={star-full} alt="rating_block" /></li>
                <li className="rating__img"><img className="rating5" src={star-full} alt="rating_block" /></li>
              </ul>
              <div className="Availability">
                <img src={check-icon} alt="Availability__icon">
                <div className="Availability__index">в наличии</div>
              </div>
            </div>
          </div>
          <div className="description">
            Консервы Monge Dog Fresh для собак говядина 100 г
          </div>
          <div className="weight__hidden"></div>
              <div className="shop">
                <div className="oldprice">
                  <span className="oldprice__number">99</span>
                  <span>
                    <img className="oldprice__logo" src={rouble-sign_2} />
                  </span>
                </div>
                <div className="newprice">
                  <span className="newprice__number">58</span>
                  <span>
                    <img className="newprice__logo" src={rouble-sign_1} />
                  </span>
                </div>
                <button className="basket">В корзину</button>
              </div>
        </div>
        <div className="sale__card">
          <div className="sale__img">

            <img className="title__img" src={place_for_photo_3} alt="sale_card1" />
          </div>
          <div className="rating">
            <div className="rating__block">
              <ul className="rating__stars">
                <li className="rating__img"><img className="rating1" src={star-full} alt="rating_block" /></li>
                <li className="rating__img"><img className="rating2" src={star-full} alt="rating_block" /></li>
                <li className="rating__img"><img className="rating3" src={star-full} alt="rating_block" /></li>
                <li className="rating__img"><img className="rating4" src={star-full} alt="rating_block" /></li>
                <li className="rating__img"><img className="rating5" src={star-full} alt="rating_block" /></li>
              </ul>
              <div className="Availability">
                <img src={check-icon} alt="Availability__icon" />
                <div className="Availability__index">в наличии</div>
              </div>
            </div>
          </div>
          <div className="description">
            Сухой корм Верные Друзья Для средних попугаев
          </div>
          <ul className="weight">
                <li className="weight-table">
                  <img className="weight-table-icon" src={print-icon-empty} />
                  <div className="weight-table-icon-value">300 гр</div>
                </li>
                <li className="weight-table">
                  <img className="weight-table-icon" src={print-icon-empty} />
                  <div className="weight-table-icon-value-active">1 кг</div>
                </li>
                <li className="weight-table">
                  <img className="weight-table-icon" src={print-icon-empty} />
                  <div className="weight-table-icon-value">2 кг</div>
                </li>
                <li className="weight-table">
                  <img className="weight-table-icon-blue" src={print-icon-blue} />
                  <div className="weight-table-icon">5 кг</div>
                </li>
              </ul>
              <div className="shop">
                <div className="oldprice__hidden"></div>

                <div className="newprice1">
                  <span className="newprice__number1">229</span>
                  <span>
                    <img className="newprice__logo" src={rouble-sign_3} >
                  </span>
                </div>
                <button className="basket">В корзину</button>
              </div>
        </div>
        </div>
      </div>
    )
  }
}
export default Sale;
