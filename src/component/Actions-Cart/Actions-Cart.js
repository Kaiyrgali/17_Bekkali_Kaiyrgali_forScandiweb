import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


import './Actions-Cart.scss'

function ActionsCart({itemsCount}) {
  console.log('ActionCart', itemsCount);
  return (
    <Link to="/cart" className='cart_link'>
      <img className='cart_link-img' width="20" alt="cart" title="Show my cart" src="../empty-cart.svg"></img>
      {(itemsCount>0) ?  <span className='cart_link-count'>{itemsCount}</span>: ''}
     
    </Link>
  );
}

const mapStateToProps = (state) => {
  // console.log ('state in Product-List-Card >', state);
  return {
    itemsCount: state.shoppingCart.itemsCount,
  }
}


export default connect(mapStateToProps, null)(ActionsCart);

// export default ActionsCart;