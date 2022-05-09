import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { BasketProduct, BasketResult, Slider, Card } from '../../components';
import { sliderCards } from '../../testData';
import basket from './Basket.module.scss';

export default function Basket({ basket: basketValue, deleteCard, setCount }) {
   const totalSum = basketValue.reduce((sum, card) => sum + card.price * card.count, 0);
   const totalDiscount = basketValue.reduce((sum, card) => sum + ((card.prePrice || card.price) - card.price) * card.count, 0);

   return (
      <main>
         <div className={basket.basket}>
            <Container>
               <Row>
                  <h1 className={basket.title}>Корзина</h1>
                  <Col md={9}>
                     {basketValue.map(card =>
                        <BasketProduct
                           card={card}
                           key={card.id}
                           deleteCard={deleteCard}
                           setCount={setCount}
                        />
                     )}
                  </Col>

                  <Col md={3}>
                     <BasketResult
                        total={totalSum}
                        discount={totalDiscount}
                        buttonText="Перейти к оформлению"
                        to="/payment"
                        text="Доступные способы и время доставки можно выбрать при оформлении заказа"
                     />
                  </Col>
               </Row>
            </Container>
         </div>

         <Slider linkToAll="products" title="Рекомендуем" className="Product__recomends">
            {sliderCards.map((card, index) => <Card card={card} key={index} />)}
         </Slider>
      </main>
   )
}
