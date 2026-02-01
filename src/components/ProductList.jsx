import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductItem from './ProductItem';
import useFetchProducts from '../hooks/useFetchProducts';
import { setSearchQuery } from '../features/cart/cartSlice';
import { selectSearchQuery } from '../features/cart/cartSelectors';

const ProductList = () => {
  const { products, loading, error } = useFetchProducts();
  const dispatch = useDispatch();
  const searchQuery = useSelector(selectSearchQuery);

  const handleSearchChange = (e) => {
    dispatch(setSearchQuery(e.target.value));
  };

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
        {filteredProducts.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
