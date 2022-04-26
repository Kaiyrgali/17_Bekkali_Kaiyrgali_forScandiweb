import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from '@apollo/client';
import './index.scss';
import App from './component/App';

const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
);
