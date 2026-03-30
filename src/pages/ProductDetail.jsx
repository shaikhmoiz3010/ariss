import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  ChevronDown,
  Check,
  Shield,
  Mic,
  Zap,
  Wifi,
  Cpu,
  Clock,
  Smartphone,
  Youtube,
  FileText,
  Heart,
  Share2,
  Star
} from 'lucide-react';

// Product data based on actual ariss.io products
const productData = {
  '4-gang-switch': {
    id: '4-gang-switch',
    name: '4 GANG SWITCH',
    title: 'CONTROL FOUR SWITCHES INDIVIDUALLY',
    description: 'The Ariss 4 gang switch (ARS-FS-41) is a compact, WiFi-enabled IoT device designed to control up to four separate devices. It can be easily installed behind a switchboard and works seamlessly with traditional switches. Additionally, it is compatible with both Alexa and Google Home, allowing for convenient voice control.',
    longDescription: 'Ariss 4 gang switch offers convenient features such as remote control and scheduling, allowing you to adjust your lights / Devices even when you\'re not at home. It also supports integration with other smart home devices for even more control options',
    price: '$89.99',
    category: 'Switches',
    mainImage: 'https://static.wixstatic.com/media/ea31d6_263a89e32fea4de69269f6d544cbf046~mv2.png',
    images: [
      'https://static.wixstatic.com/media/ea31d6_263a89e32fea4de69269f6d544cbf046~mv2.png',
      'https://static.wixstatic.com/media/ea31d6_263a89e32fea4de69269f6d544cbf046~mv2.png',
    ],
    features: [
      { icon: Shield, text: '5 Years Warranty', color: '#ff914d' },
      { icon: Mic, text: 'APP & Voice Control', color: '#ff914d' },
      { icon: Wifi, text: 'Wi-Fi IoT Solution', color: '#ff914d' },
      { icon: Zap, text: 'Regular Switches', color: '#ff914d' },
      { icon: Cpu, text: 'No Special Wiring', color: '#ff914d' },
      { icon: Smartphone, text: 'Easy Sharing with Family', color: '#ff914d' },
    ],
    compatibility: [
      'Works with Alexa',
      'Google Home',
      'Siri Shortcuts',
      'Smart Life App'
    ],
    specifications: {
      'Product Type': 'Smart Switch',
      'Channels': '4 Gang',
      'Wireless Protocol': 'Wi-Fi 2.4GHz',
      'Compatibility': 'Alexa, Google Home, Siri',
      'Voltage': '110-240V AC',
      'Max Load': '10A per channel',
      'Material': 'Flame Retardant PC',
      'Warranty': '5 Years',
      'Installation': 'Behind existing switch',
    },
    whatsInBox: [
      '1x 4 Gang Switch Module',
      '4x Wiring Connectors',
      '1x User Manual',
      '1x Warranty Card',
    ],
    switchTypes: [
      { image: 'https://static.wixstatic.com/media/ea31d6_b65e16f36ed64f60ab2a822a85a802bd~mv2.png', name: 'Regular Switch' },
      { image: 'https://static.wixstatic.com/media/ea31d6_cbcbbee121ff4a5580013c6d2e3c9724~mv2.png', name: 'Bell Switch' },
      { image: 'https://static.wixstatic.com/media/ea31d6_9f83dcc8d3124516b7588cc277173ee3~mv2.png', name: 'Toggle Switch' },
      { image: 'https://static.wixstatic.com/media/ea31d6_f6e88aaa78554367bd24b36e1edf7a7c~mv2.png', name: 'Push Button' },
    ],
    installationImage: 'https://static.wixstatic.com/media/ea31d6_a85d27ef55af4d31a9430ca46919a2e3~mv2.png',
    compactImage: 'https://static.wixstatic.com/media/ea31d6_69f6c139a4e048b88c6abebbece1ac39~mv2.png',
    videoThumbnail: 'https://static.wixstatic.com/media/ea31d6_38916b39aa6e4cb5a68bd7788f81a2ba~mv2.png',
  },
  'double-switch': {
    id: 'double-switch',
    name: 'DOUBLE SWITCH',
    title: 'CONTROL TWO SWITCHES INDIVIDUALLY',
    description: 'The Ariss double switch is a compact, WiFi-enabled IoT device designed to control up to two separate devices. It can be easily installed behind a switchboard and works seamlessly with traditional switches.',
    longDescription: 'Perfect for bedrooms and living rooms, the Ariss double switch offers convenient remote control and scheduling features.',
    price: '$49.99',
    category: 'Switches',
    mainImage: 'https://static.wixstatic.com/media/ea31d6_263a89e32fea4de69269f6d544cbf046~mv2.png',
    images: [],
    features: [
      { icon: Shield, text: '5 Years Warranty', color: '#ff914d' },
      { icon: Mic, text: 'APP & Voice Control', color: '#ff914d' },
      { icon: Wifi, text: 'Wi-Fi IoT Solution', color: '#ff914d' },
      { icon: Zap, text: 'Regular Switches', color: '#ff914d' },
    ],
    compatibility: [],
    specifications: {},
    whatsInBox: [],
    switchTypes: [],
    installationImage: '',
    compactImage: '',
    videoThumbnail: '',
  }
};

