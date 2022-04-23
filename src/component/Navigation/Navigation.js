import React, { useState } from 'react';
import {
  useQuery,
  gql
} from "@apollo/client";

import NavigationItem from '../Navigation-Item';

import './Navigation.scss'


const CATEGORY_NAMES = gql`
  query { categories {
      name 
    }
  }
`;

function Navigation(onCategory) {
  const { error, loading, data } = useQuery(CATEGORY_NAMES);
  
  if (loading) {return <div>loading...</div>};

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