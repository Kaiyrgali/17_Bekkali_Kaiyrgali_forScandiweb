import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  useQuery,
  gql,
} from '@apollo/client';
import { setCurrencyActive } from '../../redux/actions';

import ActionsCurrencyItem from '../ActionsCurrencyItem';

import './ActionsCurrency.scss';

const arrowDown = '../change-currency.svg';
const arrowUp = '../change-currency-up.svg';

const GET_CURRENCIES = gql`
query { currencies {
  label
 symbol 
}
}
`;

function ActionsCurrency({ localCurrency, changeActiveCurrency }) {
  const [listStyle, setStyle] = useState('hidden');

  const changeCurrency = (symbol) => {
    setStyle('hidden');
    changeActiveCurrency(symbol);
  };

  const changeListStyle = () => {
    if (listStyle === 'hidden') {
      setStyle('show');
    } else { setStyle('hidden'); }
  };

  const { error, loading, data } = useQuery(GET_CURRENCIES);
  if (loading) { return <div>loading...</div>; }

  return (

    <div>
      <div
        className="currency"
        title="Change currency"
        onClick={changeListStyle}
      >
        <span className="currency">{localCurrency}</span>
        <img src={(listStyle === 'hidden') ? arrowDown : arrowUp} alt="change" />
      </div>

      <div className={listStyle}>
        {data.currencies.map((currency) => (
          <ActionsCurrencyItem
            key={currency.symbol}
            label={currency.label}
            symbol={currency.symbol}
            changeCurrency={changeCurrency}
          />
        ))}
      </div>
    </div>

  );
}

const mapStateToProps = (state) => ({
  localCurrency: state.activeCurrency,
});

const mapDispatchToProps = (dispatch) => ({
  changeActiveCurrency: (newCurrency) => {
    dispatch(setCurrencyActive(newCurrency));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ActionsCurrency);