const ProductDetail = () => {
  const { productId } = useParams();
  const product = productData[productId] || productData['4-gang-switch'];
  const [selectedImage, setSelectedImage] = useState(0);
  const [activeTab, setActiveTab] = useState('description');
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [productId]);

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
          <Link to="/products" className="bg-primary text-white px-6 py-3 rounded-lg">
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Dark Teal Background */}
      <section className="bg-[#395B64] text-white pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <Link to="/products" className="inline-flex items-center text-gray-300 hover:text-white mb-8">
                <ArrowLeft size={16} className="mr-2" />
                Back to Products
              </Link>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
                {product.name}
              </h1>
              
              <div className="w-24 h-1 bg-white mb-8"></div>
              
              <h2 className="text-2xl md:text-3xl font-semibold mb-6">
                {product.title}
              </h2>
              
              <p className="text-gray-200 mb-6 leading-relaxed">
                {product.description}
              </p>
              
              <p className="text-gray-200 mb-8 leading-relaxed">
                {product.longDescription}
              </p>
              
              {/* Read More Button */}
              <button 
                onClick={() => setExpanded(!expanded)}
                className="flex items-center text-white font-semibold hover:text-[#ff914d] transition"
              >
                Read More
                <ChevronDown size={20} className={`ml-2 transform transition-transform ${expanded ? 'rotate-180' : ''}`} />
              </button>
            </div>
            
            {/* Right Image */}
            <div className="relative">
              <img 
                src={product.mainImage} 
                alt={product.name}
                className="w-full max-w-lg mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid - White Background */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Unlock Endless Possibilities at Your Fingertips
          </h2>
          
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            ARISS is a brand for Anyone interested in using high-quality smart home devices to enjoy a whole-house intelligent lifestyle. Our mission is to design and provide Comprehensive solutions to house devices for the enjoyment of our honoured customers.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {product.features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="mb-3">
                  <feature.icon size={48} style={{ color: feature.color }} className="mx-auto" />
                </div>
                <p className="text-sm font-medium text-gray-800">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Switch Types Section */}
      {product.switchTypes.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Works with all Types of Switches
            </h2>
            
            <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
              Effortlessly integrating with standard wiring and switches, the 4 Gang Switch grants you smooth control over your home automation.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {product.switchTypes.map((type, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <img src={type.image} alt={type.name} className="w-full h-32 object-contain mb-4" />
                  <p className="text-center font-medium">{type.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Compact Size Section */}
      {product.compactImage && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img src={product.compactImage} alt="Compact Size" className="w-full" />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Compact Size Fix inside Switch Board
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  With its compact size seamlessly fitting into your switchboard, the ARISS 4 Gang Switch combines convenience and functionality in an elegant design. Elevate your home automation without compromising space.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Video Section */}
      {product.videoThumbnail && (
        <section className="relative h-[500px] overflow-hidden">
          <img 
            src={product.videoThumbnail} 
            alt="Video Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Explore Various Use Cases
              </h2>
              <p className="text-lg max-w-2xl mx-auto mb-8">
                With the ARISS 4 Gang Switch, you'll have the ability to control any electrical device remotely.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Installation Section */}
      {product.installationImage && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  SIMPLE INSTALLATION
                </h2>
                <p className="text-gray-600 mb-8">
                  Discover the simplicity of installation and setup with the ARISS 4 Gang Switch. Whether you opt for a DIY approach or seek assistance, our user-friendly design guarantees a trouble-free installation process.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="https://www.youtube.com/watch?v=VKK5Ik4rSGU" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-[#ff914d] text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition"
                  >
                    <Youtube size={20} className="mr-2" />
                    Watch Video
                  </a>
                  
                  <a 
                    href="https://drive.google.com/file/d/1_5cGhFTw4yTkjMwIvyXPO76sJ1Ew6k0o/view" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center border-2 border-[#ff914d] text-[#ff914d] px-6 py-3 rounded-lg font-semibold hover:bg-[#ff914d] hover:text-white transition"
                  >
                    <FileText size={20} className="mr-2" />
                    Download Guide
                  </a>
                </div>
              </div>
              
              <div>
                <img src={product.installationImage} alt="Installation" className="w-full rounded-lg shadow-xl" />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Product Tabs */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab Headers */}
          <div className="flex border-b border-gray-200 mb-8">
            {['description', 'specifications', 'whatsInBox'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 font-medium text-sm capitalize ${
                  activeTab === tab
                    ? 'border-b-2 border-[#ff914d] text-[#ff914d]'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab === 'whatsInBox' ? "What's in the Box" : tab}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="min-h-[300px]">
            {activeTab === 'description' && (
              <div>
                <h3 className="text-xl font-semibold mb-4">Product Description</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <p className="text-gray-600">{product.longDescription}</p>
              </div>
            )}

            {activeTab === 'specifications' && (
              <div>
                <h3 className="text-xl font-semibold mb-4">Technical Specifications</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="border-b border-gray-100 pb-2">
                      <span className="text-sm text-gray-500">{key}:</span>
                      <span className="text-sm font-medium ml-2">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'whatsInBox' && (
              <div>
                <h3 className="text-xl font-semibold mb-4">What's in the Box</h3>
                <ul className="grid md:grid-cols-2 gap-3">
                  {product.whatsInBox.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <Check size={18} className="text-[#ff914d] mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Compatible Brands */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold mb-8">COMPATIBLE BRANDS</h3>
          <div className="flex flex-wrap justify-center gap-8">
            {['Tuya', 'Alexa', 'Google Home', 'Siri', 'Smartlife'].map((brand, index) => (
              <div key={index} className="bg-white px-6 py-3 rounded-lg font-semibold text-gray-700 shadow-sm">
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Action Buttons */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="text-3xl font-bold text-[#ff914d]">{product.price}</span>
              <span className="text-gray-500 ml-2">+ Free Shipping</span>
            </div>
            
            <div className="flex flex-wrap gap-3">
              <button className="bg-[#ff914d] text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition">
                Add to Cart
              </button>
              
              <button className="border-2 border-[#ff914d] text-[#ff914d] px-8 py-3 rounded-lg font-semibold hover:bg-[#ff914d] hover:text-white transition">
                Buy Now
              </button>
              
              <button className="p-3 border border-gray-300 rounded-lg hover:border-[#ff914d] transition">
                <Heart size={20} className="text-gray-600" />
              </button>
              
              <button className="p-3 border border-gray-300 rounded-lg hover:border-[#ff914d] transition">
                <Share2 size={20} className="text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;