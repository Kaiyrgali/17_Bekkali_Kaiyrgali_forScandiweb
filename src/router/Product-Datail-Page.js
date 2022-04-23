import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { itemAddedToCart } from '../redux/actions'

import Spinner from '../component/spinner';
import ErrorIndicator from '../component/error-indicator';
import './Product-Datail-Page.scss';

import {
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
};

function ProductDatailPage({activeCurrency, shoppingCart, addItemToCart}) {
  const { id }  = useParams();
  
  const addToCart = (item, currentAtr) => {
    const selected = document.querySelector('.selected');
    let atrToCart = false;
    if (currentAtr ==='') {atrToCart = 'none'};
    if (selected !== null) {
      atrToCart = selected.innerHTML;
    };
    if (atrToCart) {
      console.log(shoppingCart);
      const itemJson = JSON.stringify(item);
      const itemForMap = itemJson.substring(0, itemJson.length - 1)+`, "atr": "${atrToCart}"}`;    
      if (shoppingCart.has(itemForMap)) {
        shoppingCart.set(itemForMap, shoppingCart.get(itemForMap)+1)
        } else {shoppingCart.set(itemForMap, 1)
          }
      addItemToCart(shoppingCart)
    }
  }
    
  const [activePicture, setPicture] = useState();

  const { error, loading, data } = useQuery(GET_PRODUCT, {
    variables: {
      id,
    },
  });

  if (loading) return <Spinner />;
  if (error) return <ErrorIndicator />

    const mainsPicture = (activePicture) ? activePicture : data.product.gallery[0];
    const isAttributes = (data.product.attributes[0]===undefined);
    const currentAtr = isAttributes ? '' : data.product.attributes[0].name
   
    const price=data.product.prices.find(
      (index)=>index.currency.symbol === activeCurrency
      );
    console.log('price PDP > ', price);

    console.log(data.product.description);


    return (
      <div className="pdp-container">
        <div className='products-gallery'>
          {data.product.gallery.map((pictures) => (
            <button key={pictures} className='products-gallery-button' onClick={()=>setPicture(pictures)}>
              <img 
                src={pictures}
                alt='gallery'
                className='products-gallery-picture'
                title='close-up'
                >
              </img>
            </button>  
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
            <p className='products-attributes-name'>{currentAtr}</p>
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
            <p className='products-price-value'>{price.currency.symbol+''+price.amount.toFixed(2)}</p>
          </div>

          <button className='product-button'
                  onClick={()=>{addToCart(data.product, currentAtr)}}>
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

const mapStateToProps = (state) => {
  console.log ('state in Product-List-Card >', state);
  return {
    activeCurrency: state.activeCurrency,
    shoppingCart: state.shoppingCart.cartItems,
  }
}

const mapDispatchToProps = (dispatch) => ({
    addItemToCart: (newItem) => {
      dispatch(itemAddedToCart(newItem));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductDatailPage);