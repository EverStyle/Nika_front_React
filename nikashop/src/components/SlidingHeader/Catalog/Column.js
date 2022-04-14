import React from 'react';
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";


export default function Column({ title, links }) {
   return (
      <Col md={3}>
         <h3 className="Catalog__tittle"> {title} </h3>
         <ul className="Catalog__menu">
            {links.map((value) =>
               <li key={value} className="Catalog__element">
                  <Link to="/" className="Catalog__links"> {value} </Link>
               </li>
            )}
         </ul>
      </Col>
   )
}
