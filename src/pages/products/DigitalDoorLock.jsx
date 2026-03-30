import React from 'react';
import ProductLayout from '../../components/product/ProductLayout';
import { products } from '../../data/productData';

const DigitalDoorLock = () => {
  return <ProductLayout product={products['digital-door-lock']} />;
};

export default DigitalDoorLock;