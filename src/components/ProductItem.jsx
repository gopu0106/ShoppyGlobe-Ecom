import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart } from '../features/cart/cartSlice';

// ProductItem component - displays a single product card
const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

  // Add product to cart and prevent link navigation
  const handleAddToCart = (e) => {
    e.preventDefault();
    dispatch(addToCart(product));
  };

  return (
    <div className="product-item">
      <Link to={`/product/${product.id}`}>
        <img 
          src={product.thumbnail} 
          alt={product.title} 
          loading="lazy" // Lazy load images for better performance
          className="product-image"
          onError={(e) => { e.target.src = 'https://via.placeholder.com/200?text=No+Image'; }}
        />
        <div className="product-info">
          <h3>{product.title}</h3>
          <p>${product.price}</p>
          <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </Link>
    </div>
  );
};

// PropTypes for type checking (helps catch bugs)
ProductItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    thumbnail: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductItem;
