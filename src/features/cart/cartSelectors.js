import { createSelector } from '@reduxjs/toolkit';

// Basic selectors
export const selectCartItems = (state) => state.cart.items;
export const selectSearchQuery = (state) => state.cart.searchQuery;

// Memoized selectors
export const selectCartTotalItems = createSelector(
  [selectCartItems],
  (items) => items.reduce((total, item) => total + item.quantity, 0)
);

export const selectCartTotalPrice = createSelector(
  [selectCartItems],
  (items) => items.reduce((total, item) => total + (item.price * item.quantity), 0)
);
