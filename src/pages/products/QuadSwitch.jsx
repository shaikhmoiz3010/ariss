import React from 'react';
import ProductLayout from '../../components/product/ProductLayout';
import { products } from '../../data/productData';

const QuadSwitch = () => {
  return <ProductLayout product={products['quad-switch']} />;
};

export default QuadSwitch;