import React, { useState } from 'react';
import { connect } from 'react-redux';
import { itemAddedToCart, itemRemovedFromCart } from '../../redux/actions';


import './Cart-List-Item.scss'

function CartListItem({product, count, activeCurrency, shoppingCart, addItemToCart, rumoveItemToCart}) {
  const item = JSON.parse(product);
  const price=item.prices.find(
    (index)=>index.currency.symbol === activeCurrency
    );
  const [activePicture, setPicture] = useState(0);
  
  const isAttributes = (item.attributes[0]===undefined);

  console.log('item', item, count, price, activeCurrency)

  const removeCount = () => {
    const newCount = shoppingCart.get(product)-1;
    if (newCount === 0) {
      shoppingCart.delete(product);
    } else {
      shoppingCart.set(product, newCount);
    }
    rumoveItemToCart(shoppingCart);
  }

  const addCount = () => {
    shoppingCart.set(product, shoppingCart.get(product)+1);
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
              <p className={'products-attributes-value' + (index.value === item.atr ? ' selected' : '')}
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
          onClick={()=>addCount()}>
            <img className='cart-count-img' src='../plus-square.svg' alt='plus'></img>
          </button>
          {/* <div className='cart-count-block'> */}
            <p className='cart-count-number'>{count}</p>
          {/* </div> */}
          <button className='cart-count-btn'
                  onClick={()=>removeCount()}>
            <img className='cart-count-img' src='../minus-square.svg' alt='minus'></img>
          </button>
        </div>
        
        <div className='cart-galary'>
          <img src={item.gallery[activePicture]} alt='main-picture' className='cart-img' title='close-up'>
          </img>
          <div className='chevron-btns'>
            <button className='chevron-left'
                    onClick={()=>setPicture(activePicture===0 ? item.gallery.length-1 : activePicture-1)}
            >
              <img src='../chevron-left.svg' className='chevron' alt='left' title='left'>
              </img>
            </button>

            <button className='chevron-right'
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
  rumoveItemToCart: (newItem) => {
    dispatch(itemRemovedFromCart(newItem));
  },
});

export default connect(null, mapDispatchToProps)(CartListItem);