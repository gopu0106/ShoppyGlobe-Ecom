import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCartTotalItems } from '../features/cart/cartSelectors';

const Header = () => {
  const cartItemCount = useSelector(selectCartTotalItems);

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">ShoppyGlobe</Link>
      </div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/cart">
          Cart ({cartItemCount})
        </Link>
      </nav>
    </header>
  );
};

export default Header;
