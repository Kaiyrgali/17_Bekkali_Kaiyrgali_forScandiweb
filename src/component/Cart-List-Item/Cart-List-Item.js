import React, { useState } from 'react';

import './Cart-List-Item.scss'

function CartListItem({product, count, activeCurrency}) {
  const item = JSON.parse(product);
  const price=item.prices.find(
    (index)=>index.currency.symbol === activeCurrency
    );
  const [activePicture, setPicture] = useState();
  const mainsPicture = (activePicture) ? activePicture : item.gallery[0];
  const isAttributes = (item.attributes[0]===undefined);

  console.log('item', item, count, price, activeCurrency)
  return (
    <div className='product-cart'>
      <div className='cart-details'>
        <div className='products-title'>
          <p className='products-title-brand'>{item.brand}</p>
          <p className='products-title-name'>{item.name}</p>
        </div>
        <div className='products-price'>
          <p className='products-price-value'>{price.currency.symbol+''+price.amount.toFixed(2)}</p>
        </div>
        <div className='products-attributes'>
          {isAttributes ? '' : 
            item.attributes[0].items.map((index) => (  
              <p className='products-attributes-value' //добавить селектед
                key={index.value} >
                {index.value}
              </p>
            ))
          }
        </div>
      </div>

      <div className='cart-actions'>
        <div className='cart-counting'>
          <img src='../plus-square.png' alt='plus'></img>
          <p className='cart-count-number'>1</p>
          <img src='../minus-square.png' alt='minus'></img>
        </div>
        
        <div >
          <img src={mainsPicture} alt='main-picture' className='cart-img' title='close-up'>
          </img>
        </div>

      </div>
    </div>
  );
}

export default CartListItem;