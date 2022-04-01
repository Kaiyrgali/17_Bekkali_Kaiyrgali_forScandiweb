import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import App from './component/app';
import "./index.scss";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink, 
  from,
  useQuery,
  gql
} from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache()
});

ReactDOM.render(
  // <App />,  
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
      // <ExchangeRates />,
  document.querySelector('#root'),
);

