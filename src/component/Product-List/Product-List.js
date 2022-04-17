import React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink, 
  from,
  useQuery,
  gql
} from "@apollo/client";

import ProductListCard from '../Product-List-Card';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import './Product-List.scss';

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


function ProductList({category, activeCurrency}) {

  console.log('activeCurrency PL >', activeCurrency);

  const { error, loading, data } = useQuery(CHANGE_RATES, {
    variables: {
      category,
    },
  });

  if (loading) return <Spinner />;
  if (error) {
    console.log('error');
    return <ErrorIndicator />}
  if (data) {console.log(data.category.products)}

  return (
    <div className='product__list'>
      {data.category.products.map((product) => {
        const price=product.prices.find(
          (index)=>index.currency.symbol === activeCurrency
          );
        return (
          <ProductListCard key={product.id}
          id={product.id}
          name={product.brand+' '+product.name}
          inStock={product.inStock}
          picture={product.gallery[0]}
          price={price.currency.symbol+price.amount.toFixed(2)} />
        )
      })}
    </div>  
  );
}


const mapStateToProps = (state) => {
  console.log ('state in Product-List-Card >', state);
  return {
    activeCurrency: state.activeCurrency,
  }
}

export default connect(mapStateToProps, null)(ProductList);

// export default ProductList;