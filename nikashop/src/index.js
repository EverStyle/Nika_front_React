import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Provider } from 'react-redux';
import { loadBasket } from './redux/basket';
import store from './redux/store';

import Main from './pages/Main';
import Login from './pages/login/Login';
import Basket from './pages/basket/Basket';
import Product from './pages/product/Product';
import Payment from './pages/payment/Payment';


import { Footer, Navbar, SlidingHeader } from './components'
import { cards } from './testData.js';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';

import axios from 'axios';

function Index() {
  async function logOut() {
    try {
      let authToken = localStorage.getItem('authToken');
      await axios.post('https://market.ruban.xyz/api/auth/token/logout/', {
        headers: { 'Authorization': `token ${authToken}` }
      })

      //setBasket([]);
      localStorage.removeItem('authToken');
      localStorage.removeItem('login');
      localStorage.removeItem('clientID');

    } catch (err) {
      console.error(`Error to log out: ${err}`)
    }
  }

  useEffect(async () => {
    store.dispatch(loadBasket());
  }, []);


  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <SlidingHeader logOut={logOut} />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="product/:id" element={<Product />} />
        <Route path="basket" element={<Basket />} />
        <Route path="payment" element={<Payment />} />
        <Route path="login" element={<Login />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

ReactDOM.render(
  <Provider store={store}>
    <Index />
  </Provider>
  ,
  document.getElementById('root')
);

