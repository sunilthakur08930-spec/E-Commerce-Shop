import './App.css';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import Products from './components/Products';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";


function App() {
  const [cart, setCart] = useState(() => { return JSON.parse(localStorage.getItem('cart')) || []; });

  const addToCart = (Product) => {
    setCart([...cart, Product]);
    alert("Product added to cart successfully! 🛒");
  }

  const removeFromCart = (index) => {
    setCart(cart.filter((item, i) => i !== index))
    alert("Product removed from cart!");
  }
  const handleCheckout = () => {
    if (cart.length === 0) {
      alert("Your cart is empty! Add some products first 🛒");
      return; // Yahin se function wapas bhej do, aage mat chalao
    }
    setCart([]); // Cart khali karo
    alert("Order Placed Successfully! Thank you for shopping with E-Shop 🎉");
  }
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]); // Yeh tabhi chalega jab cart ki value change hogi


  return (
    <Router>
      <Navbar cartCount={cart.length} />
      <div className="container my-3">
        <Routes>
          <Route path="/" element={
            <div className="text-center py-5">
              <h1 className="fw-bold mb-3">Welcome to Our E-Commerce Shop</h1>
              <p className="text-secondary fs-5 mb-4">Discover the Best Tech & Gadgets at Unbeatable Prices!</p>
              <Link className="btn btn-primary btn-lg px-5 shadow-sm" to="/products">Shop Now 🛍️</Link>
            </div>
          } />
          <Route path="/products" element={<Products addToCart={addToCart} />} />
          <Route path="/cart" element={<Cart addToCart={addToCart} cart={cart} removeFromCart={removeFromCart} handleCheckout={handleCheckout} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
