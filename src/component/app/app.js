import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import store from '../../redux/store';

// import {
//   ApolloClient,
//   InMemoryCache,
//   ApolloProvider,
//   HttpLink, 
//   from,
//   useQuery,
//   gql
// } from "@apollo/client";

import  { Category, CartPage, NoPage, ProductDatailPage } from '../../router';
import ErrorBoundry from '../error-boundry';
import Header from '../Header';

// const EXCHANGE_RATES = gql`
// query {categories {
//   name
//   products {
//     id
//     name
//     inStock
//     gallery
//     description
//     category
//     attributes {
//       id
//       name
//   		type
//   		items {
//         displayValue
//         value
//         id
//       }
//     }
//     prices {
//       amount
//     }
//     brand
//   }
// }
// }
// `;

function App() {
  // const { error, loading, data } = useQuery(EXCHANGE_RATES);
  // useEffect(()=>
  // console.log(loading, data), [data]); 

  return (
    <Provider store={store}>
      <ErrorBoundry>
        {/* <BookstoreServiceProvider value={bookstoreService}> */}
          <Router>
              <Header  />
              <Routes>
                <Route path="/" element={<Category />} />
                <Route path="/category/:category" element={<Category />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/details/:id" element={<ProductDatailPage />} />
                <Route path="*" element={<NoPage />} />
              </Routes>
          </Router>
        {/* </BookstoreServiceProvider> */}
      </ErrorBoundry>
    </Provider>
  );
}

export default App;