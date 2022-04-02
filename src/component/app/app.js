import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink, 
  from,
  useQuery,
  gql
} from "@apollo/client";

import  { Category, CartPage } from '../../router';
import ErrorBoundry from '../error-boundry';
import Header from '../Header';

const EXCHANGE_RATES = gql`
query {categories {
  name
  products {
    id
    name
    inStock
    gallery
    description
    category
    attributes {
      id
      name
  		type
  		items {
        displayValue
        value
        id
      }
    }
    prices {
      amount
    }
    brand
  }
}
}
`;

function App() {
  const { error, loading, data } = useQuery(EXCHANGE_RATES);
  useEffect(()=>
  console.log(loading, data), [data]); 

  return (
    <ErrorBoundry>
      {/* <BookstoreServiceProvider value={bookstoreService}> */}
        <Router>
            <Header  />
            <Routes>
              <Route path="/" element={<Category />} />
              <Route path="/cart" element={<CartPage />} />
            </Routes>
        </Router>
      {/* </BookstoreServiceProvider> */}
    </ErrorBoundry>
  );
}

export default App;