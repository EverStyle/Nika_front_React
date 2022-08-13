import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { BasketProduct, BasketResult, Slider, Card } from '../../components';
import { sliderCards } from '../../testData';
import style from './Basket.module.scss';

import axios from 'axios';
import { useSelector } from 'react-redux';

export default function Basket() {
   const [cards, setCards] = useState([]);
   const basket = useSelector(state => state.basket);

   useEffect(async () => {
      try {
         let copyCards = [];

         for (let el of basket) {
            const response = await axios.get(`https://market.ruban.xyz/api/products/${el.products}`);
            const card = response.data;
            card.quantity = el.quantity;
            const packageIndex = card.package.findIndex(pack => pack.id == el.package);
            card.packageIndex = packageIndex;
            card.basketId = el.id;
            card.package.forEach(pack => pack.image.image = 'https://market.ruban.xyz' + pack.image.image);
            copyCards.push(card);
         }
         setCards(copyCards);
      } catch (err) {
         console.error(`Error to get products from basket ${err}`)
      }
   }, [basket]);

   return (
      <main>
         <div className={style.basket}>
            <Container>
               <Row>
                  <h1 className={style.title}>Корзина</h1>
                  <Col md={9}>
                     {cards.length == 0 ?
                        <h2 className={style.emptyBasket}>Корзина пока пуста! Перейдите в каталог и добавьте что-нибудь :-)</h2>
                        :
                        cards.map(card =>
                           <BasketProduct
                              card={card}
                              key={`${card.name}_${card.packageIndex}`}
                           />
                        )
                     }
                  </Col>

                  <Col md={3}>
                     <BasketResult
                        basket={basket}
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
