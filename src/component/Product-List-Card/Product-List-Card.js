import React from 'react';
import { Link } from 'react-router-dom';
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

const gotoLink = (urlDetails) => {
  console.log('link');
  <Link to={urlDetails}>
  </Link>
}

function ProductListCard({id, name, inStock, picture, price}) {

  const urlDetails = `/details/${id}`
  console.log('url', urlDetails);

  const pictureStyle = {
    backgroundImage: 'url(' + picture + ')',
  };

  const grayscale = (inStock) ? '' : ' outStock';
  // console.log ('grayscale', grayscale)
  return (
    // <section>
    <Link to={urlDetails} className='contents'>
      <div className={'product__list-card'+grayscale} >
        <div className='card-img' style={pictureStyle} alt="Product foto" title="##Descriptions##">
          <span className='out-text'>out of stock</span>
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
     
    </Link>
  );
}

export default ProductListCard;