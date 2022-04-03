import React from 'react';
import { useEffect } from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink, 
  from,
  useQuery,
  gql
} from "@apollo/client";

import ProductListCard from '../Product-List-Card'
import './Product-List.scss'

const CHANGE_RATES = gql`
  query Category($category: String!) {
  category(input: { title: $category }) {
    products {
      id 
      name
      gallery
      prices {
        currency {
          label
  				symbol
        }
  			amount
      }
    }
}
}
`;


function ProductList({category}) {
  // console.log("category", category)
  const { error, loading, data } = useQuery(CHANGE_RATES, {
    variables: {
      category,
    },
  });
  useEffect(()=>
  console.log('category products', data), [loading]); 
  if(data) {
    console.log(data.category.products)
  }
  if (!data) {return <div>loading...</div>}

  return (
    <div className='product__list'>
      {data.category.products.map((product) => (  
      <ProductListCard key={product.id}
                       name={product.name}
                       picture={product.gallery[0]}
                       price={'$100'} />
      ))}
      
    </div>  
  );
}

export default ProductList;