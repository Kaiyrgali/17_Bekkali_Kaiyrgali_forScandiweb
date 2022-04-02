import React, { useState } from 'react';
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

import NavigationItem from '../Navigation-Item';

import './Navigation.scss'

// const CATEGORY_NAMES = gql`
//   query Categ($nameActive: String!) {
//     categories (nameActive: $nameActive) {
//       name 
//     }
//   }
// `;

const CATEGORY_NAMES = gql`
  query { categories {
      name 
    }
  }
`;

function Navigation(onCategory) {
  const { error, loading, data } = useQuery(CATEGORY_NAMES);
  // console.log(nameActive);

  
  
  if (loading) {return <div>loading...</div>}
  console.log('data', data);
  return (
    <nav className = "header__navigation">
      { data.categories.map((category) => (
        <NavigationItem
          key={category.name}
          name={category.name}
                   
        />
      ))}
    </nav>  
  );
}

export default Navigation;