import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../data/categories';
import { products as productData } from '../data/productData';
import { Search } from 'lucide-react';

// Convert product data object to array for listing
const productsList = Object.values(productData).map(product => ({
  id: product.id,
  name: product.name,
  category: product.id,
  price: product.price,
  image: product.mainImage,
  model: product.model
}));

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = productsList.filter(product => {
    const matchesCategory = !selectedCategory || selectedCategory.includes(product.category);
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.model?.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleCategoryClick = (filter) => {
    setSelectedCategory(filter);
  };

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="container-custom py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Our Products</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our range of cutting-edge smart devices for your connected home
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-300 focus:outline-none focus:border-primary"
            />
            <Search className="absolute left-4 top-3.5 text-gray-400" size={20} />
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.label}
              onClick={() => handleCategoryClick(category.filter)}
              className={`px-4 py-2 rounded-full font-medium transition duration-300 ${
                selectedCategory === category.filter
                  ? 'bg-[#ff914d] text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <Link 
                to={`/product/${product.id}`} 
                key={product.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 transform hover:-translate-y-1"
              >
                <div className="relative pb-[100%] bg-gray-100">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="absolute inset-0 w-full h-full object-contain p-4"
                  />
                </div>
                <div className="p-4">
                  <div className="text-sm text-[#ff914d] font-semibold mb-1">{product.model}</div>
                  <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                  <p className="text-[#ff914d] font-bold text-xl mb-3">{product.price}</p>
                  <button className="w-full bg-[#ff914d] text-white py-2 rounded-lg hover:bg-opacity-90 transition">
                    View Details
                  </button>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;