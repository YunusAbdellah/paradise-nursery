import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';

const CartItem = ({ onContinueShopping, onItemRemoved }) => {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  // Unit price: "$15" -> 15
  const unitPrice = (item) => parseFloat(item.cost.substring(1));

  // Total cost for one plant type (unit price x quantity)
  const calculateTotalCost = (item) => unitPrice(item) * item.quantity;

  // Total amount of all plants in the cart
  const calculateTotalAmount = () =>
    cart.reduce((total, item) => total + calculateTotalCost(item), 0);

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      // quantity would reach 0 -> remove the item
      handleRemove(item);
    }
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
    if (onItemRemoved)
