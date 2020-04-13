import React from 'react';

import checkEmpty from './images/check-empty.png';
import checkIcon from './images/check-icon.png';
import placeForPhoto from './images/place-for-photo.png';
import printIconBlue from './images/print-icon-blue.png';
import roubleSignD from './images/rouble-sign-d.png';
import roubleSignPromo from './images/rouble-sign-promo.png';
import roubleSign from './images/rouble-sign.png';
import starEmpty from './images/star-empty.png';
import starFull from './images/star-full.png';

import './styles.scss';

class New extends React.Component {
    render() {
        return (
            <div className="new">
                <h2 className="new-title">НОВИНКИ</h2>
                <div className="new-box">
                    <div className="new-item">
                        <div className="item-icon item-icom-promo">
                            <div className="promo-value">-15%</div>
                            <img className="item-icon-img" src={placeForPhoto} />
                        </div>
                        <div className="item-content">
                            <div className="content-title">
                                <ul className="content-rating">
                                    <li className="content-rating-pos content-rating-pos-active">
                                        <img className="content-reting-pos-index" src={starFull} />
                                    </li>
                                    <li className="content-rating-pos content-rating-pos-active">
                                        <img className="content-reting-pos-index" src={starFull} />
                                    </li>
                                    <li className="content-rating-pos">
                                        <img className="content-reting-pos-index" src={starEmpty} />
                                    </li>
                                    <li className="content-rating-pos">
                                        <img className="content-reting-pos-index" src={starEmpty} />
                                    </li>
                                    <li className="content-rating-pos">
                                        <img className="content-reting-pos-index" src={starEmpty} />
                                    </li>
                                </ul>
                                <div className="status">
                                    <img className="status-icon" src={checkIcon} />
                                    <div className="status-index">в наличии</div>
                                </div>
                            </div>
                            <div className="content-description">
                            Сухой корм Cat Chow Special Care Sterilized для взрослых кошек, Кастрированные или...
                            </div>
                            <ul className="content-weight">
                                <li className="content-weight-dose">
                                    <img className="content-weight-dose-icon" src={checkEmpty} />
                                    <div className="content-weight-dose-value">300 гр</div>
                                </li>
                                <li className="content-weight-dose">
                                    <img className="content-weight-dose-icon" src={checkEmpty} />
                                    <div className="content-weight-dose-value">1 кг</div>
                                </li>
                                <li className="content-weight-dose">
                                    <img className="content-weight-dose-icon" src={checkEmpty} />
                                    <div className="content-weight-dose-value">2 кг</div>
                                </li>
                                <li className="content-weight-dose">
                                    <img className="content-weight-dose-icon content-weight-dose-icon-active" src={printIconBlue} />
                                    <div className="content-weight-dose-value">5 кг</div>
                                </li>
                            </ul>
                            <div className="item-total">
                                <div className="total-cost-discount">9999
                                    <span className="total-cost-currensy-discount">
                                        <img className="total-cost-currense-discount-ru" src={roubleSignD} />
                                    </span>
                                </div>
                                <div className="total-cost total-cost-promo">9999
                                    <span className="total-cost-currensy">
                                        <img className="total-cost-currensy-ru" src={roubleSignPromo} />
                                    </span>
                                </div>
                                <button className="total-choose total-choose-promo">В корзину</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default New;