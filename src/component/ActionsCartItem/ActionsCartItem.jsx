import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { itemAddedToCart } from '../../redux/actions';
import './ActionsCartItem.scss';

function ActionsCartItem({
  product, count, activeCurrency, shoppingCarts, addItemToCart,
}) {
  const item = JSON.parse(product);
  const price = item.prices.find(
    (index) => index.currency.symbol === activeCurrency,
  );
  const isAttributes = (item.attributes[0] === undefined);

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
    <div className="basket__item">

      <div className="basket__details">
        <p className="basket__brand">{item.brand}</p>
        <p className="basket__brand">{item.name}</p>
        <p className="basket__price">{`${price.currency.symbol}${price.amount.toFixed(2)}`}</p>
        {isAttributes ? ''
          : item.attributes[0].items.map((index) => (
            <button
              className={(item.attributes[0].name === 'Color' ? 'basket__color' : 'basket__atr') + (index.value === item.atr ? ' select' : '')}
              key={index.value}
              style={item.attributes[0].name === 'Color' ? { backgroundColor: index.value } : { backgroundColor: 'none' }}
            >
              {index.value}
            </button>
          ))}
      </div>

      <div className="basket__actions">
        <div className="basket__counting">
          <button
            className="basket__buttons"
            onClick={() => changeQty(1)}
          >
            <img className="basket__svg" src="../plus-square.svg" alt="plus" />
          </button>
          <p className="basket__number">{count}</p>
          <button
            className="basket__buttons"
            onClick={() => changeQty(-1)}
          >
            <img className="basket__svg" src="../minus-square.svg" alt="minus" />
          </button>
        </div>

        <div className="basket__gallery">
          <img src={item.gallery[0]} alt="main" className="basket__gallery" title="close-up" />
        </div>

      </div>
    </div>
  );
}

ActionsCartItem.propTypes = {
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

export default connect(null, mapDispatchToProps)(ActionsCartItem);
