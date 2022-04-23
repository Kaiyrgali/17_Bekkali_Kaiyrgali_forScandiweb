import React, { useState } from 'react';
import { connect } from 'react-redux';
import { itemAddedToCart } from '../../redux/actions';


import './Actions-Cart-Item.scss'

function ActionsCartItem({ product, count, activeCurrency, shoppingCart, addItemToCart }) {
  const item = JSON.parse(product);
  const price=item.prices.find(
    (index)=>index.currency.symbol === activeCurrency
    );
  // const [activePicture, setPicture] = useState(0);
  
  const isAttributes = (item.attributes[0]===undefined);

  console.log('item-mini', item, count, price, activeCurrency)

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
    <div className='mini-cart'>
      
      <div className='mini-details'>
          <p className='mini-title'>{item.brand}</p>
          <p className='mini-title'>{item.name}</p>
          <p className='mini-price'>{price.currency.symbol+''+price.amount.toFixed(2)}</p>
        {/* <div className='mini-attributes'> */}
          {isAttributes ? '' : 
            item.attributes[0].items.map((index) => (
              <p className={'mini-attributes-value' 
              + (index.value === item.atr ? ' select' : '')
            }
                key={index.value} >
                {index.value}
              </p> 
            ))
          }
        {/* </div> */}
      </div>

      <div className='mini-actions'>
        <div className='mini-counting'>
          <button className='mini-count-btn'
          onClick={()=>changeQty(1)}>
            <img className='mini-count-img' src='../plus-square.svg' alt='plus'></img>
          </button>
            <p className='mini-count-number'>{count}</p>
          <button className='mini-count-btn'
                  onClick={()=>changeQty(-1)}>
            <img className='mini-count-img' src='../minus-square.svg' alt='minus'></img>
          </button>
        </div>
        
        <div className='mini-galary'>
          <img src={item.gallery[0]} alt='main-picture' className='mini-img' title='close-up'>
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

export default connect(null, mapDispatchToProps)(ActionsCartItem);