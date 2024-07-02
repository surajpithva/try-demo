import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/home';
import ContactUsPage from './pages/contact-us/contact';
import ProductList from './components/productList/productList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contactus" element={<ContactUsPage />} />
        <Route path="/products" element={<ProductList />} />

        
      </Routes>
    </Router>
  );
}

export default App;
