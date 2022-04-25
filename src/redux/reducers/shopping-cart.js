const updateShoppingCart = (
  state = {
    shoppingCart: {
      cartItems: new Map(),
    },
  },
  action,
) => {
  switch (action.type) {
    case 'ITEM_ADDED_TO_CART':
      return {
        cartItems: action.payload,
      };

    default:
      return state.shoppingCart;
  }
};

export default updateShoppingCart;
