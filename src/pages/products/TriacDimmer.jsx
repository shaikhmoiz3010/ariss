import React from 'react';
import ProductLayout from '../../components/product/ProductLayout';
import { products } from '../../data/productData';

const TriacDimmer = () => {
  return <ProductLayout product={products['triac-dimmer']} />;
};

export default TriacDimmer;