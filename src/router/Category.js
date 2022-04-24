import React from 'react';
import { useParams } from "react-router-dom";
import Title from '../component/Title';
import ProductList from '../component/ProductList';

function Category() {
  const { category } = useParams();
  
  return (
    <div>
      <Title category={category}/>
      <ProductList category={category}/>
    </div>
  );
}

export default Category;