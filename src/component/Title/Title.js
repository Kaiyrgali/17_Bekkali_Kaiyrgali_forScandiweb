import React from 'react';

import './Title.scss'

function Title(category) {
  console.log(category);
  const titleText = (!category.name) ? "Category name" : category.name
  return (
    <h2 className='title'>{ titleText }</h2>
  );
}

export default Title;