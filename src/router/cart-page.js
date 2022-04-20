import React from 'react';
import { connect } from 'react-redux';
import CartListItem from '../component/Cart-List-Item';

import './cart-page.scss';


function CartPage({ activeCurrency, shoppingCart }) {
  const total = `${shoppingCart.itemsCount} items for ${activeCurrency}${shoppingCart.orderTotal}`;
  const items = Array.from(shoppingCart.cartItems);
  console.log('shoppingCart >', items)
  return (
    <div>
      <div className='cart-title'>cart</div>
      <div className='cart-list'>
        {(items.length>0) ?
          items.map((item) => 
            <CartListItem key={item}
                          product={item[0]}
                          count={item[1]}
                          activeCurrency={activeCurrency} />  
          )
          : <div><p>Your card is empty</p></div>}
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