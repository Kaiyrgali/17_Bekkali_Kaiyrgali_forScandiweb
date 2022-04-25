import React from 'react';
import ActionsCurrency from '../ActionsCurrency';
import ActionsCart from '../ActionsCart';

import './Actions.scss';

function Actions() {
  return (
    <div className="actions">
      <ActionsCurrency />
      <ActionsCart />
    </div>
  );
}

export default Actions;
