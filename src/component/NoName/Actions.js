import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink, 
  from,
  useQuery,
  gql
} from "@apollo/client";

import './Navigation.scss'

function Navigation() {
  return (
    <div>Home Page</div>  
  );
}

export default Navigation;