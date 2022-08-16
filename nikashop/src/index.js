import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { Provider } from 'react-redux';
import { loadBasket } from './redux/basket';
import { loggedFromLocalStorage } from './redux/user';
import store from './redux/store';


import Main from './pages/Main';
import Login from './pages/login/Login';
import Basket from './pages/basket/Basket';
import Product from './pages/product/Product';
import Payment from './pages/payment/Payment';
import Search from './pages/search/Search';
import Registration from './pages/registration/Registration';

import { Footer, Navbar, Header } from './components'

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';


function Index() {
  useEffect(async () => {
    store.dispatch(loggedFromLocalStorage());
    if (store.getState().user.token) {
      store.dispatch(loadBasket());
    }
  }, []);


  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Header />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="product/:id" element={<Product />} />
        <Route path="basket" element={<Basket />} />
        <Route path="payment" element={<Payment />} />
        <Route path="login" element={<Login />} />
        <Route path="search" element={<Search />} />
        <Route path="registration" element={<Registration />} />
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

