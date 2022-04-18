const setActiveCurrency = (state={activeCurrency: '$'}, action) => {
  // console.log ('before if', state)
  switch (action.type) {
    case 'SET_CURRENCY_ACTIVE':
      console.log(state, action.type)
      return action.payload;

    default:
      return state.activeCurrency
  }
}

export default setActiveCurrency;
