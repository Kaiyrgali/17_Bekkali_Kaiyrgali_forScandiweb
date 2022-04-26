import React from 'react';
import PropTypes from 'prop-types';
import './ActionsCurrencyItem.scss';

function ActionsCurrencyItem({ label, symbol, changeCurrency }) {
  return (
    <div
      className="currency__item"
      onClick={() => changeCurrency(symbol)}
    >
      {symbol}
      {' '}
      {label}
    </div>
  );
}

ActionsCurrencyItem.propTypes = {
  label: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
  changeCurrency: PropTypes.func.isRequired,
};

export default ActionsCurrencyItem;
