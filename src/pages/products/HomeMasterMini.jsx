import React from 'react';
import ProductLayout from '../../components/product/ProductLayout';
import { products } from '../../data/productData';

const HomeMasterMini = () => {
  return <ProductLayout product={products['home-master-mini']} />;
};

export default HomeMasterMini;