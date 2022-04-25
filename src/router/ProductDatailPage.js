import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import { connect } from 'react-redux';
import { itemAddedToCart } from '../redux/actions'

import Spinner from '../component/Spinner';
import ErrorIndicator from '../component/ErrorIndicator';
import './ProductDatailPage.scss';

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
  const buttons = document.querySelectorAll('button.pdp-atr__value, button.pdp-atr__color');
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
    console.log('currentAtr >',currentAtr);

    console.log(data.product.description);


    return (
      <div className="pdp-container">
        <div className='pdp-gallery'>
          {data.product.gallery.map((pictures) => (
            <button key={pictures} className='pdp-gallery__btn' onClick={()=>setPicture(pictures)}>
              <img 
                src={pictures}
                alt='gallery'
                className='pdp-gallery__picture'
                title='close-up'
                >
              </img>
            </button>  
          ))}
        </div>

        <div className='pdp-picture'>
          <img src={mainsPicture} alt='main-picture' className='pdp-picture' title='close-up'>
          </img>
        </div>

        <div className='pdp-details'>
          <div className='pdp-title'>
            <p className='pdp-title__brand'>{data.product.brand}</p>
            <p className='pdp-title__name'>{data.product.name}</p>
          </div>
          
          <div className='pdp-atr'>
            <p className='pdp-atr__name'>{currentAtr}</p>
            <div>
              { currentAtr === 'Color' ? data.product.attributes[0].items.map((item) => (  
                <button className='pdp-atr__color'
                        key={item.value}
                        style={{backgroundColor: item.value}}
                        onClick={(e)=>addClass(e)}>
                  {item.value}
                </button>
              )) : '' 
              }
            </div>
            <div>
              {(isAttributes || currentAtr === 'Color') ? '' : data.product.attributes[0].items.map((item) => (  
                <button className='pdp-atr__value'
                        key={item.value}
                        onClick={(e)=>addClass(e)}>
                  {item.value}
                </button>
              ))}
            </div>
          </div>

          <div className='pdp-price'>
            <p className='pdp-price__title'>price:</p>
            <p className='pdp-price__value'>{price.currency.symbol+''+price.amount.toFixed(2)}</p>
          </div>

          <button className='pdp-button'
                  onClick={()=>{addToCart(data.product, currentAtr)}}>
            add to card
          </button>

          <div className='pdp-description'>
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