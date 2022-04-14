import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Column from "./Column";

import "./Catalog.scss";



export default function Catalog({ className }) {
   const topics = ['По категориям', 'По областям пртименения', 'Распродажа и скидки', 'Бестселлеры', 'Для бизнеса'];
   const links = ['Антисептики', 'Дезинфицирующие средства', 'Маски', 'Облучатели-рециркуляторы', 'Туалетная бумага'];
   const titles = ['Covid-19', 'Бытовая химия', 'Дезинфицирующие средства', 'Хозяйственные товары'];

   const [activeIndex, setActiveIndex] = React.useState(0);

   function filter(index) {
      setActiveIndex(index);
      console.log('Filter!')
   }

   return (
      <div className={className + ' Catalog'} >
         <Container>
            <Row>
               <Col md={12}>
                  <ul className="Catalog__tabs">
                     {topics.map((value, index) =>
                        <li
                           className={`Catalog__tab  ${index == activeIndex ? 'Catalog__tab_active' : ''}`}
                           onClick={() => filter(index)}
                           key={value}
                           index={index}
                        > {value} </li>
                     )}
                  </ul>
               </Col>
            </Row>



            <Row>
               {titles.map(value => <Column title={value} links={links} key={value} />)}
            </Row>
         </Container>
      </div>
   )
}
