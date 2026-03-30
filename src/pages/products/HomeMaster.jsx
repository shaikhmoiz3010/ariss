import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  ChevronDown,
  Check,
  Shield,
  Mic,
  Wifi,
  Cpu,
  Smartphone,
  Sun,
  Youtube,
  FileText,
  Heart,
  Share2,
  Star,
  Camera,
  Speaker,
  Battery,
  Monitor
} from 'lucide-react';

const HomeMaster = () => {
  const [expanded, setExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState('description');
  const [selectedImage, setSelectedImage] = useState(0);

  // Product information - easily editable for this specific product
  const product = {
    id: 'home-master',
    name: 'HOME MASTER',
    model: 'ARS-HM-PRO',
    tagline: 'PREMIUM SMART HOME HUB WITH 7" DISPLAY',
    category: 'Displays',
    price: '$199.99',
    
    // You can use actual ARISS images or your own
    mainImage: 'https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    ],
    
    description: 'The ARISS Home Master is a premium 7-inch smart home display that serves as the central command center for your entire smart home ecosystem. With its built-in Zigbee gateway, it connects directly to all your ARISS devices without requiring additional hubs.',
    
    longDescription: 'Featuring a vibrant 7-inch IPS touchscreen, the Home Master provides intuitive control over all your smart devices. View camera feeds, control lighting, check weather forecasts, and manage scenes - all from one central location. The built-in speaker and microphone enable video calling and voice assistant integration.',
    
    features: [
      { icon: Shield, text: '2 Years Warranty', color: '#ff914d' },
      { icon: Monitor, text: '7" IPS Display', color: '#ff914d' },
      { icon: Wifi, text: 'Dual-Band Wi-Fi', color: '#ff914d' },
      { icon: Cpu, text: 'Built-in Gateway', color: '#ff914d' },
      { icon: Camera, text: '2MP Front Camera', color: '#ff914d' },
      { icon: Speaker, text: 'Stereo Speakers', color: '#ff914d' },
      { icon: Battery, text: 'Wall Powered', color: '#ff914d' },
      { icon: Smartphone, text: 'App Remote', color: '#ff914d' },
    ],
    
    specifications: {
      'Product Type': 'Smart Home Hub with Display',
      'Screen Size': '7 inches',
      'Screen Type': 'IPS LCD Touchscreen',
      'Resolution': '1024 x 600 pixels',
      'Processor': 'Quad-core 1.5GHz',
      'RAM': '2GB',
      'Storage': '16GB',
      'Wireless': 'Wi-Fi 2.4/5GHz, Zigbee 3.0',
      'Bluetooth': 'Bluetooth 5.0',
      'Audio': 'Stereo speakers, Dual microphones',
      'Camera': '2MP front camera',
      'Power': '12V DC adapter',
      'Mounting': 'Wall mount or desktop stand',
      'Operating System': 'Android Things',
      'Voice Assistants': 'Alexa, Google Assistant',
      'Compatibility': 'All ARISS devices',
      'Warranty': '2 Years',
      'Color': 'White / Black',
      'Dimensions': '185 x 120 x 25 mm',
      'Weight': '450g',
    },
    
    whatsInBox: [
      '1x Home Master Display Unit',
      '1x Power Adapter (12V)',
      '1x Wall Mount Bracket',
      '1x Desktop Stand',
      '4x Mounting Screws',
      '2x Wall Anchors',
      '1x Quick Start Guide',
      '1x Warranty Card',
    ],
    
    // Special sections you want for this product
    highlights: [
      {
        title: 'Centralized Control',
        description: 'Control all your smart devices from one beautiful interface',
        image: 'https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      },
      {
        title: 'Camera Viewer',
        description: 'View live feeds from your security cameras directly on the display',
        image: 'https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      },
      {
        title: 'Built-in Gateway',
        description: 'No additional hub needed - connects directly to all Zigbee devices',
        image: 'https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      }
    ],
    
    videoUrl: 'https://www.youtube.com/watch?v=your-video-id',
    manualUrl: 'https://drive.google.com/file/d/your-manual-id/view',
    
    // Custom fields for this specific product
    screenBrightness: '450 nits',
    viewingAngle: '178°',
    speakerOutput: '2 x 3W',
    supportedCameras: 'Up to 8 cameras',
    
    // Reviews
    reviews: [
      { rating: 5, text: 'Best smart home hub I\'ve ever used!', author: 'John D.' },
      { rating: 5, text: 'The display is gorgeous and very responsive', author: 'Sarah M.' },
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-[#395B64] text-white pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <Link to="/products" className="inline-flex items-center text-gray-300 hover:text-white mb-8">
                <ArrowLeft size={16} className="mr-2" />
                Back to Products
              </Link>
              
              <div className="text-sm text-[#ff914d] font-semibold mb-2">{product.model}</div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
                {product.name}
              </h1>
              
              <div className="w-24 h-1 bg-[#ff914d] mb-8"></div>
              
              <h2 className="text-2xl md:text-3xl font-semibold mb-6">
                {product.tagline}
              </h2>
              
              <p className="text-gray-200 mb-6 leading-relaxed">
                {product.description}
              </p>
              
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
                className="w-full max-w-lg mx-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Price & Actions Bar */}
      <div className="bg-white border-b border-gray-200 sticky top-20 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
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
      </div>

      {/* Features Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Key Features
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
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

      {/* Product Highlights - Custom section for Home Master */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Choose Home Master
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {product.highlights.map((highlight, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg">
                <img src={highlight.image} alt={highlight.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{highlight.title}</h3>
                  <p className="text-gray-600">{highlight.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Display Specifications - Custom for this product */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Display Quality</h3>
              <ul className="space-y-4">
                <li className="flex justify-between border-b pb-2">
                  <span className="text-gray-600">Screen Brightness</span>
                  <span className="font-semibold">{product.screenBrightness}</span>
                </li>
                <li className="flex justify-between border-b pb-2">
                  <span className="text-gray-600">Viewing Angle</span>
                  <span className="font-semibold">{product.viewingAngle}</span>
                </li>
                <li className="flex justify-between border-b pb-2">
                  <span className="text-gray-600">Speaker Output</span>
                  <span className="font-semibold">{product.speakerOutput}</span>
                </li>
                <li className="flex justify-between border-b pb-2">
                  <span className="text-gray-600">Supported Cameras</span>
                  <span className="font-semibold">{product.supportedCameras}</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6">Compatibility</h3>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  Works seamlessly with all ARISS devices and supports:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Check size={18} className="text-[#ff914d] mr-2" />
                    <span>All ARISS switches and dimmers</span>
                  </li>
                  <li className="flex items-center">
                    <Check size={18} className="text-[#ff914d] mr-2" />
                    <span>ARISS door locks and sensors</span>
                  </li>
                  <li className="flex items-center">
                    <Check size={18} className="text-[#ff914d] mr-2" />
                    <span>Third-party Zigbee devices</span>
                  </li>
                  <li className="flex items-center">
                    <Check size={18} className="text-[#ff914d] mr-2" />
                    <span>IP cameras (RTSP/ONVIF)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications & What's in Box Tabs */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab Headers */}
          <div className="flex border-b border-gray-200 mb-8">
            {['description', 'specifications', 'whatsInBox', 'reviews'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 font-medium text-sm capitalize ${
                  activeTab === tab
                    ? 'border-b-2 text-[#ff914d] border-[#ff914d]'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab === 'whatsInBox' ? "What's in the Box" : tab}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="min-h-[300px] bg-white p-8 rounded-lg shadow">
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

            {activeTab === 'reviews' && (
              <div>
                <h3 className="text-xl font-semibold mb-4">Customer Reviews</h3>
                <div className="space-y-4">
                  {product.reviews.map((review, index) => (
                    <div key={index} className="border-b pb-4">
                      <div className="flex items-center mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            size={16} 
                            className={i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'} 
                          />
                        ))}
                      </div>
                      <p className="text-gray-700 mb-1">"{review.text}"</p>
                      <p className="text-sm text-gray-500">- {review.author}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Video & Manual Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-100 rounded-lg p-8 text-center">
              <Youtube size={48} className="text-[#ff914d] mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Video Overview</h3>
              <p className="text-gray-600 mb-4">Watch how Home Master transforms your smart home</p>
              <a 
                href={product.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#ff914d] text-white px-6 py-2 rounded-lg hover:bg-opacity-90 transition"
              >
                Watch Now
              </a>
            </div>
            
            <div className="bg-gray-100 rounded-lg p-8 text-center">
              <FileText size={48} className="text-[#ff914d] mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">User Manual</h3>
              <p className="text-gray-600 mb-4">Download detailed installation and user guide</p>
              <a 
                href={product.manualUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border-2 border-[#ff914d] text-[#ff914d] px-6 py-2 rounded-lg hover:bg-[#ff914d] hover:text-white transition"
              >
                Download PDF
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Compatible Brands */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold mb-8">COMPATIBLE WITH</h3>
          <div className="flex flex-wrap justify-center gap-8">
            {['Tuya', 'Alexa', 'Google Home', 'Siri', 'Smart Life'].map((brand, index) => (
              <div key={index} className="bg-white px-6 py-3 rounded-lg font-semibold text-gray-700 shadow-sm">
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Products - You can customize this per product */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold mb-8">You May Also Like</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['Home Master Mini', 'Smart Knob', '4-Button Switch', 'Digital Door Lock'].map((item, index) => (
              <Link key={index} to={`/product/${item.toLowerCase().replace(/\s+/g, '-')}`} className="group">
                <div className="bg-gray-100 rounded-lg p-4 mb-2">
                  <img src={product.mainImage} alt={item} className="w-full h-32 object-contain" />
                </div>
                <h4 className="font-semibold text-center group-hover:text-[#ff914d] transition">{item}</h4>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeMaster;