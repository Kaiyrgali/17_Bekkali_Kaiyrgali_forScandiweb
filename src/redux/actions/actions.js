export const setCurrencyActive = (newCurrency) => ({
  type: 'SET_CURRENCY_ACTIVE',
  payload: newCurrency,
})

////////////////////////////
export const itemAddedToCart = (itemToCart) => ({
  type: 'ITEM_ADDED_TO_CART',
  payload: itemToCart,
});

export const itemRemovedFromCart = (itemFromCart) => ({
  type: 'ITEM_REMOVED_FROM_CART',
  payload: itemFromCart,
});

// export const allBooksRemovedFromCart = (bookId) => ({
//   type: 'ALL_BOOKS_REMOVED_FROM_CART',
//   payload: bookId,
// });
