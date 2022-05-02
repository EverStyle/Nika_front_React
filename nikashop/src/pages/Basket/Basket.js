import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import BasketProduct from '../../components/BasketProduct/BasketProduct';
import BasketResult from '../../components/BasketResult/BasketResult';
import Slider from '../../components/Slider/Slider';
import Button from '../../components/Button/Button';
import Card from '../../components/Card/Card';


import './Basket.scss';

export default function Basket({ basket, deleteCard, setCount }) {
   const totalSum = basket.reduce((sum, card) => sum + card.price * card.count, 0);
   const totalDiscount = basket.reduce((sum, card) => sum + ((card.prePrice || card.price) - card.price) * card.count, 0);

   return (
      <main>
         <div className="Basket">
            <Container>
               <Row>
                  <h1 className="Basket__title">Корзина</h1>
                  <Col md={9}>
                     {basket.map(card => <BasketProduct card={card} key={card.id} deleteCard={deleteCard} setCount={setCount} />)}
                  </Col>

                  <Col md={3}>
                     <BasketResult total={totalSum} discount={totalDiscount} />
                     <Link className="Basket__instruction" to="https://google.com">Инструкция по закупке через портал поставщиков</Link>
                  </Col>
               </Row>
            </Container>
         </div>

         <Slider linkToAll="products" title="Рекомендуем" className="Product__recomends">
            {basket.map((card, index) =>
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
      </main>
   )
}
