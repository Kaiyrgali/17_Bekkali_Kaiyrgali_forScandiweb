import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import store from '../../redux/store';
import {
  Category, CartPage, NoPage, ProductDetailsPage,
} from '../../router';
import ErrorBoundary from '../ErrorBoundary';
import Header from '../Header';

import './App.scss';

function App() {
  return (
    <Provider store={store}>
      <ErrorBoundary>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Category />} />
            <Route path="/category/:category" element={<Category />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/details/:id" element={<ProductDetailsPage />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </Router>
      </ErrorBoundary>
    </Provider>
  );
}

export default App;
