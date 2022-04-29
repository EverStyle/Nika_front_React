import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from './pages/App';
import Product from './pages/product/Product';
import Basket from './pages/Basket/Basket';
import reportWebVitals from './reportWebVitals';


import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import SlidingHeader from "./components/SlidingHeader/SlidingHeader";

import './index.scss';


function Index() {

  return (
    <BrowserRouter>
      <Navbar />
      <SlidingHeader />
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
      <Routes>
        <Route path="/product" element={<Product />} />
      </Routes>
      <Routes>
        <Route path="/basket" element={<Basket />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

ReactDOM.render(
  <Index />,
  document.getElementById('root')
);

reportWebVitals();

