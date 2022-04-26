import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { itemAddedToCart } from '../../redux/actions';
import './CartListItem.scss';

function CartListItem({
  product, count, activeCurrency, shoppingCarts, addItemToCart,
}) {
  const item = JSON.parse(product);
  const price = item.prices.find(
    (index) => index.currency.symbol === activeCurrency,
  );
  const [activePicture, setPicture] = useState(0);
  const hasAttributes = (item.attributes[0] === undefined);

  const changeQty = (act) => {
    const newCount = shoppingCarts.get(product) + act;
    const cartClone = new Map(shoppingCarts);
    if (newCount === 0) {
      cartClone.delete(product);
    } else {
      cartClone.set(product, newCount);
    }
    addItemToCart(cartClone);
  };

  return (
    <div className="cp-item">
      <div className="cp-details">
        <div className="cp-title">
          <p className="cp-title__brand">{item.brand}</p>
          <p className="cp-title__name">{item.name}</p>
        </div>
        <div className="pdp-price">
          <p className="pdp-price__value">{`${price.currency.symbol}${price.amount.toFixed(2)}`}</p>
        </div>
        <div className="cp-atr">

          {hasAttributes ? ''
            : item.attributes[0].items.map((index) => (
              <button
                className={(item.attributes[0].name === 'Color' ? 'cp-atr__color' : 'pdp-atr__value') + (index.value === item.atr ? ' selected' : '')}
                key={index.value}
                style={item.attributes[0].name === 'Color' ? { backgroundColor: index.value } : { backgroundColor: 'none' }}
              >
                {index.value}
              </button>
            ))}
        </div>
      </div>

      <div className="cp-actions">
        <div className="cp-counting">
          <button
            className="cart-count__btn"
            onClick={() => changeQty(1)}
          >
            <img className="cart-count__img" src="../plus-square.svg" alt="plus" />
          </button>
          <p className="cart-count-number">{count}</p>
          <button
            className="cart-count__btn"
            onClick={() => changeQty(-1)}
          >
            <img className="cart-count__img" src="../minus-square.svg" alt="minus" />
          </button>
        </div>

        <div className="cp-gallery">
          <img
            src={item.gallery[activePicture]}
            alt="gallery"
            className="cp-gallery__img"
            title="close-up"
          />
          <div className="cp-chevron">
            <button
              className="cp-chevron__left"
              onClick={
                () => setPicture(activePicture === 0 ? item.gallery.length - 1 : activePicture - 1)
              }
            >
              <img
                src="../chevron-left.svg"
                className="chevron"
                alt="left"
                title="left"
              />
            </button>

            <button
              className="cp-chevron__right"
              onClick={
                () => setPicture(activePicture === item.gallery.length - 1 ? 0 : activePicture + 1)
              }
            >
              <img
                src="../chevron-right.svg"
                className="chevron"
                alt="right"
                title="right"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

CartListItem.propTypes = {
  product: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  activeCurrency: PropTypes.string.isRequired,
  shoppingCarts: PropTypes.object.isRequired,
  addItemToCart: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  addItemToCart: (newItem) => {
    dispatch(itemAddedToCart(newItem));
  },
});

export default connect(null, mapDispatchToProps)(CartListItem);
