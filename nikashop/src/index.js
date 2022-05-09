import { useState } from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from './pages/Main';
import Product from './pages/product/Product';
import Basket from './pages/basket/Basket';
import Payment from './pages/payment/Payment';

import { Footer, Navbar, SlidingHeader } from './components'
import { cards } from './testData.js';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';


function Index() {
  const [basket, setBasket] = useState(cards);

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

  return (
    <BrowserRouter>
      <Navbar />
      <SlidingHeader basketSize={basket.length} />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
      <Routes>
        <Route path="/product" element={<Product />} />
      </Routes>
      <Routes>
        <Route path="/basket" element={<Basket basket={basket} deleteCard={deleteCard} setCount={setCount} />} />
      </Routes>
      <Routes>
        <Route path="/payment" element={<Payment basket={basket} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

ReactDOM.render(
  <Index />,
  document.getElementById('root')
);

