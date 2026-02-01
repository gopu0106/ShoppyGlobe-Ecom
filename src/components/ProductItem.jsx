import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart } from '../features/cart/cartSlice';

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

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
          loading="lazy" 
          className="product-image"
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

export default ProductItem;
