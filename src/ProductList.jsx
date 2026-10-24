import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import CartItem from './CartItem';

// Helper: builds a plant object with a placeholder thumbnail (replace image URLs later if you like)
const plant = (name, cost, description) => ({
  name,
  cost,
  description,
  image: `https://placehold.co/200x200/2e7d32/ffffff?text=${encodeURIComponent(name)}`,
});

const plantsArray = [
  {
    category: 'Air Purifying Plants',
    plants: [
      plant('Snake Plant', '$15', 'Produces oxygen at night and removes toxins.'),
      plant('Spider Plant', '$12', 'Filters formaldehyde and xylene.'),
      plant('Peace Lily', '$18', 'Removes mold spores and purifies the air.'),
      plant('Boston Fern', '$20', 'Adds humidity and removes toxins.'),
      plant('Rubber Plant', '$17', 'Easy to care for and purifies the air.'),
      plant('Aloe Vera', '$14', 'Purifies the air and soothes burns.'),
    ],
  },
  {
    category: 'Aromatic Fragrant Plants',
    plants: [
      plant('Lavender', '$20', 'Calming scent, used in aromatherapy.'),
      plant('Jasmine', '$18', 'Sweet fragrance, promotes relaxation.'),
      plant('Rosemary', '$15', 'Invigorating scent, great for cooking.'),
      plant('Mint', '$12', 'Refreshing aroma, good for tea.'),
      plant('Lemon Balm', '$14', 'Citrusy scent that reduces stress.'),
      plant('Basil', '$10', 'Fragrant herb for cooking.'),
    ],
  },
  {
    category: 'Low Maintenance Plants',
    plants: [
      plant('ZZ Plant', '$25', 'Thrives in low light, needs little water.'),
      plant('Pothos', '$10', 'Fast-growing vine that tolerates neglect.'),
      plant('Cast Iron Plant', '$22', 'Nearly indestructible houseplant.'),
      plant('Jade Plant', '$16', 'Succulent that stores water in its leaves.'),
      plant('Chinese Evergreen', '$19', 'Handles low light and irregular watering.'),
      plant('Cactus', '$8', 'Needs very little water.'),
    ],
  },
];

function ProductList({ onHomeClick }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [showCart, setShowCart] = useState(false);
  const [addedToCart, setAddedToCart] = useState({});

  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleAddToCart = (p) => {
    dispatch(addItem(p));
    setAddedToCart((prev) => ({ ...prev, [p.name]: true }));
  };

  const
