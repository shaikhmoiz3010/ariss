import React from 'react';
import ProductLayout from '../../components/product/ProductLayout';
import { products } from '../../data/productData';

const CurtainController = () => {
  return <ProductLayout product={products['curtain-controller']} />;
};

export default CurtainController;