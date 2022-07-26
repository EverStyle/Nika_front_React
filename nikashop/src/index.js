import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Routes, Route } from "react-router-dom";

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
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    if (localStorage.getItem('authToken')) {
      loadBasket();
    }
  }, []);




  async function deleteCard(cardId) {
    try {
      let authToken = localStorage.getItem('authToken');
      await axios.delete(`https://market.ruban.xyz/api/basket/${cardId}`, {
        headers: { 'Authorization': `token ${authToken}` }
      });
      loadBasket();
    } catch (err) {
      console.error(`Error to delete card from basket: ${err}`);
    }
  }

  function setCount(id, count) {
    const newBasket = JSON.parse(JSON.stringify(basket));
    const card = newBasket.find(card => card.id == id);
    card.count = count;//
    setBasket(newBasket);
  }



  async function loadBasket() {
    try {
      let authToken = localStorage.getItem('authToken');
      let response = await axios.get('https://market.ruban.xyz/api/basket/', {
        headers: { 'Authorization': `token ${authToken}` }
      })

      let newBasket = response.data;
      setBasket(newBasket);

    } catch (err) {
      console.error(`Error to load basket: ${err}`)
    }
  }



  async function addProductToBasket(productId, packageId, quantity) {
    try {
      let authToken = localStorage.getItem('authToken');
      let data = {
        products: parseInt(productId),
        package: packageId,
        quantity: quantity,
      };
      console.log(data, authToken);
      let params = {
        headers: { 'Authorization': `token ${authToken}` }
      };

      let response = await axios.post('https://market.ruban.xyz/api/basket/', data, params);
      console.log('here');
    } catch (err) {
      console.error(`Error to add product in basket: ${err}`)
    }


    loadBasket();
  }



  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <SlidingHeader basketSize={basket.length} />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="product/:id" element={<Product addProductToBasket={addProductToBasket} basket={basket} />} />
        <Route path="basket" element={<Basket basket={basket} deleteCard={deleteCard} setCount={setCount} />} />
        <Route path="payment" element={<Payment basket={basket} />} />
        <Route path="login" element={<Login loadBasket={loadBasket} />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

ReactDOM.render(
  <Index />,
  document.getElementById('root')
);

