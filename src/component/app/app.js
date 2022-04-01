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

import  { HomePage, CartPage } from '../../router';
import ErrorBoundry from '../error-boundry';

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
          <main role="main" className="container">
            {/* <ShopHeader numItems={5} total={210} /> */}
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="cart" element={<CartPage />} />
            </Routes>
          </main>
        </Router>
      {/* </BookstoreServiceProvider> */}
    </ErrorBoundry>
  );
}

export default App;