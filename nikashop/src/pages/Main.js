import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Col } from 'react-bootstrap';
import axios from 'axios';

import { Card, Slider, SlidingAdvantages } from '../components';

import styles from './Main.module.scss';

function App() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    axios.get('https://market.ruban.xyz/api/products/')
      .then(result => setCards(result.data.filter(card => card.package.length != 0)))  //Алексей просил, пока что фильтровать здесь
      .catch(error => console.log('Error to load product list: ', error))
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
        {cards.map(card => <Card card={card} key={card.id} />)}
      </Slider>

      <Slider linkToAll="products" title="Бестселлеры">
        {cards.map(card => <Card card={card} key={card.id} />)}
      </Slider>

      <Slider linkToAll="products" title="Для бизнеса">
        {cards.map(card => <Card card={card} key={card.id} />)}
      </Slider>
    </main>
  );
}

export default App;
