import React from 'react'
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Discount from '../Discount/Discount'
import ProductTag from '../ProductTag/ProductTag'

import './Card.scss'



export default function Card({ name, price, tag, discount, ...args }) {

   return (


      <Col md={2}>
         <div className="Card" {...args}>
            <Link to="/product" className="Card__link">
               <ProductTag tag={tag} />
               <img className="Card__img" alt="product" src="https://dummyimage.com/196x196/FFE4EB/000" />

               <div className="Card__discription">
                  <span className="Card__price"> {price} </span>
                  <Discount discount={discount} />
                  <p className="Card__name"> {name} </p>
               </div>
            </Link>
         </div >
      </Col >
   )
}
