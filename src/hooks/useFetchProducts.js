import { useState, useEffect } from 'react';
import { PRODUCTS_ENDPOINT } from '../config/config';

import { getEnhancedImage } from '../utils/imageMapper';

const useFetchProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(PRODUCTS_ENDPOINT);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        
        // Enhance products with high-quality images
        const enhancedProducts = data.products.map(product => {
          const enhancedImage = getEnhancedImage(product.id, product.category);
          return {
            ...product,
            thumbnail: enhancedImage || product.thumbnail,
            images: enhancedImage ? [enhancedImage, ...product.images] : product.images
          };
        });
        
        setProducts(enhancedProducts);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return { products, loading, error };
};

export default useFetchProducts;
