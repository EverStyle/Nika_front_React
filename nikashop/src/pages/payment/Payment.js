import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { InputsGroup, TextInput, FileInput, Select, Radio } from '../../components/Inputs'
import { BasketResult, Button } from '../../components';
import payment from './Payment.module.scss';

export default function Payment({ basket }) {
   const totalSum = basket.reduce((sum, card) => sum + card.price * card.count, 0);
   const totalDiscount = basket.reduce((sum, card) => sum + ((card.prePrice || card.price) - card.price) * card.count, 0);

   return (
      <main className={payment.payment}>
         <Container>
            <Row>
               <Link className={payment.linkBack} to="/basket">Вернуться в корзину</Link>
               <h1 className="Payment__title">Оформление заказа</h1>
               <Col md={9}>
                  <InputsGroup title="Тест TextInput">
                     <TextInput label="Имя" name="name" />
                     <TextInput label="Фамилия" name="secondName" />
                     <TextInput label="Отчество" name="thirdName" />
                     <TextInput label="Телефон" name="phone" mask="+7 999 999 99 99" />
                  </InputsGroup>

                  <InputsGroup title="Тест Select">
                     <Select label="Фрукт" name="fruit">
                        <option value="grapefruit">Грейпфрут</option>
                        <option value="lime">Лайм</option>
                        <option value="coconut">Кокос</option>
                        <option value="mango">Манго</option>
                     </Select>
                  </InputsGroup>

                  <InputsGroup title="Тест Radio">
                     <Radio name="work" label="Фронт" value="Frontend" />
                     <Radio name="work" label="Бэк" value="Backend" />
                     <Radio name="work" label="Фулл" value="Fullstack" />
                  </InputsGroup>

                  <InputsGroup title="Тест FileInput">
                     <FileInput name="importantDocument" />
                  </InputsGroup>


               </Col>
               <Col md={3}>
                  <BasketResult
                     total={totalSum}
                     discount={totalDiscount}
                     buttonText="Оплатить онлайн"
                     text={<>
                        Нажимая на кнопку, вы соглашаетесь
                        c <Link to="https://www.google.com">Условиями обработки перс. данных</Link>, а также
                        c <Link to="https://www.google.com">Условиями продажи</Link>
                     </>}
                  />
               </Col>
            </Row>
         </Container>
      </main>
   )
}
