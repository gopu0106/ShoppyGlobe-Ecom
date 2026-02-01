import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../features/cart/cartSlice';

// Configure Redux store - centralizes application state
// This makes cart data accessible from any component
export const store = configureStore({
  reducer: {
    cart: cartReducer, // Manages cart items and search query
  },
});
