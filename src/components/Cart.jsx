import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CartItem from './CartItem';
import { selectCartItems, selectCartTotalPrice } from '../features/cart/cartSelectors';

const Cart = () => {
  const cartItems = useSelector(selectCartItems);
  const totalPrice = useSelector(selectCartTotalPrice);

  if (cartItems.length === 0) {
    return (
      <div className="empty-cart">
        <h2>Your Cart is Empty</h2>
        <Link to="/">Go Shopping</Link>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <div className="cart-summary">
        <h3>Total: ${totalPrice.toFixed(2)}</h3>
        <Link to="/checkout" className="checkout-btn">
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
};

export default Cart;
