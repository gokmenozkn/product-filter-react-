import React from 'react';
import Cards from './Cards';

import products from './products';

export default function Sideright({ filteredProducts }) {
  var FilteredProducts = filteredProducts.map(product => {
    return (
      <Cards 
        title={product.title}
        content={product.content}
        imgUrl={product.imgUrl}
        price={product.price}
        star={product.star}
        key={product.id} />
    )
  });

  var Products = products.map(product => {
    return (
      <Cards 
        title={product.title}
        content={product.content}
        imgUrl={product.imgUrl}
        price={product.price}
        star={product.star} 
        key={product.id} />
    )
  });

  return (
    <div className="row side-right">
      { filteredProducts.length ? FilteredProducts : Products }
    </div>
  )
};