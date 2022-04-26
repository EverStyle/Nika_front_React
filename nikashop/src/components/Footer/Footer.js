import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import styles from './Footer.scss';


export default function Footer() {
   return (
      <footer className="Footer">
         <Container>
            <Row>
               <Col md={3}>
                  <div className="Footer__about">
                     © 2021 Производитель<br />бытовой xимии «Ника».
                  </div>
                  <div className="Footer__about">
                     © ИП Шереметa Н.В.
                  </div>
               </Col>
               <Col md={3}>
                  <h3 className="Footer__title">Покупателям</h3>
                  <nav className="Footer__nav">
                     <ul className="Footer__ul">
                        <li className="Footer__element">
                           <Link className="Footer__link" to="https://google.com">Оплата и доставка</Link>
                        </li>
                        <li className="Footer__element">
                           <Link className="Footer__link" to="https://google.com">Акции</Link>
                        </li>
                        <li className="Footer__element">
                           <Link className="Footer__link" to="https://google.com">Новости</Link>
                        </li>
                        <li className="Footer__element">
                           <Link className="Footer__link" to="https://google.com">Предприятиям</Link>
                        </li>
                        <li className="Footer__element">
                           <Link className="Footer__link" to="https://google.com">О компании</Link>
                        </li>
                        <li className="Footer__element">
                           <Link className="Footer__link" to="https://google.com">Политика конфиденциальности</Link>
                        </li>
                     </ul>
                  </nav>
               </Col>
               <Col md={3}>
                  <h3 className="Footer__title">Каталог</h3>
                  <nav className="Footer__nav">
                     <ul className="Footer__ul">
                        <li className="Footer__element">
                           <Link className="Footer__link" to="https://google.com">Дезинфицирующие средства</Link>
                        </li>
                        <li className="Footer__element">
                           <Link className="Footer__link" to="https://google.com">Бытовая химия</Link>
                        </li>
                        <li className="Footer__element">
                           <Link className="Footer__link" to="https://google.com">Хозяйственные товары</Link>
                        </li>
                     </ul>
                  </nav>
               </Col>
               <Col md={3}>
                  <h3 className="Footer__title">Контакты</h3>
                  <ul className="Footer__ul">
                     <li className="Footer__element">
                        <address className="Footer__address">г. Екатеринбург, ул. Ереванская д. 6, ст. 3</address>
                     </li>
                     <li className="Footer__element">
                        <a className="Footer__link">+7 (343) 312 28 12</a>
                     </li>
                     <li className="Footer__element">
                        <a className="Footer__link">info@nikaural.ru</a>
                     </li>
                  </ul>
               </Col>
            </Row>
         </Container>
      </footer>
   )
}
