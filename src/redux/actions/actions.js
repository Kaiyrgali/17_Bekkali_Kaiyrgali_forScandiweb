export const setCurrencyActive = (newCurrency) => ({
  type: 'SET_CURRENCY_ACTIVE',
  payload: newCurrency,
})

////////////////////////////
export const itemAddedToCart = (itemToCart) => ({
  type: 'ITEM_ADDED_TO_CART',
  payload: itemToCart,
});
