import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import CartListItem from '../component/CartListItem';
import { calcSum, calcQty } from '../units';

import './CartPage.scss';

function CartPage({ activeCurrency, shoppingCart }) {
  const items = Array.from(shoppingCart.cartItems);
  const style = items.length > 0 ? '' : ' hidden';
  const total = `${calcQty(items)} items for ${activeCurrency}${calcSum(items, activeCurrency).toFixed(2)}`;

  return (
    <div>
      <p className="cart-title">cart</p>
      <div className="cart-list">
        {(items.length > 0)
          ? items.map((item) => (
            <CartListItem
              key={item}
              product={item[0]}
              count={item[1]}
              activeCurrency={activeCurrency}
              shoppingCart={shoppingCart.cartItems}
            />
          ))
          : <div><p>Your card is empty</p></div>}
      </div>

      <div className="cart-total">
        <p className="cart-total-text">
          total:
          {total}
        </p>
        <Link to="#">
          <button className={`cart-total-check${style}`}>check out</button>
        </Link>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  activeCurrency: state.activeCurrency,
  shoppingCart: state.shoppingCart,
});

export default connect(mapStateToProps, null)(CartPage);
