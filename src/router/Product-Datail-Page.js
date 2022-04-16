import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import { useEffect } from 'react';

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
query Product($id: String!)
{product(id: $id) {
  id
    name
    inStock
    gallery 
    description
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

const addClass = (e) => {
  const buttons = document.querySelectorAll('.products-attributes-value');
  buttons.forEach(element => {
    element.classList.remove('selected')
  });
  e.target.classList.add('selected');
}

function ProductDatailPage() {
  const { id }  = useParams();
  console.log('id', id);

  const { error, loading, data } = useQuery(GET_PRODUCT, {
    variables: {
      id,
    },
  });
  useEffect(()=>
  console.log('data.product', data), [data]); 

  const [activePicture, setPicture] = useState();
  if(data) {
    const mainsPicture = (activePicture) ? activePicture : data.product.gallery[0];
    const isAttributes = (data.product.attributes[0]===undefined);

    console.log(data.product.description);
    return (
      <div className="pdp-container">
        {/* {id} */}

        <div className='products-pictures'>
          {data.product.gallery.map((pictures) => (  
            <img 
              key={pictures}
              src={pictures}
              alt='gallery'
              className='pdp-gallery'
              title='close-up'
              onClick={()=>setPicture(pictures)}>
            </img>
          ))}
        </div>

        <div className='products-main-picture'>
          <img src={mainsPicture} alt='main-picture' className='products-main-picture' title='close-up'>
          </img>
        </div>

        <div className='product-details'>
          <div className='products-title'>
            <p className='products-title-brand'>{data.product.brand}</p>
            <p className='products-title-name'>{data.product.name}</p>
          </div>
          
          <div className='products-attributes'>
            <p className='products-attributes-name'>{ isAttributes ? '' : data.product.attributes[0].name}</p>
            {isAttributes ? '' : data.product.attributes[0].items.map((item) => (  
            <button className='products-attributes-value'
                    key={item.value}
                    onClick={(e)=>addClass(e)}>
              {item.value}
            </button>
          ))}
          </div>

          <div className='products-price'>
            <p className='products-price-title'>price:</p>
            <p className='products-price-value'>{data.product.prices[0].currency.symbol+''+data.product.prices[0].amount}</p>
          </div>

          <button className='product-button'>
            add to card
          </button>

          <div className='product-description'>
            <p>
              {data.product.description.replace(/<\/?[a-zA-Z0-9]+>/gi,'')} 
            </p>
          </div>

        </div>
      </div>
    );
}
}

export default ProductDatailPage;