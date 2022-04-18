import React from 'react';
import { Link } from 'react-router-dom';
import ActionsCurrency from '../Actions-Currency';
import ActionsCart from '../Actions-Cart';

import './Actions.scss'

function Actions() {
  return (
    <div className='header__actions' > 
      <ActionsCurrency />
      <ActionsCart />
    </div>
  );
}

export default Actions;