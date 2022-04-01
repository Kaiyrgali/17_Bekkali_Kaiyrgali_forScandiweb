import React from 'react';
import { Link } from 'react-router-dom';

import './Actions.scss'

function Actions() {
  return (
    <div className='header__actions'> 
    {/* разделить на разныеэлементы можно еще */}
      <div className='img-svg'>
        <span className='currency'>$</span>
        <img src='change-currency.svg'></img>
      </div>
  
      <Link to="/" >
        <img width="20" alt="cart" title="Show my cart" className='img-svg cart' src="empty-cart.svg"></img>
      </Link>

    </div>
  );
}

export default Actions;