import React from 'react';
import ProductLayout from '../../components/product/ProductLayout';
import { products } from '../../data/productData';

const TheButton = () => {
  return <ProductLayout product={products['the-button']} />;
};

export default TheButton;