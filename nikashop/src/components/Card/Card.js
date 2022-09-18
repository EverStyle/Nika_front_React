import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Discount from '../Discount/Discount';
import ProductTag from '../ProductTag/ProductTag';

import styles from './Card.module.scss';



export default function Card({ card, ...args }) {
   const { name, discount, package: pack, tag, id } = card;
   const price = pack?.[0]?.cost;
   let imgUrl = pack?.[0]?.image?.image;
   imgUrl = imgUrl || 'https://dummyimage.com/700x700/FFE4EB/000';

   return (
      <Col md={8}>
         <div className={styles.card} {...args}>
            <Link to={`/product/${id}`} className={styles.link}>
               <ProductTag tag={tag} />
               <img className={styles.img} alt="product" src={imgUrl} />

               <div className={styles.discription}>
                  <span className={styles.price}> {price + ' ₽'} </span>
                  <Discount discount={discount} />
                  <p className={styles.name}> {name} </p>
               </div>
            </Link>
         </div >
      </Col >
   )
}
