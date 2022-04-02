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

import Title from '../component/Title';

function Category() {
  
  return (
    <Title />

  );
}

export default Category;