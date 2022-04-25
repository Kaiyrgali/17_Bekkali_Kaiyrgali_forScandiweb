const setActiveCurrency = (state = { activeCurrency: '$' }, action) => {
  switch (action.type) {
    case 'SET_CURRENCY_ACTIVE':
      return action.payload;

    default:
      return state.activeCurrency;
  }
};

export default setActiveCurrency;
