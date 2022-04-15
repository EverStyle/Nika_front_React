import React from "react";

import SlidingHeader from "./components/SlidingHeader/SlidingHeader";
import Navbar from "./components/Navbar/Navbar";
import SlidingAdvantages from "./components/SlidingAdvantages/SlidingAdvantages"
import Slider from "./components/Slider/Slider";
import Card from "./components/Card/Card";

import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const testCards = [
  {
    name: "Набор Для ванной комнаты 2.0",
    tag: "Бестселлер",
    price: "639 ₽",
  },
  {
    name: "Набор “Для кухни 2.0”",
    tag: "Новинка",
    price: "3999 ₽",
  },
  {
    name: "Набор “Эко-уборка”",
    price: "639 ₽",
    discount: "30%"
  },
  {
    name: "Набор “Защита для дома”",
    price: "167 ₽",
  },
  {
    name: "Дозатор настенный в ассортименте",
    tag: "Бестселлер",
    price: "391 ₽",
    discount: "10%"
  },
  {
    name: "Комбинезон одноразовый с капюшоне",
    price: "99 ₽",
    discount: "25%"
  },
  {
    name: "Набор Для ванной комнаты 2.0",
    tag: "Новинка",
    price: "1999 ₽",
  },
  {
    name: "Набор Для ванной комнаты 2.0",
    tag: "Бестселлер",
    price: "639 ₽",
  },
  {
    name: "Набор “Для кухни 2.0”",
    tag: "Новинка",
    price: "3999 ₽",
  },
];

function App() {
  return (
    <div className="App">
      <Navbar />
      <SlidingHeader />
      <SlidingAdvantages />

      <Slider title="Реклама">
        <Col md={4}>
          <a href="https://google.com">
            <img className="Advertising" alt="advertising" src="https://dummyimage.com/416x196/FFE4EB/000" />
          </a>
        </Col>
        <Col md={4}>
          <a href="https://google.com">
            <img className="Advertising" alt="advertising" src="https://dummyimage.com/416x196/FFE4EB/000" />
          </a>
        </Col>
        <Col md={4}>
          <a href="https://google.com">
            <img className="Advertising" alt="advertising" src="https://dummyimage.com/416x196/FFE4EB/000" />
          </a>
        </Col>
      </Slider>


      <Slider linkToAll="products" title="Скидки недели">
        {testCards.map((card, index) =>
          <Card
            name={card.name}
            tag={card.tag}
            price={card.price}
            discount={card.discount}
            key={index}
          />
        )}
      </Slider>


      <Slider linkToAll="products" title="Бестселлеры">
        {testCards.map((card, index) =>
          <Card
            name={card.name}
            tag={card.tag}
            price={card.price}
            discount={card.discount}
            key={index}
          />
        )}
      </Slider>

      <Slider linkToAll="products" title="Для бизнеса">
        {testCards.map((card, index) =>
          <Card
            name={card.name}
            tag={card.tag}
            price={card.price}
            discount={card.discount}
            key={index}
          />
        )}
      </Slider>

    </div>
  );
}

export default App;
