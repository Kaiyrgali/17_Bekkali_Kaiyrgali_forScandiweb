const setActiveCurrency = (state={activeCurrency: '$'}, action) => {
  console.log ('before if', state)

  switch (action.type) {
    case 'SET_CURRENCY_ACTIVE':
      // console.log('setActiveCurrency', state.activeCurrency.activeCurrency, action.type);
      return ({
        activeCurrency: action.payload
      })
    default:
      return state
  }
}

export default setActiveCurrency;
