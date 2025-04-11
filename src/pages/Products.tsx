import React, { useState } from 'react';
import { useProducts } from '../context/ProductContext';
import AddProductModal from '../components/AddProductModal';
import './Products.css';

const Products: React.FC = () => {
  const { products } = useProducts();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="products">
      <div className="card">
        <div className="products-header">
          <h2>Products Management</h2>
          <button className="add-product-btn" onClick={() => setIsModalOpen(true)}>
            Add Product
          </button>
        </div>
        <div className="products-filters">
          <input
            type="text"
            placeholder="Search products..."
            className="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            className="category-filter"
            title="Category Filter"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">All Categories</option>
            <option value="electronics">Electronics</option>
            <option value="clothing">Clothing</option>
            <option value="books">Books</option>
          </select>
        </div>
        <div className="products-list">
          {filteredProducts.length === 0 ? (
            <p>No products found. Add your first product to get started.</p>
          ) : (
            <div className="products-grid">
              {filteredProducts.map(product => (
                <div key={product.id} className="product-card">
                  {product.imageUrl && (
                    <img src={product.imageUrl} alt={product.name} className="product-image" />
                  )}
                  <div className="product-info">
                    <h3>{product.name}</h3>
                    <p className="product-description">{product.description}</p>
                    <div className="product-details">
                      <span className="product-price">${product.price.toFixed(2)}</span>
                      <span className="product-stock">Stock: {product.stock}</span>
                    </div>
                    <span className="product-category">{product.category}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <AddProductModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default Products; 