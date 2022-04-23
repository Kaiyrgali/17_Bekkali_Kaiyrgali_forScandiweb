import setActiveCurrency from './currency';
import updateShoppingCart from './shopping-cart';

const reducer = (state, action) => {
  console.log('reducers >', state, action);
  return (
      {
      activeCurrency: setActiveCurrency(state, action),
      shoppingCart: updateShoppingCart(state, action),
    })
}d:


export default reducer;