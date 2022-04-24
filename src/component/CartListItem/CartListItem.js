import React, { useState } from 'react';
import { connect } from 'react-redux';
import { itemAddedToCart } from '../../redux/actions';

import './CartListItem.scss'

function CartListItem({product, count, activeCurrency, shoppingCart, addItemToCart }) {

  const item = JSON.parse(product);
  const price=item.prices.find(
    (index)=>index.currency.symbol === activeCurrency
    );
  const [activePicture, setPicture] = useState(0);
  const hasAttributes = (item.attributes[0]===undefined);

  const changeQty = (act) => {
    const newCount = shoppingCart.get(product)+act;
    if (newCount === 0) {
      shoppingCart.delete(product);
    } else {
      shoppingCart.set(product, newCount);
    }
    addItemToCart(shoppingCart);
  }

  return (
    <div className='cp-item'>
      <div className='cp-details'>
        <div className='cp-title'>
          <p className='cp-title__brand'>{item.brand}</p>
          <p className='cp-title__name'>{item.name}</p>
        </div>
        <div className='pdp-price'>
          <p className='pdp-price__value'>{price.currency.symbol+''+price.amount.toFixed(2)}</p>
        </div>
        <div className='cp-atr'>
          {hasAttributes ? '' : 
            item.attributes[0].items.map((index) => (
              <p className={'pdp-atr__value' + (index.value === item.atr ? ' selected' : '')}
                key={index.value} >
                {index.value}
              </p> 
            ))
          }
        </div>
      </div>

      <div className='cp-actions'>
        <div className='cp-counting'>
          <button className='cart-count__btn'
          onClick={()=>changeQty(1)}>
            <img className='cart-count__img' src='../plus-square.svg' alt='plus'></img>
          </button>
            <p className='cart-count-number'>{count}</p>
          <button className='cart-count__btn'
                  onClick={()=>changeQty(-1)}>
            <img className='cart-count__img' src='../minus-square.svg' alt='minus'></img>
          </button>
        </div>
        
        <div className='cp-galary'>
          <img src={item.gallery[activePicture]} alt='main-picture' className='cp-galary__img' title='close-up'>
          </img>
          <div className='cp-chevron'>
            <button className='cp-chevron__left'
                    onClick={()=>setPicture(activePicture===0 ? item.gallery.length-1 : activePicture-1)}
            >
              <img src='../chevron-left.svg' className='chevron' alt='left' title='left'>
              </img>
            </button>

            <button className='cp-chevron__right'
                    onClick={()=>setPicture(activePicture===item.gallery.length-1 ? 0 : activePicture+1)}
            >
              <img src='../chevron-right.svg' className='chevron' alt='right' title='right'>
              </img>
            </button>
          </div> 
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