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
import { Login } from './pages/Login';
import { LoginProvider } from './hooks/LoginContext';

function App() {
  return (
    <LoginProvider>
      <CartProvider>
        <Router>
          <Header />
          <main id="main" className="bg-gray-50 text-gray-950">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/products" element={<Products />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
          </main>
          <Footer />
        </Router>
      </CartProvider>
    </LoginProvider>
  );
}

export default App;
