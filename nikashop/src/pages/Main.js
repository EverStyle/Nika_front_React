import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Col } from 'react-bootstrap';
import axios from 'axios';
import Carousel from 'react-elastic-carousel'
import { Card, Slider, SlidingAdvantages } from '../components';
import styles from './Main.css';
import MainCategorys from '../components/MainCategorys/MainCategorys';
import AdvertSlider2 from '../components/MainAdvertising/AdvertSlider';
// import AdSlider from './AdSlider';



function App() {

  const [cards, setCards,] = useState([]);
  useEffect(() => {
    axios.get('https://market.ruban.xyz/api/products/')

      .then(result => setCards(result.data))  //Алексей просил, пока что фильтровать здесь
      .catch(error => console.log('Error to load product list: ', error));
    axios.get('https://market.ruban.xyz/api/products/')
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })

  }, []);


  // useEffect2(()=> {
  //   axios.get('https://market.ruban.xyz/api/products/')
  //     .then(res => {
  //       const persons = res.data;
  //       this.setState({ persons });
  //     })
  // },[]);


  // <Col md={8}>
  //   <div className="ContainerSlider">
  //     <Carousel itemsToShow={3} className="AdSlider" linkToAll="products">
  //       {cards.map(card => <Card card={card} key={card.id} />)}
  //     </Carousel>
  //   </div>
  // </Col >

  return (
    <main className="App">
      <MainCategorys></MainCategorys>
      <SlidingAdvantages />
      <AdvertSlider2></AdvertSlider2>
      <div className="ContainerSlider">
        <div>
          Скидки недели
        </div>
        <Carousel itemsToShow={5} className="AdSlider" linkToAll="products">
          {cards.map(card => <Card card={card} key={card.id} />)}
        </Carousel>
      </div>

      <AdvertSlider2></AdvertSlider2>
      <div className="ContainerSlider">
        <div>
          Бестселлеры
        </div>
        <Carousel itemsToShow={5} className="AdSlider" linkToAll="products">
          {cards.map(card => <Card card={card} key={card.id} />)}
        </Carousel>
      </div>
      <AdvertSlider2></AdvertSlider2>
      <div className="ContainerSlider">
        <div>
          Для бизнеса
        </div>
        <Carousel itemsToShow={5} className="AdSlider" linkToAll="products">
          {cards.map(card => <Card card={card} key={card.id} />)}
        </Carousel>
      </div>
    </main>
  );
}

export default App;
