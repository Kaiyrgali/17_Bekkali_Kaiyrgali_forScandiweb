import React from 'react';
import { useState } from 'react';

import './Actions-Currency-Item.scss'


function ActionsCurrencyItem( { label, symbol, changeCurrency}  ) {
  console.log(label, symbol);
  return (
  <div className='currency-item'
        onClick = {()=>changeCurrency(symbol)}
        >
    {symbol} {label}
  </div>
  );
}

export default ActionsCurrencyItem;