import React from 'react';
import { Link } from 'react-router-dom';
import ActionsCurrency from '../Actions-Currency';

import './Actions.scss'

function Actions() {
  return (
    <div className='header__actions' > 
    {/* разделить на разныеэлементы можно еще */}
      <ActionsCurrency />
      <Link to="/" className='cart=link'>
        <img width="20" alt="cart" title="Show my cart" className='img-svg cart' src="../empty-cart.svg"></img>
      </Link>

    </div>
  );
}

export default Actions;