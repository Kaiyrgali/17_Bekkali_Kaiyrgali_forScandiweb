import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { calcSum, calcQty } from '../../units';
import ActionsCartItem from '../ActionsCartItem';
import './ActionsCart.scss';

function ActionsCart({ activeCurrency, shoppingCart }) {
  const [style, setStyle] = useState(' hidden');
  const items = Array.from(shoppingCart.cartItems);
  const total = `${activeCurrency}${calcSum(items, activeCurrency).toFixed(2)}`;

  return (
    <div
      className="basket"
      onMouseOver={() => (items.length > 0 ? setStyle(' open') : null)}
      onMouseOut={() => setStyle(' hidden')}
    >
      <Link
        to="/cart"
        className="basket__link"
      >
        <img
          className="basket__img"
          alt="cart"
          title="Show my cart"
          src="../empty-cart.svg"
        />
        {(items.length > 0) ? <span className="basket__count">{calcQty(items)}</span> : null}
      </Link>

      <div className={`basket__list${style}`}>
        <p className="basket__title">
          my bag,
          <span>
            {calcQty(items)}
            {' '}
            items
          </span>
        </p>
        <div className="">
          {(items.length > 0)
            ? items.map((item) => (
              <ActionsCartItem
                key={item}
                product={item[0]}
                count={item[1]}
                activeCurrency={activeCurrency}
                shoppingCarts={shoppingCart.cartItems}
              />
            ))
            : null}
        </div>

        <div className="basket__total">
          <p>total</p>
          <p className="basket__text">{total}</p>
        </div>

        <div className="basket__btns">
          <Link to="/cart">
            <button className="basket__view">
              view bag
            </button>
          </Link>

          <Link to="#">
            <button className="basket__check">check out</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

ActionsCart.propTypes = {
  activeCurrency: PropTypes.string.isRequired,
  shoppingCart: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  activeCurrency: state.activeCurrency,
  shoppingCart: state.shoppingCart,
});

export default connect(mapStateToProps, null)(ActionsCart);
