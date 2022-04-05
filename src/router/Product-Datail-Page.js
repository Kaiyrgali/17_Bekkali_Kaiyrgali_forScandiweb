import React from 'react';
import { useParams } from "react-router-dom";

import './Product-Datail-Page.scss'

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink, 
  from,
  useQuery,
  gql
} from "@apollo/client";

const GET_PRODUCT = gql`
query getProduct($id: String!) {
  product(id: $id) {
      id 
      name
      inStock
      gallery
      description
      attributes
      prices {
        currency {
          label
  				symbol
        }
  			amount
      }
      brand
      
    }
}

`;

function ProductDatailPage() {
  const idc  = useParams();
  console.log('id', idc);
  // console.log('id', idc.product);

  // const { error, loading, data } = useQuery(GET_PRODUCT, {
  //   variables: {
  //     idc,
  //   },
  // });

  return (
    <div>
     {idc.product}
    </div>
  );
}

export default ProductDatailPage;