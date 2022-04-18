const updateShoppingCart = (state={
  shoppingCart: {
    cartItems: [],
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
          orderTotal: state.shoppingCart.orderTotal+100,
        };

      case 'ITEM_REMOVED_FROM_CART':
        return {
          cartItems: [],
          itemsCount: itemsCount-1,
          orderTotal: orderTotal-100,
        };
        // return updateOrder(state, action.payload, -1);

      // case 'ALL_BOOKS_REMOVED_FROM_CART':
      //   const item = state.shoppingCart.cartItems.find(({ id }) => id === action.payload);
      //   return updateOrder(state, action.payload, -item.count);

      default:
        return state.shoppingCart;
    }
};

export default updateShoppingCart;