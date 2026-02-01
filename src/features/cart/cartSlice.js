import { createSlice } from "@reduxjs/toolkit";

// Initial state for cart - starts with empty items and no search query
const initialState = {
  items: [], // Array to store cart items
  searchQuery: "", // Search input value
};

// Cart slice - manages all cart-related state and actions
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Add product to cart or increase quantity if already exists
    addToCart: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id,
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    // Remove item from cart completely
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    // Increase item quantity by 1
    increaseQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },
    // Decrease item quantity by 1 (minimum 1)
    decreaseQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
    // Clear all items from cart
    clearCart: (state) => {
      state.items = [];
    },
    // Update search query for filtering products
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
});

// Export actions to use in components
export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
  setSearchQuery,
} = cartSlice.actions;

export default cartSlice.reducer;
