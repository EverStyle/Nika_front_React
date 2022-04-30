import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import BasketProduct from '../../components/BasketProduct/BasketProduct';
import Slider from '../../components/Slider/Slider';
import Button from '../../components/Button/Button';
import Card from '../../components/Card/Card';

import './Basket.scss';

const testCardsWhichWeLoad = [
   {
      id: 1,
      name: "Набор Для ванной комнаты 2.0",
      price: "639",
      prePrice: "1028",
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
      price: "3999",
      prePrice: "4777",
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
      price: "639",
      discount: "30",
      imgUrl: 'https://dummyimage.com/700x700/FFE4EB/000',
      count: 1,
      info: [
         ['Срок годности', '24 месяца'],
         ['Бренд', 'Ника'],
      ],
      url: 'https://google.com',
   },
];


export default function Basket() {

   const [testCards, setTestCards] = useState(testCardsWhichWeLoad);

   function deleteCard(id) {
      const newCards = testCards.filter(card => card.id != id);
      setTestCards(newCards);
   }

   return (
      <div className="Basket">
         <Container>
            <Row>
               <h1>Корзина</h1>
               <Col md={9}>
                  {testCards.map(card => <BasketProduct card={card} key={card.id} deleteCard={deleteCard} />)}
               </Col>

               <Col md={3}>
                  {/* Меню справа */}
               </Col>
            </Row>
         </Container>


         <Slider linkToAll="products" title="Рекомендуем" className="Product__recomends">
            {testCards.map((card, index) =>
               <Card
                  name={card.name}
                  tag={card.tag}
                  price={card.price}
                  discount={card.discount}
                  imgUrl={card.imgUrl}
                  key={index}
               />
            )}
         </Slider>
      </div>
   )
}
