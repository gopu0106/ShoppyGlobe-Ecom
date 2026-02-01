import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCartTotalItems } from '../features/cart/cartSelectors';

// Header component - navigation bar with cart count
const Header = () => {
  // Get total number of items in cart from Redux store
  const cartItemCount = useSelector(selectCartTotalItems);

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">ShoppyGlobe</Link>
      </div>
      <nav>
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/cart" className="nav-link cart-link">
          <span>Cart</span>
          {/* Display cart item count badge */}
          <span className="cart-badge">{cartItemCount}</span>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
