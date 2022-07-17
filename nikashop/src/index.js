import { useState } from 'react';
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

  function deleteCard(id) {
    const newBasket = basket.filter(card => card.id != id);
    setBasket(newBasket);
  }

  function setCount(id, count) {
    const newBasket = JSON.parse(JSON.stringify(basket));
    const card = newBasket.find(card => card.id == id);
    card.count = count;
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



  async function addProductToBasket(product, basketId) {
    if (basket.length == 0) {
      createBasket(product);
      return 0;
    }

    try {
      let authToken = localStorage.getItem('authToken');
      let data = {
        products: product.id,
        package: product.package,
        quantity: product.count,
      };
      let params = {
        headers: { 'Authorization': `token ${authToken}` }
      }

      let response = await axios.put(`https://market.ruban.xyz/api/basket/${basketId}`, data, params);
    } catch (err) {
      console.error(`Error to add product to basket: ${err}`)
    }
  }



  async function createBasket(product) {
    try {
      let authToken = localStorage.getItem('authToken');
      let data = {
        products: product.id,
        package: product.package,
      };
      let params = {
        headers: { 'Authorization': `token ${authToken}` }
      }

      let response = await axios.post('https://market.ruban.xyz/api/basket/', data, params);
    } catch (err) {
      console.error(`Error to create basket: ${err}`)
    }
  }





  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <SlidingHeader basketSize={basket.length} />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="product/:id" element={<Product addProductToBasket={addProductToBasket} />} />
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

