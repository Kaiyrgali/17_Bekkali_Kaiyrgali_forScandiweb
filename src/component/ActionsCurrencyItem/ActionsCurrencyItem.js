import React from 'react';

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

export default ActionsCurrencyItem;
