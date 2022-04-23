import React from 'react';
import { Link } from 'react-router-dom';

import './Product-List-Card.scss'

function ProductListCard({id, name, inStock, picture, price}) {
  const pictureStyle = {
    backgroundImage: 'url(' + picture + ')',
  };
  const grayscale = (inStock) ? '' : ' outStock';
  const urlDetails = (inStock) ? `/details/${id}` : '#'

  return (
    <Link to={urlDetails} className='contents'>
      <div className={'product__list-card'+grayscale} >
        <div className='card-img' style={pictureStyle} alt="Product foto" title="##Descriptions##">
          <span className='out-text'>out of stock</span>
        </div>
          <img  className='card-cart' src='../productCardCart.svg' alt="cart"></img>
        <div className='card-content'>
          <p className='card-content-title'>{name}</p>
          <p className='card-content-price'>{price}</p>
        </div>  
      </div>
    </Link>
  );
}

export default ProductListCard;