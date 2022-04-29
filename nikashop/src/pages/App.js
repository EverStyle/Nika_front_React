import React, { useState, useEffect } from "react";
import axios from "axios";

import SlidingAdvantages from "../components/SlidingAdvantages/SlidingAdvantages"
import Slider from "../components/Slider/Slider";
import Card from "../components/Card/Card";

import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/products/')
      .then(result => setCards(result.data.filter(card => card.package.length != 0)))  //Алексей просил, пока что фильтровать здесь
      .catch(error => console.log('Error to load product list: ', error));
  }, []);


  return (
    <div className="App">
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
          <Card
            name={card.name}
            tag={card.tag}
            price={card.package[0].cost}
            discount={card.discount}
            imgUrl={'http://127.0.0.1:8000' + card.package[0].image.image}
            key={card.name}
          />
        )}
      </Slider>


      <Slider linkToAll="products" title="Бестселлеры">
        {cards.map(card =>
          <Card
            name={card.name}
            tag={card.tag}
            price={card.package[0].cost}
            discount={card.discount}
            imgUrl={'http://127.0.0.1:8000' + card.package[0].image.image}
            key={card.name}
          />
        )}
      </Slider>

      <Slider linkToAll="products" title="Для бизнеса">
        {cards.map(card =>
          <Card
            name={card.name}
            tag={card.tag}
            price={card.package[0].cost}
            discount={card.discount}
            imgUrl={'http://127.0.0.1:8000' + card.package[0].image.image}
            key={card.name}
          />
        )}
      </Slider>
    </div>
  );
}

export default App;
