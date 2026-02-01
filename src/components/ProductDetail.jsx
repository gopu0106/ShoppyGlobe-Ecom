import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { PRODUCTS_ENDPOINT } from '../config/config';
import { getEnhancedImage } from '../utils/imageMapper';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  useDocumentTitle(product ? product.title : 'Product Detail');

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`${PRODUCTS_ENDPOINT}/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch product');
        }
        const data = await response.json();
        
        // Enhance single product image
        const enhancedImage = getEnhancedImage(data.id);
        const enhancedProduct = {
          ...data,
          thumbnail: enhancedImage || data.thumbnail,
          images: enhancedImage ? [enhancedImage, ...data.images] : data.images
        };

        setProduct(enhancedProduct);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      dispatch(addToCart(product));
    }
  };

  if (loading) return <div className="loading">Loading product details...</div>;
  if (error) return <div className="error">Error: {error}</div>;
  if (!product) return <div className="error">Product not found</div>;

  return (
    <div className="product-detail">
      <div className="detail-image-container">
        <img src={product.thumbnail} alt={product.title} />
      </div>
      <div className="detail-info">
        <h1>{product.title}</h1>
        <p className="price">${product.price}</p>
        <p className="description">{product.description}</p>
        <p>Category: {product.category}</p>
        <button onClick={handleAddToCart} className="add-to-cart-btn">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
