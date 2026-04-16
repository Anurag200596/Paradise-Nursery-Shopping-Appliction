import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';

function CartItem({ onContinueShopping }) {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const calculateTotalAmount = () => {
    return cart.reduce((total, item) => total + (parseFloat(item.cost.replace('$', '')) * item.quantity), 0).toFixed(2);
  };

  return (
    <div className="cart-page">
      <h2>Total Cart Amount: ${calculateTotalAmount()}</h2>
      <div className="cart-items-container">
        {cart.map(item => (
          <div className="cart-item-card" key={item.name}>
            <img src={item.image} alt={item.name} />
            <div className="cart-details">
              <h3>{item.name}</h3>
              <p>Unit Price: {item.cost}</p>
              <div className="quantity-div">
                <button onClick={() => dispatch(updateQuantity({name: item.name, quantity: Math.max(0, item.quantity - 1)}))}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => dispatch(updateQuantity({name: item.name, quantity: item.quantity + 1}))}>+</button>
              </div>
              <p>Subtotal: ${(parseFloat(item.cost.replace('$', '')) * item.quantity).toFixed(2)}</p>
              <button className="del-btn" onClick={() => dispatch(removeItem(item.name))}>Delete</button>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-nav-btns">
        <button className="cont-btn" onClick={onContinueShopping}>Continue Shopping</button>
        <button className="check-btn" onClick={() => alert('Checkout functionality coming soon!')}>Checkout</button>
      </div>
    </div>
  );
}

export default CartItem;