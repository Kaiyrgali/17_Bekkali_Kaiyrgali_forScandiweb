const updateShoppingCart = (state={
  shoppingCart: {
    cartItems: new Map(),
    itemsCount: 0,
    orderTotal: 0,
}},
  action) => {

    console.log('updateShoppingCart state >', state, action)
    switch (action.type) {
      case 'ITEM_ADDED_TO_CART':
        // return updateOrder(state, action.payload, 1);
        return {
          cartItems: action.payload,
          itemsCount: state.shoppingCart.itemsCount+1,
        };

      case 'ITEM_REMOVED_FROM_CART':
        return {
          cartItems: action.payload,
          itemsCount: state.shoppingCart.itemsCount-1,
        };


      default:
        return state.shoppingCart;
    }
};

export default updateShoppingCart;