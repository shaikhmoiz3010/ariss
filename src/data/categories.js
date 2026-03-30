export const categories = [
  { label: 'All', filter: null },
  { label: 'Switches', filter: ['double-switch', '4-gang-switch', 'quad-switch', 'quad-pro-switch'] },
  { label: 'Lighting', filter: ['triac-dimmer', 'smart-driver-cc', 'smart-driver-cv'] },
  { label: 'Gateways', filter: ['lan-zigbee-gateway', 'ble-zigbee-gateway'] },
  { label: 'Scene Control', filter: ['4-button-scene-switch', 'the-button', 'smart-knob'] },
  { label: 'Displays', filter: ['home-master-mini', 'home-master'] },
  { label: 'Security', filter: ['digital-door-lock'] },
  { label: 'Appliances', filter: ['smart-ir-blaster', 'curtain-controller'] },
];

export const products = [
  // Switches
  { id: 1, name: 'Double Switch', category: 'double-switch', price: '$49.99', image: 'https://via.placeholder.com/300x200' },
  { id: 2, name: '4-Gang Switch', category: '4-gang-switch', price: '$89.99', image: 'https://via.placeholder.com/300x200' },
  { id: 3, name: 'Quad Switch', category: 'quad-switch', price: '$79.99', image: 'https://via.placeholder.com/300x200' },
  { id: 4, name: 'Quad Pro Switch', category: 'quad-pro-switch', price: '$99.99', image: 'https://via.placeholder.com/300x200' },
  
  // Lighting
  { id: 5, name: 'Triac Dimmer', category: 'triac-dimmer', price: '$59.99', image: 'https://via.placeholder.com/300x200' },
  { id: 6, name: 'Smart Driver CC', category: 'smart-driver-cc', price: '$69.99', image: 'https://via.placeholder.com/300x200' },
  { id: 7, name: 'Smart Driver CV', category: 'smart-driver-cv', price: '$69.99', image: 'https://via.placeholder.com/300x200' },
  
  // Gateways
  { id: 8, name: 'LAN Zigbee Gateway', category: 'lan-zigbee-gateway', price: '$39.99', image: 'https://via.placeholder.com/300x200' },
  { id: 9, name: 'BLE Zigbee Gateway', category: 'ble-zigbee-gateway', price: '$44.99', image: 'https://via.placeholder.com/300x200' },
  
  // Scene Control
  { id: 10, name: '4-Button Scene Switch', category: '4-button-scene-switch', price: '$54.99', image: 'https://via.placeholder.com/300x200' },
  { id: 11, name: 'The Button', category: 'the-button', price: '$29.99', image: 'https://via.placeholder.com/300x200' },
  { id: 12, name: 'Smart Knob', category: 'smart-knob', price: '$49.99', image: 'https://via.placeholder.com/300x200' },
  
  // Displays
  { id: 13, name: 'Home Master Mini', category: 'home-master-mini', price: '$129.99', image: 'https://via.placeholder.com/300x200' },
  { id: 14, name: 'Home Master', category: 'home-master', price: '$199.99', image: 'https://via.placeholder.com/300x200' },
  
  // Security
  { id: 15, name: 'Digital Door Lock', category: 'digital-door-lock', price: '$149.99', image: 'https://via.placeholder.com/300x200' },
  
  // Appliances
  { id: 16, name: 'Smart IR Blaster', category: 'smart-ir-blaster', price: '$34.99', image: 'https://via.placeholder.com/300x200' },
  { id: 17, name: 'Curtain Controller', category: 'curtain-controller', price: '$59.99', image: 'https://via.placeholder.com/300x200' },
];