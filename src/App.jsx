import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import MobileProduct from "./components/MobileProduct";
import Bags from './components/Bags';
import Shoes from './components/Shoes';
import Watch from './components/Watch';
import About from "./components/About";
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Headphones from './components/Headphones';
import Xbox from "./components/Xbox";
import Cart from './components/Cart';
import Lamp from './components/Lamp';
import Laptop from './components/Laptop';
import Cloth from './components/Cloth';
import Sofa from './components/Sofa';
import { CartProvider } from './components/CartContext';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

// Load your Stripe public key here
const stripePromise = loadStripe('your-public-key-here');

function App() {
  return (
    <CartProvider>
      <Elements stripe={stripePromise}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/luxetra-react" element={<Home />} />
            <Route path="/mp" element={<MobileProduct />} />
            <Route path="/bags" element={<Bags />} />
            <Route path="/shoes" element={<Shoes />} />
            <Route path="/watch" element={<Watch />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/headphones" element={<Headphones />} />
            <Route path="/xboxs" element={<Xbox />} />
            <Route path="/lamps" element={<Lamp />} />
            <Route path="/laptops" element={<Laptop />} />
            <Route path="/cloths" element={<Cloth />} />
            <Route path="/sofas" element={<Sofa />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </Elements>
    </CartProvider>
  );
}

export default App;
