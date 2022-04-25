import setActiveCurrency from './currency';
import updateShoppingCart from './shopping-cart';

const reducer = (state, action) => {
  return (
    {
      activeCurrency: setActiveCurrency(state, action),
      shoppingCart: updateShoppingCart(state, action),
    });
};

export default reducer;
