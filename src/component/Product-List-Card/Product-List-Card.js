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

function ProductListCard({name, inStock, picture, price}) {
  const pictureStyle = {
    backgroundImage: 'url(' + picture + ')',
  };
  const bottomStyle = {
    backgroundImage: 'url(' + '"../productCardCart.svg"' + ')',
  };
  const grayscale = (inStock) ? 'product__list-card inStock' : 'product__list-card';
  console.log ('grayscale', grayscale)
  return (
    <div className={grayscale}>
      <div className='card-img' style={pictureStyle} alt="Product foto" title="##Descriptions##">
        {/* <img  src={picture} alt="Product foto" title="##Descriptions##" ></img> */}
      </div>
      {/* <button>  */}
        <img  className='card-cart' src='../productCardCart.svg' alt="cart" title="Add to cart" ></img>
      {/* </button> */}
      <div className='card-content'>
        <p className='card-content-title'>{name}</p>
        <p className='card-content-price'>{price}</p>
      </div>  
    </div>  
  );
}

export default ProductListCard;