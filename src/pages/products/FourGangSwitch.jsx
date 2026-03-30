import React from 'react';
import ProductLayout from '../../components/product/ProductLayout';
import { products } from '../../data/productData';

const FourGangSwitch = () => {
  return <ProductLayout product={products['4-gang-switch']} />;
};

export default FourGangSwitch;