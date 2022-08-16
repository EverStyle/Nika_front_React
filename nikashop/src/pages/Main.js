import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Col } from 'react-bootstrap';
import axios from 'axios';

import { Card, Slider, SlidingAdvantages } from '../components';

import styles from './Main.module.scss';

function App() {
  const [cards, setCards] = useState([]);

  useEffect(async () => {
    try {
      let response = await axios.get('https://market.ruban.xyz/api/products/');
      setCards(response.data.filter(card => card.package.length != 0)); // Тут фильтруем пока что
    } catch (err) {
      console.error('Error to load product list: ', err);
    }
  }, []);


  return (
    <main className="App">
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
        {cards.map(card =>
          <Col md={2} key={card.id}>
            <Card card={card} />
          </Col>
        )}
      </Slider>

      <Slider linkToAll="products" title="Бестселлеры">
        {cards.map(card =>
          <Col md={2} key={card.id}>
            <Card card={card} />
          </Col>
        )}
      </Slider>

      <Slider linkToAll="products" title="Для бизнеса">
        {cards.map(card =>
          <Col md={2} key={card.id}>
            <Card card={card} />
          </Col>
        )}
      </Slider>
    </main>
  );
}

export default App;
