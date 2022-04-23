import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { calcSum, calcQty } from '../../units';
import ActionsCartItem from '../Actions-Cart-Item';

import './Actions-Cart.scss'

function ActionsCart({ activeCurrency, shoppingCart }) {
  const [style, setStyle] = useState(' hidden');
  const items = Array.from(shoppingCart.cartItems);
  const total = `${activeCurrency}${calcSum(items, activeCurrency).toFixed(2)}`;

  return (
    <div className='header-cart'
      onMouseOver={()=>items.length > 0 ? setStyle(' open') : null}
      onMouseOut={()=>setStyle(' hidden')}
    >
      <Link to="/cart"
            className='cart_link'
      >
        <img  className='cart_link-img'
              alt='cart'
              title='Show my cart'
              src='../empty-cart.svg'>
        </img>
        {(items.length > 0) ?  <span className='cart_link-count'>{calcQty(items)}</span>: null}
      </Link>

      <div className={'mini-list'+style}>
        <p className='mini-list-title'>my bag, <span>{calcQty(items)} items</span></p>
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
  return {
    activeCurrency: state.activeCurrency,
    shoppingCart: state.shoppingCart,
  }
}

export default connect(mapStateToProps, null)(ActionsCart);
