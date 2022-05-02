import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from './pages/App';
import Product from './pages/product/Product';
import Basket from './pages/basket/Basket';
import reportWebVitals from './reportWebVitals';


import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import SlidingHeader from "./components/SlidingHeader/SlidingHeader";

import './index.scss';

const basketFromFetch = [
  {
    id: 1,
    name: "Набор Для ванной комнаты 2.0",
    price: 639,
    prePrice: 1028,
    discount: 30,
    imgUrl: 'https://dummyimage.com/700x700/FFE4EB/000',
    count: 1,
    info: [
      ['Назначение', 'Для мытья стекол и зеркал'],
      ['Срок годности', '24 месяца'],
      ['Бренд', 'Ника'],
    ],
    url: 'https://google.com',
  },
  {
    id: 2,
    name: "Набор “Для кухни 2.0”",
    price: 3999,
    imgUrl: 'https://dummyimage.com/700x700/FFE4EB/000',
    count: 2,
    info: [
      ['Назначение', 'Для мытья стекол и зеркал'],
    ],
    url: 'https://google.com',
  },
  {
    id: 3,
    name: "Набор “Эко-уборка”",
    price: 639,
    prePrice: 939,
    discount: 30,
    imgUrl: 'https://dummyimage.com/700x700/FFE4EB/000',
    count: 1,
    info: [
      ['Срок годности', '24 месяца'],
      ['Бренд', 'Ника'],
    ],
    url: 'https://google.com',
  },
];


function Index() {

  const [basket, setBasket] = useState(basketFromFetch);

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
        <Route path="/" element={<App />} />
      </Routes>
      <Routes>
        <Route path="/product" element={<Product />} />
      </Routes>
      <Routes>
        <Route path="/basket" element={<Basket basket={basket} deleteCard={deleteCard} setCount={setCount} />} />
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

