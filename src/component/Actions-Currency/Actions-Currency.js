import React from 'react';
import { useState } from 'react';
import { connect } from 'react-redux';
import { setCurrencyActive } from '../../redux/actions';

import {
  useQuery,
  gql
} from "@apollo/client";

import ActionsCurrencyItem from '../Actions-Currency-Item';

import './Actions-Currency.scss'

const arrowDown = '../change-currency.svg';
const arrowUp = '../change-currency-up.svg';


const GET_CURRENCIES = gql`
query { currencies {
  label
 symbol 
}
}
`;

function ActionsCurrency ({ localCurrency, changeActiveCurrency }) {
  
  const [listStyle, setStyle] = useState('hidden');

  const changeCurrency = (symbol) => {
    setStyle('hidden');
    changeActiveCurrency(symbol)
  }

  const changeListStyle = () => {
    if (listStyle === 'hidden') {
      setStyle('show');
    } else {setStyle('hidden')}
  } //попробовать заменить на тоггле

  const { error, loading, data } = useQuery(GET_CURRENCIES);
  if (loading) {return <div>loading...</div> };

  return (
  
    <div>
            
      <div className='img-svg'
            title="Change currency"
            onClick={changeListStyle} 
      >
        <span className='currency'>{localCurrency}</span>
        <img src = { (listStyle === 'hidden') ? arrowDown : arrowUp } alt="change"></img>
      </div>

      <div className={listStyle}>
        {data.currencies.map((currency) => 
        <ActionsCurrencyItem key={currency.symbol}
                            label={currency.label}
                            symbol={currency.symbol}
                            changeCurrency={changeCurrency}
        />
        )}
      </div>
    </div>
  
  );
}

const mapStateToProps = ( state ) => {
  // console.log ('state mapStateToProps >', state);
  return {
    localCurrency: state.activeCurrency,
  }
}

const mapDispatchToProps = (dispatch) => ({
  changeActiveCurrency: (newCurrency) => {
    dispatch(setCurrencyActive(newCurrency));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ActionsCurrency);