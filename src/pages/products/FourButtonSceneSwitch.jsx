import React from 'react';
import ProductLayout from '../../components/product/ProductLayout';
import { products } from '../../data/productData';

const FourButtonSceneSwitch = () => {
  return <ProductLayout product={products['4-button-scene-switch']} />;
};

export default FourButtonSceneSwitch;