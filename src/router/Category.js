import React from 'react';
import { useParams } from "react-router-dom";
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
  const { category } = useParams();
  console.log( category );
  
  return (
    <Title name={category}/>

  );
}

export default Category;