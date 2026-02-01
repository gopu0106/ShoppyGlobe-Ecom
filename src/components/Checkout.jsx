import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearCart } from '../features/cart/cartSlice';

const Checkout = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    email: ''
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Order placed successfully!');
    dispatch(clearCart());
    navigate('/');
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit} className="checkout-form">
        <div className="form-group">
          <label>Name:</label>
          <input 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="form-group">
          <label>Address:</label>
          <textarea 
            name="address" 
            value={formData.address} 
            onChange={handleChange} 
            required 
          />
        </div>
        <button type="submit" className="place-order-btn">Place Order</button>
      </form>
    </div>
  );
};

export default Checkout;
