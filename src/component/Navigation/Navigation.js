import React from 'react';
import { Link } from 'react-router-dom';
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
    <nav className = "header__navigation">
      <Link to="/">
        WOMEN
      </Link>
      <Link to="/">
        MEN
      </Link>
      <Link to="/">
        KIDS
      </Link>
    </nav>  
  );
}

export default Navigation;