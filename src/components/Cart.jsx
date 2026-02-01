import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import CartItem from './CartItem';
import { selectCartItems, selectCartTotalPrice } from '../features/cart/cartSelectors';
import { clearCart } from '../features/cart/cartSlice';
import useDocumentTitle from '../hooks/useDocumentTitle';

const Cart = () => {
  useDocumentTitle('Cart');
  const dispatch = useDispatch();
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
        <button 
          className="clear-cart-btn"
          onClick={() => {
            if (window.confirm('Are you sure you want to clear the cart?')) {
              dispatch(clearCart());
            }
          }}
          style={{ marginRight: '10px', padding: '12px 25px', backgroundColor: '#e74c3c', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '1.1rem' }}
        >
          Clear Cart
        </button>
        <Link to="/checkout" className="checkout-btn">
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
};

export default Cart;
