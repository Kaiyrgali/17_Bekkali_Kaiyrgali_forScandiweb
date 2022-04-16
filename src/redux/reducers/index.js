import setActiveCurrency from './currency';
import updateShoppingCart from './shopping-cart';

const reducer = (state, action) => (
  {
  activeCurrency: setActiveCurrency(state),
  // shoppingCart: updateShoppingCart(state, action),
});

export default reducer;