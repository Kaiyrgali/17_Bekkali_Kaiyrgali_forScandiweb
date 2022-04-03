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

import './Product-List-Card.scss'

function ProductListCard({name, picture, price}) {
  return (
    <div className='product__list-card'>
      <img className='card-img' src={picture} alt="Product foto" title="##Descriptions##" ></img>
      <img className='card-cart' src='productCardCart.svg' alt="cart" title="Add to cart" ></img>
      <div className='card-content'>
        <p className='card-content-title'>{name}</p>
        <p className='card-content-price'>{price}</p>
      </div>
      
    </div>  
  );
}

export default ProductListCard;