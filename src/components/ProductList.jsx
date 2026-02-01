import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductItem from './ProductItem';
import useFetchProducts from '../hooks/useFetchProducts';
import useDocumentTitle from '../hooks/useDocumentTitle';
import { setSearchQuery } from '../features/cart/cartSlice';
import { selectSearchQuery } from '../features/cart/cartSelectors';

// ProductList component - displays all products with search functionality
const ProductList = () => {
  useDocumentTitle('Home');
  
  // Fetch products from API using custom hook
  const { products, loading, error } = useFetchProducts();
  const dispatch = useDispatch();
  const searchQuery = useSelector(selectSearchQuery);

  // Update search query in Redux when user types
  const handleSearchChange = (e) => {
    dispatch(setSearchQuery(e.target.value));
  };

  // Filter products based on search query
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Show loading and error states
  if (loading) return <div className="loading">Loading products...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="product-list-container">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
      <div className="product-grid">
        {/* Render each product with unique key */}
        {filteredProducts.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
