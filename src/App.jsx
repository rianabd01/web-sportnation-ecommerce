// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Tailwind.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Header from './pages/Header';
import Footer from './pages/Footer';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import { CartProvider } from './hooks/CartContext';

function App() {
  return (
    <CartProvider>
      <Router>
        <Header />
        <main id="main" className="bg-white dark:bg-gray-900">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;
