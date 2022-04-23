import React from 'react';
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