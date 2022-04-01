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


function HomePage() {
  return (
    <div>Home Page</div>  
  );
}

export default HomePage;