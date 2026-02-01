import { useState, useEffect } from 'react';
import { PRODUCTS_ENDPOINT } from '../config/config';

// Custom hook to fetch products from API
// Returns: products array, loading state, and error message if any
const useFetchProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch products when component mounts
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(PRODUCTS_ENDPOINT);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProducts(data.products);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []); // Empty dependency array means this runs once on mount

  return { products, loading, error };
};

export default useFetchProducts;
