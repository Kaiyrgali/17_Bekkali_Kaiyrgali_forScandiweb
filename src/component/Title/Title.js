import React from 'react';

import './Title.scss'

function Title({category}) {
  const titleText = (!category) ? "Please choise a category" : category
  
  return (
    <h2 className='title'>{ titleText }</h2>
  );
}

export default Title;