import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart, increaseQuantity, decreaseQuantity } from '../features/cart/cartSlice';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="cart-item">
      <img src={item.thumbnail} alt={item.title} className="cart-item-image" />
      <div className="cart-item-details">
        <h3>{item.title}</h3>
        <p>Price: ${item.price}</p>
        <div className="quantity-controls">
          <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
          <span>{item.quantity}</span>
          <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
        </div>
        <button 
          className="remove-btn"
          onClick={() => dispatch(removeFromCart(item.id))}
        >
          Remove
        </button>
      </div>
      <div className="cart-item-subtotal">
        Subtotal: ${item.price * item.quantity}
      </div>
    </div>
  );
};

export default CartItem;
