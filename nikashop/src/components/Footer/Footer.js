import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import footer from './Footer.module.scss';


export default function Footer() {
   return (
      <footer className={footer.footer}>
         <Container>
            <Row>
               <Col md={3}>
                  <div className={footer.about}>
                     © 2021 Производитель<br />бытовой xимии «Ника».
                  </div>
                  <div className={footer.about}>
                     © ИП Шереметa Н.В.
                  </div>
               </Col>
               <Col md={3}>
                  <h3 className={footer.title}>Покупателям</h3>
                  <nav className={footer.nav}>
                     <ul className={footer.ul}>
                        <li className={footer.element}>
                           <Link className={footer.link} to="https://google.com">Оплата и доставка</Link>
                        </li>
                        <li className={footer.element}>
                           <Link className={footer.link} to="https://google.com">Акции</Link>
                        </li>
                        <li className={footer.element}>
                           <Link className={footer.link} to="https://google.com">Новости</Link>
                        </li>
                        <li className={footer.element}>
                           <Link className={footer.link} to="https://google.com">Предприятиям</Link>
                        </li>
                        <li className={footer.element}>
                           <Link className={footer.link} to="https://google.com">О компании</Link>
                        </li>
                        <li className={footer.element}>
                           <Link className={footer.link} to="https://google.com">Политика конфиденциальности</Link>
                        </li>
                     </ul>
                  </nav>
               </Col>
               <Col md={3}>
                  <h3 className={footer.title}>Каталог</h3>
                  <nav className={footer.nav}>
                     <ul className={footer.ul}>
                        <li className={footer.element}>
                           <Link className={footer.link} to="https://google.com">Дезинфицирующие средства</Link>
                        </li>
                        <li className={footer.element}>
                           <Link className={footer.link} to="https://google.com">Бытовая химия</Link>
                        </li>
                        <li className={footer.element}>
                           <Link className={footer.link} to="https://google.com">Хозяйственные товары</Link>
                        </li>
                     </ul>
                  </nav>
               </Col>
               <Col md={3}>
                  <h3 className={footer.title}>Контакты</h3>
                  <ul className={footer.ul}>
                     <li className={footer.element}>
                        <address className={footer.address}>г. Екатеринбург, ул. Ереванская д. 6, ст. 3</address>
                     </li>
                     <li className={footer.element}>
                        <a className={footer.link}>+7 (343) 312 28 12</a>
                     </li>
                     <li className={footer.element}>
                        <a className={footer.link}>info@nikaural.ru</a>
                     </li>
                  </ul>
               </Col>
            </Row>
         </Container>
      </footer>
   )
}
