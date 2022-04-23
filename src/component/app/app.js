import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import store from '../../redux/store';
import  { Category, CartPage, NoPage, ProductDatailPage } from '../../router';
import ErrorBoundry from '../error-boundry';
import Header from '../Header';

import './app.scss';

function App() {

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