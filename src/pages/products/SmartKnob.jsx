import React from 'react';
import ProductLayout from '../../components/product/ProductLayout';
import { products } from '../../data/productData';

const SmartKnob = () => {
  return <ProductLayout product={products['smart-knob']} />;
};

export default SmartKnob;