import React, { useState } from 'react';
import { connect } from 'react-redux';
import { itemAddedToCart } from '../../redux/actions'

import './Cart-List-Item.scss'

function CartListItem({product, count, activeCurrency, shoppingCart, addItemToCart}) {
  const item = JSON.parse(product);
  const price=item.prices.find(
    (index)=>index.currency.symbol === activeCurrency
    );
  const [activePicture, setPicture] = useState();
  const mainsPicture = (activePicture) ? activePicture : item.gallery[0];
  const isAttributes = (item.attributes[0]===undefined);

  console.log('item', item, count, price, activeCurrency)

  const changeCount = (act) => {
    const newCount = shoppingCart.get(product)+act;
    if (newCount === 0) {
      shoppingCart.delete(product);
    } else {
      shoppingCart.set(product, shoppingCart.get(product)+act);
    }
    addItemToCart(shoppingCart);
  }

  return (
    <div className='product-cart'>
      <div className='card-details'>
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
          <button className='cart-count-btn'
          onClick={()=>changeCount(1)}>
            <img className='cart-count-img' src='../plus-square.svg' alt='plus'></img>
          </button>
          {/* <div className='cart-count-block'> */}
            <p className='cart-count-number'>{count}</p>
          {/* </div> */}
          <button className='cart-count-btn'
                  onClick={()=>changeCount(-1)}>
            <img className='cart-count-img' src='../minus-square.svg' alt='minus'></img>
          </button>
        </div>
        
        <div>
          <img src={mainsPicture} alt='main-picture' className='cart-img' title='close-up'>
          </img>
        </div>

      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  addItemToCart: (newItem) => {
    dispatch(itemAddedToCart(newItem));
  },
});

export default connect(null, mapDispatchToProps)(CartListItem);