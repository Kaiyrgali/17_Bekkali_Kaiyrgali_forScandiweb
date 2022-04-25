import React from 'react';
import { connect } from 'react-redux';

import {
  useQuery,
  gql,
} from '@apollo/client';

import ProductListCard from '../ProductListCard';
import Spinner from '../Spinner';
import ErrorIndicator from '../ErrorIndicator';
import './ProductList.scss';

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

function ProductList({ category, activeCurrency }) {
  const { error, loading, data } = useQuery(CHANGE_RATES, {
    variables: {
      category,
    },
  });

  if (loading) return <Spinner />;
  if (error && category === undefined) return null;
  if (error) return <ErrorIndicator />;

  return (
    <div className="products">
      {data.category.products.map((product) => {
        const price = product.prices.find(
          (index) => index.currency.symbol === activeCurrency,
        );
        return (
          <ProductListCard
            key={product.id}
            id={product.id}
            name={`${product.brand} ${product.name}`}
            inStock={product.inStock}
            picture={product.gallery[0]}
            price={price.currency.symbol + price.amount.toFixed(2)}
          />
        );
      })}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    activeCurrency: state.activeCurrency,
  };
};

export default connect(mapStateToProps, null)(ProductList);
