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
import ProductList from '../component/Product-List';

function Category() {
  const { category } = useParams();
  // console.log( category );
  
  return (
    <div>
      <Title category={category}/>
      <ProductList category={category}/>
    </div>
  );
}

export default Category;