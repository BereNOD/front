const toSalePercent = (price, salePrice) => {
  const diffPercent = salePrice / price * 100 - 100;

  return `${Math.round(diffPercent)}%`;
}

export default toSalePercent; 