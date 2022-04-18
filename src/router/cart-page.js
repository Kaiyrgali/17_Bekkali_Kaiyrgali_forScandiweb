import React from 'react';
import { connect } from 'react-redux';
import CartListItem from '../component/Cart-List-Item';

import './cart-page.scss';


function CartPage({ activeCurrency, shoppingCart }) {
  const total = `${shoppingCart.itemsCount} items for ${activeCurrency}${shoppingCart.orderTotal}`
  console.log('shoppingCart >', shoppingCart)
  return (
    <div>
      <div className='cart-title'>cart</div>
      <div className='cart-list'>
        {(shoppingCart.cartItems.length>0) ?
          <CartListItem /> :
          <div className='cart-empty'>Your card is currently empty</div>
        }
      </div>

      <div className='cart-total'>
        <p>total: &nbsp;</p>
        <p className='cart-total-text'>{total}</p>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log('cart-page-state >', state)
  return ({
    activeCurrency: state.activeCurrency,
    shoppingCart: state.shoppingCart,
  })
}

// 1. Уброть кнопку с зеленной метки в каталогах
// 2. Лобавить в корзину с делайлс

export default connect(mapStateToProps, null)(CartPage);