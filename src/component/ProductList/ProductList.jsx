import React from 'react';
import PropTypes from 'prop-types';
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
  if (!category) return null;
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

ProductList.propTypes = {
  category: PropTypes.string,
  activeCurrency: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => {
  return {
    activeCurrency: state.activeCurrency,
  };
};

export default connect(mapStateToProps, null)(ProductList);
