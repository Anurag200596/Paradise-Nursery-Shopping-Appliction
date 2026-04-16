import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeitem, updatequantity } from './CartSlice';
import './App.css';

const cartitem = ({ oncontinueshopping }) => {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const calculatetotalamount = () => {
    return cart.reduce((total, item) => total + (parseFloat(item.cost.replace('$', '')) * item.quantity), 0);
  };

  const calculatetotalcost = (item) => {
    return parseFloat(item.cost.replace('$', '')) * item.quantity;
  };

  const handleincrement = (item) => {
    dispatch(updatequantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handledecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updatequantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeitem(item.name));
    }
  };

  return (
    <div className="cart-container">
      <h2>total cart amount: ${calculatetotalamount()}</h2>
      <div>
        {cart.map((item) => (
          <div className="cart-item" key={item.name}>
            <img className="cart-item-image" src={item.image} alt={item.name} />
            <div className="cart-item-details">
              <div className="cart-item-name">{item.name}</div>
              <div className="cart-item-cost">{item.cost}</div>
              <div className="cart-item-quantity">
                <button className="cart-item-button" onClick={() => handledecrement(item)}>-</button>
                <span className="cart-item-quantity-value">{item.quantity}</span>
                <button className="cart-item-button" onClick={() => handleincrement(item)}>+</button>
              </div>
              <div>total: ${calculatetotalcost(item)}</div>
              <button className="cart-item-delete" onClick={() => dispatch(removeitem(item.name))}>delete</button>
            </div>
          </div>
        ))}
      </div>
      <div className="continue_shopping_btn">
        <button className="get-started-btn" onClick={oncontinueshopping}>continue shopping</button>
        <button className="get-started-btn1" onClick={() => alert('coming soon')}>checkout</button>
      </div>
    </div>
  );
};

export default cartitem;