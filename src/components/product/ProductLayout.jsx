import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  ChevronDown,
  Check,
  Shield,
  Mic,
  Wifi,
  Zap,
  Cpu,
  Smartphone,
  Sun,
  Youtube,
  FileText,
  Heart,
  Share2,
  Star
} from 'lucide-react';

// Icon mapping
const iconMap = {
  Shield, Mic, Wifi, Zap, Cpu, Smartphone, Sun
};

const ProductLayout = ({ product }) => {
  const [expanded, setExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState('description');

  if (!product) return null;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-[#395B64] text-white pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
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



      {/* Features Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Key Features
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-12">
            {product.features.map((feature, index) => {
              const IconComponent = iconMap[feature.icon] || Shield;
              return (
                <div key={index} className="text-center">
                  <div className="mb-3">
                    <IconComponent size={48} style={{ color: product.accentColor }} className="mx-auto" />
                  </div>
                  <p className="text-sm font-medium text-gray-800">{feature.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Switch Types (if applicable) */}
      {product.switchTypes?.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Works with all Types of Switches
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {product.switchTypes.map((type, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
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
                <img src={product.compactImage} alt="Compact Size" className="w-full rounded-lg shadow-xl" />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Compact Design
                </h2>
                <p className="text-gray-600 leading-relaxed text-lg">
                  With its compact size seamlessly fitting into your switchboard, the {product.name} combines convenience and functionality in an elegant design. Elevate your home automation without compromising space.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Specifications & What's in Box Tabs */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab Headers */}
          <div className="flex border-b border-gray-200 mb-8">
            {['description', 'specifications', 'whatsInBox'].map((tab) => (
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
          </div>
        </div>
      </section>

      {/* Installation Section */}
      {product.installationImage && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  SIMPLE INSTALLATION
                </h2>
                <p className="text-gray-600 text-lg mb-8">
                  Discover the simplicity of installation and setup with the {product.name}. Whether you opt for a DIY approach or seek assistance, our user-friendly design guarantees a trouble-free installation process.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  {product.videoUrl && (
                    <a 
                      href={product.videoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center bg-[#ff914d] text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition"
                    >
                      <Youtube size={20} className="mr-2" />
                      Watch Video
                    </a>
                  )}
                  
                  {product.manualUrl && (
                    <a 
                      href={product.manualUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center border-2 border-[#ff914d] text-[#ff914d] px-6 py-3 rounded-lg font-semibold hover:bg-[#ff914d] hover:text-white transition"
                    >
                      <FileText size={20} className="mr-2" />
                      Download Guide
                    </a>
                  )}
                </div>
              </div>
              
              <div>
                <img src={product.installationImage} alt="Installation" className="w-full rounded-lg shadow-xl" />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Compatible Brands */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold mb-8">COMPATIBLE BRANDS</h3>
          <div className="flex flex-wrap justify-center gap-8">
            {['Tuya', 'Alexa', 'Google Home', 'Siri', 'Smart Life'].map((brand, index) => (
              <div key={index} className="bg-white px-6 py-3 rounded-lg font-semibold text-gray-700 shadow-sm">
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductLayout;