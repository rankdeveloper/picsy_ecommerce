import React from 'react';
import './style.css';
import Photos from './Photos';
import Header from './components/Header';
import Cart from './pages/Cart'
import {Routes , Route} from 'react-router-dom'
export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<Photos/>} />
        <Route exact path="/cart" element={<Cart/>} />

        </Routes>

    
    </div>
  );
}
