import React, { useState } from 'react';
import { connect } from 'react-redux';
import CartListItem from '../component/Cart-List-Item';
import { totalPrice } from '../units/units';

import './cart-page.scss';


function CartPage({ activeCurrency, shoppingCart }) {
  
  const items = Array.from(shoppingCart.cartItems);

  // const totalPrice = () => {
  //   let newPrice = 0;
  //   for (let i = 0; i < items.length; i++) {
  //     const element = JSON.parse(items[i][0]);
  //     const itemPriceAtr = element.prices.find(
  //       (index)=>index.currency.symbol === activeCurrency
  //       );
  //       newPrice = newPrice + itemPriceAtr.amount*items[i][1]
  //   }
  //   return newPrice;
  // } 

  // console.log(totalPrice());
  

  const total = `${shoppingCart.itemsCount} items for ${activeCurrency}${totalPrice(items, activeCurrency).toFixed(2)}`;
  
    // setPrice(totalPrice)
  // }

  // const total = items.reduce((sum, next) => (sum + next[0]),0);

  console.log('shoppingCart >', items);
  
  return (
    <div>
      <div className='cart-title'>cart</div>
      <div className='cart-list'>
        {(items.length>0) ?
          items.map((item) => 
            <CartListItem key={item}
                          product={item[0]}
                          count={item[1]}
                          activeCurrency={activeCurrency}
                          shoppingCart={shoppingCart.cartItems} />  
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
// 4. возможно для деталей  корзины свои аттрибуты

export default connect(mapStateToProps, null)(CartPage);