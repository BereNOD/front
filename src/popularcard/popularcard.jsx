import React from "react";
import toSalePercent from "../utils/toSalePercent.js";
import _ from 'lodash';
import Card from "./card";

import productimg from "./product.png";
import ratingIndex from "./star-full.png";

import "./index.scss";

const data = [
  {
    productimg: productimg,
    cardText: "Сухой корм Hill's Science Plan Adult Large Breed Lamb &amp; Rice",
    price: 9990,
    salePrice: 777,
    ratingIndex: ratingIndex,

  },
  {
    productimg: productimg,
    cardText: "НЕ Сухой корм Hill's Science Plan Adult Large Breed Lamb &amp; Rice",
    price: 999,
    salePrice: 777,
    ratingIndex: ratingIndex,
  },
  {
    productimg: productimg,
    cardText: "НЕ Сухой ",
    price: 999,
    salePrice: 777,
    ratingIndex: ratingIndex,

  },
  {
    productimg: productimg,
    cardText: "НЕ Сухой корм Hill's Science Plan Adult Large Breed Lamb &amp; Rice ",
    price: 999,
    salePrice: 777,
    ratingIndex: ratingIndex,
  },
  {
    productimg: productimg,
    cardText: "НЕ Сухой корм Hill's Science Plan Adult Large Breed Lamb &amp; Rice",
    price: 999,
    ratingIndex: ratingIndex,

  },
  {
    productimg: productimg,
    cardText: "НЕ Сухой корм Hill's Science Plan Adult Large Breed Lamb &amp; Rice",
    price: 999,
    salePrice: 777,
    ratingIndex: ratingIndex,
  },
  {
    productimg: productimg,
    cardText: "НЕ Сухой корм Hill's Science Plan Adult Large Breed Lamb &amp; Rice",
    price: 889,
    ratingIndex: ratingIndex,

  },
  {
    productimg: productimg,
    cardText: "НЕ Сухой корм Hill's Science Plan Adult Large Breed Lamb &amp; Rice",
    price: 999,
    salePrice: 777,
    ratingIndex: ratingIndex,

  },
];

console.log(toSalePercent);

class Popularcard extends React.Component {
  render() {
    return (
      <div className="popular_container">
        {_.map(data, item => (
          <Card
            productimg={productimg}
            cardText={item.cardText}
            price={item.price}
            salePrice={item.salePrice}
            ratingIndex={item.ratingIndex}

          />
        ))}

      </div>
    );
  }
}

export default Popularcard;
