import React from 'react';
import { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setCurrencyActive } from '../../redux/actions';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink, 
  from,
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


// const getActiveCurrency = (data, activeCurrency) => {
//   if (!activeCurrency) { return activeCurrency=data.currencies[0].symbol}
//   activeCurrency = symbol;
//   console.log('activeCurrency', activeCurrency)
//   return activeCurrency;
//   // else { activeCurrency=data.currencies[0].symbol }
// }





// const openCurrencyList = () => {
//   if (!isOpen) {isOpen=true : isOpen =false
// }

function ActionsCurrency ({ localCurrency, changeActiveCurrency }) {
  console.log('localCurrency >', localCurrency);
  // console.log('changeActiveCurrency >', changeActiveCurrency);
  
  const [listStyle, setStyle] = useState('hidden');

  // const [activeCurrency, setCurrency] = useState('$'); // переделать на диспатч

  const changeCurrency = (symbol) => {
    setStyle(listStyle=>'hidden');
    changeActiveCurrency(symbol)// setCurrency(activeCurrency => symbol); // переделать на диспатч
    
       }

  const changeListStyle = () => {
    if (listStyle === 'hidden') {
      setStyle(listStyle=>'show');
    } else {setStyle(listStyle=>'hidden')}
    // console.log(listStyle)
  } //попробовать заменить на тоггле

  const { error, loading, data } = useQuery(GET_CURRENCIES);
  if (loading) {return <div>loading...</div> };
  console.log(data);
  // getActiveCurrency(data);
 

  return (
  
    <div>
            
      <div className='img-svg'
            title="Change currency"
            onClick={changeListStyle} 
      >
        <span className='currency'>{localCurrency}</span>
        <img className='img-svg' src = { (listStyle === 'hidden') ? arrowDown : arrowUp } alt="change"></img>
      </div>

      <div className={listStyle}>
        {data.currencies.map((currency) => 
        <ActionsCurrencyItem key={currency.symbol}
                            label={currency.label}
                            symbol={currency.symbol}
                            changeCurrency={changeCurrency}
                            // changeCurrency={changeCurrency}
                            // getActiveCurrency={getActiveCurrency}
                            // setCurrency={setCurrency}
                             />
        )}
      </div>
    </div>
  
  );
}

const mapStateToProps = ({ activeCurrency } ) => {
  console.log ('state mapStateToProps >', activeCurrency.activeCurrency);
  return {
    localCurrency: activeCurrency.activeCurrency,
  }
}

const mapDispatchToProps = (dispatch) => ({
  changeActiveCurrency: (newCurrency) => {
    // const action = {type: 'SET_CURRENCY_ACTIVE'}
    // console.log('dispatch currency', newCurrency);
    dispatch(setCurrencyActive(newCurrency));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ActionsCurrency);