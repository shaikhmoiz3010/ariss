import React from 'react';
import ProductLayout from '../../components/product/ProductLayout';
import { products } from '../../data/productData';

const SmartDriverCC = () => {
  return <ProductLayout product={products['smart-driver-cc']} />;
};

export default SmartDriverCC;