import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/home';
import ContactUsPage from './pages/contact-us/contact';
import ProductList from './components/productList/productList';
import AboutUs from './pages/about-us/aboutUs';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

function App() {
  return (
<>


    <Router>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contactus" element={<ContactUsPage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/products" element={<ProductList />} />

        
      </Routes>
    </Router>
    </>
  );
}

export default App;
