import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import styles from './Catalog.module.scss';

export default function Column({ title, links }) {
   return (
      <Col md={3}>
         <h3 className={styles.tittle}> {title} </h3>
         <ul className={styles.menu}>
            {links.map((value) =>
               <li key={value} className={styles.element}>
                  <Link to="/" className={styles.link}> {value} </Link>
               </li>
            )}
         </ul>
      </Col>
   )
}
