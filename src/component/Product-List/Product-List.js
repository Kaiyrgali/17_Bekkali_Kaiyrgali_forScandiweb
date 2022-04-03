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

import ProductListCard from '../Product-List-Card'
import './Product-List.scss'

const EXCHANGE_RATES = gql`
query {categories {
  name
  products {
    id
    name
    inStock
    gallery
    description
    category
    attributes {
      id
      name
  		type
  		items {
        displayValue
        value
        id
      }
    }
    prices {
      amount
    }
    brand
  }
}
}
`;

function ProductList(category) {
  console.log("category", category)
  const { error, loading, data } = useQuery(EXCHANGE_RATES);
  // useEffect(()=>
  // console.log(loading, data), [data]); 

  return (
    <div className='product__list'>
      <ProductListCard />
    </div>  
  );
}

export default ProductList;