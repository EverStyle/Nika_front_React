import { useState, useEffect, React } from 'react';
import { Container, Row, Col, Tabs, Tab } from 'react-bootstrap';

import Column from './Column';

import styles from './Catalog.module.scss';

import axios from 'axios';

export default function Catalog({ visibility }) {

   const topics = ['По областям пртименения', 'Распродажа и скидки', 'Бестселлеры', 'Для бизнеса'];
   const links = ['Антисептики', 'Дезинфицирующие средства', 'Маски', 'Облучатели-рециркуляторы', 'Туалетная бумага'];
   const titles = ['Covid-19', 'Бытовая химия', 'Дезинфицирующие средства', 'Хозяйственные товары'];

   return (
      <div className={[styles.catalog, (visibility ? styles.visible : styles.hidden)].join(' ')} >
         <Container>
            <Row>
               <Col md={12}>

                  <Tabs
                     defaultActiveKey="По областям пртименения"
                     transition={true}
                     id="Product__description"
                     className="mb-3"
                     bsPrefix="myTabs"
                  >
                     {topics.map((value, index) =>
                        <Tab
                           key={value}
                           index={index}
                           eventKey={value}
                           title={value}
                        >
                           <div className={styles.tab}>
                              {titles.map(titleValue => <Column title={titleValue} links={links} key={titleValue} />)}
                           </div>
                        </Tab>
                     )}
                  </Tabs>

               </Col>
            </Row>
         </Container>
      </div>
   )
}
