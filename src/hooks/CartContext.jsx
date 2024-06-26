// eslint-disable-next-line no-unused-vars
import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

const useCart = () => useContext(CartContext);

// eslint-disable-next-line react/prop-types
const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  return (
    <CartContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </CartContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export { useCart, CartProvider };
