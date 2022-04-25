import React from 'react';
import {
  useQuery,
  gql,
} from '@apollo/client';

import NavigationItem from '../NavigationItem';

import './Navigation.scss';

const CATEGORY_NAMES = gql`
  query { categories {
      name 
    }
  }
`;

function Navigation() {
  const { error, loading, data } = useQuery(CATEGORY_NAMES);

  if (loading) { return <div>loading...</div>; }

  return (
    <nav className="navigation">
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
