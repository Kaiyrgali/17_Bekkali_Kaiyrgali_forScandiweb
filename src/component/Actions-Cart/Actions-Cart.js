import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { totalPrice } from '../../units/units';
import ActionsCartItem from '../Actions-Cart-Item';

import './Actions-Cart.scss'

function ActionsCart({itemsCount, activeCurrency, shoppingCart}) {

  const [style, setStyle] = useState(' hidden');
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

  const total = `${activeCurrency}${totalPrice(items, activeCurrency).toFixed(2)}`;
// itemCount переделать на редюсе Һ упростить акшион? вернуть переменную акт

  console.log('ActionCart', itemsCount);
  return (
    <div className='header-cart'
      onMouseOver={()=>items.length>0 ? setStyle(' open'): null}
      onMouseOut={()=>setStyle(' hidden')}
    >
      <Link to="/cart"
            className='cart_link'
            // onMouseOver={()=>items.length>0 ? setStyle(' open'): null} 
      >
        <img  className='cart_link-img'
              alt='cart'
              title='Show my cart'
              src='../empty-cart.svg'>
        </img>
        {(itemsCount>0) ?  <span className='cart_link-count'>{itemsCount}</span>: null}
      </Link>
 {/* поменять стили хидден и селектев черех ЮзеСтейт */}

      <div className={'mini-list'+style}
          //  onMouseOver={()=>setStyle(' open')}
          //  onMouseOut={()=>setStyle(' hidden')}
           >
        <p className='mini-list-title'>my bag, <span>2 items</span></p>
        <div className=''>
        {(items.length>0) ?
          items.map((item) => 
            <ActionsCartItem  key={item}
                              product={item[0]}
                              count={item[1]}
                              activeCurrency={activeCurrency}
                              shoppingCart={shoppingCart.cartItems}
            />  
          )
          : null}
        </div>

        <div className='mini-list-total'>
          <p>total</p>
          <p className='mini-total-text'>{total}</p>
        </div>

        <div className='cart-btns'>
          <Link to="/cart">
            <button className='cart-btn-view'>
              view bag
            </button>
          </Link>
          <Link to="#">
            <button className='cart-btn-check'>check out</button>
          </Link>
        </div>
      </div>
    </div>
  );
}


const mapStateToProps = (state) => {
  // console.log ('state in Product-List-Card >', state);
  return {
    itemsCount: state.shoppingCart.itemsCount,
    activeCurrency: state.activeCurrency,
    shoppingCart: state.shoppingCart,
  }
}


export default connect(mapStateToProps, null)(ActionsCart);

// export default ActionsCart;