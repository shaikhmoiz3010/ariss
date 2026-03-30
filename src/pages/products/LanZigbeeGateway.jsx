import React from 'react';
import ProductLayout from '../../components/product/ProductLayout';
import { products } from '../../data/productData';

const LanZigbeeGateway = () => {
  return <ProductLayout product={products['lan-zigbee-gateway']} />;
};

export default LanZigbeeGateway;