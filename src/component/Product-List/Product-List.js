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
      inStock
      gallery
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
}
`;


function ProductList({category}) {

  const { error, loading, data } = useQuery(CHANGE_RATES, {
    variables: {
      category,
    },
  });

  if (!data) {return <div>loading...</div>}

  return (
    <div className='product__list'>
      {data.category.products.map((product) => (  
      <ProductListCard key={product.id}
                       id={product.id}
                       name={product.brand+' '+product.name}
                       inStock={product.inStock}
                       picture={product.gallery[0]}
                       price={'$100'} />
                       
      ))}
      
    </div>  
  );
}

export default ProductList;