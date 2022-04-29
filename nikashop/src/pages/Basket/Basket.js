import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Slider from '../../components/Slider/Slider';
import Button from '../../components/Button/Button';
import Card from '../../components/Card/Card';

import './Basket.scss';

const testCards = [
   {
      name: "Набор Для ванной комнаты 2.0",
      tag: "Бестселлер",
      price: "639",
      imgUrl: 'https://dummyimage.com/700x700/FFE4EB/000',
   },
   {
      name: "Набор “Для кухни 2.0”",
      tag: "Новинка",
      price: "3999",
      imgUrl: 'https://dummyimage.com/700x700/FFE4EB/000',
   },
   {
      name: "Набор “Эко-уборка”",
      price: "639",
      discount: "30",
      imgUrl: 'https://dummyimage.com/700x700/FFE4EB/000',
   },
   {
      name: "Набор “Защита для дома”",
      price: "167",
      imgUrl: 'https://dummyimage.com/700x700/FFE4EB/000',
   },
   {
      name: "Дозатор настенный в ассортименте",
      tag: "Бестселлер",
      price: "391",
      discount: "10",
      imgUrl: 'https://dummyimage.com/700x700/FFE4EB/000',
   },
   {
      name: "Комбинезон одноразовый с капюшоне",
      price: "99",
      discount: "25",
      imgUrl: 'https://dummyimage.com/700x700/FFE4EB/000',
   },
   {
      name: "Набор Для ванной комнаты 2.0",
      tag: "Новинка",
      price: "1999",
      imgUrl: 'https://dummyimage.com/700x700/FFE4EB/000',
   },
   {
      name: "Набор Для ванной комнаты 2.0",
      tag: "Бестселлер",
      imgUrl: 'https://dummyimage.com/700x700/FFE4EB/000',
      price: "639",
   },
   {
      name: "Набор “Для кухни 2.0”",
      tag: "Новинка",
      price: "3999",
      imgUrl: 'https://dummyimage.com/700x700/FFE4EB/000',
   },
];


export default function Basket() {
   return (
      <div className="Basket">
         <Container>
            <Row>
               <h1>Корзина</h1>
               {/* CONTENT */}
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
