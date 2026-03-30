import React from 'react';
import ProductLayout from '../../components/product/ProductLayout';
import { products } from '../../data/productData';

const BleZigbeeGateway = () => {
  return <ProductLayout product={products['ble-zigbee-gateway']} />;
};

export default BleZigbeeGateway;