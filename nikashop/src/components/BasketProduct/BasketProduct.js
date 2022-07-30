import React, { useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';

import { Link } from 'react-router-dom';
import { Button } from '../';
import basketProduct from './BasketProduct.module.scss';



export default function BasketProduct({ card, deleteCard, setCount }) {

   const [show, setShow] = useState(false);
   const packageIndex = card.packageIndex;

   return (
      <>
         <div className={basketProduct.basket} to={`product/${card.id}`}>
            <Link to={`/product/${card.id}`} className={basketProduct.imgLink}>
               <img className={basketProduct.img} src={card.package[packageIndex].image.image} alt="product" />
            </Link>

            <div className={basketProduct.content}>
               <h2 className={basketProduct.title}>
                  <Link to={`/product/${card.id}`}>{card.name}</Link>
               </h2>
               {/* {card.info.map(([name, value]) =>
                  <div className={basketProduct.property} key={name}>
                     {`${name}: ${value}`}
                  </div>
               )} */}
               <div
                  className={basketProduct.deleteBtn}
                  onClick={() => setShow(true)}
               >Удалить</div>
            </div>

            <div className={basketProduct.price}>
               <div className={basketProduct.currentPrice}>
                  {card.package[packageIndex].cost} ₽
               </div>
               {
                  card.discount ?
                     <div className={basketProduct.prePrice}>
                        {Math.round(card.package[packageIndex].cost * 100 / (100 - card.discount))} ₽
                     </div>
                     :
                     null
               }
            </div>

            <div className={basketProduct.counter}>
               <button
                  className={basketProduct.counterBtn}
                  disabled={card.quantity < 1}
                  onClick={() => setCount(card.id, card.quantity - 1)}
               >-</button>

               <input
                  className={basketProduct.input}
                  value={card.quantity}
                  type="text"
                  onChange={(event) => setCount(card.id, event.target.value)}
               />

               <button
                  className={basketProduct.counterBtn}
                  onClick={() => setCount(card.id, card.quantity + 1)}
               >+</button>
            </div>
         </div>

         <Modal show={show} onHide={() => setShow(false)}>
            <Modal.Header closeButton>
               <Modal.Title>Удаление товара</Modal.Title>
            </Modal.Header>
            <Modal.Body>Вы точно хотите удалить выбранные товары? Отменить действие будет невозможно</Modal.Body>
            <Modal.Footer>
               <Button type="squre" onClick={() => { deleteCard(card.basketId); setShow(false) }}>
                  Удалить
               </Button>
            </Modal.Footer>
         </Modal>
      </>
   )
}
