import React from 'react';
import ProductLayout from '../../components/product/ProductLayout';
import { products } from '../../data/productData';

const SmartIrBlaster = () => {
  return <ProductLayout product={products['smart-ir-blaster']} />;
};

export default SmartIrBlaster;