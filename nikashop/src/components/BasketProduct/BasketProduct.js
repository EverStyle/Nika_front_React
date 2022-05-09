import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';

import { Button } from '../';
import basketProduct from './BasketProduct.module.scss';


export default function BasketProduct({ card, deleteCard, setCount }) {

   const [show, setShow] = useState(false);

   return (
      <>
         <div className={basketProduct.basket}>
            <img className={basketProduct.img} src={card.imgUrl} alt="product" />

            <div className={basketProduct.content}>
               <h2 className={basketProduct.title}> {card.name} </h2>
               {card.info.map(([name, value]) =>
                  <div className={basketProduct.property} key={name}>
                     {`${name}: ${value}`}
                  </div>
               )}
               <div
                  className={basketProduct.deleteBtn}
                  onClick={() => setShow(true)}
               >Удалить</div>
            </div>

            <div className={basketProduct.price}>
               <div className={basketProduct.currentPrice}>
                  {card.price} ₽
               </div>
               {
                  card.prePrice ?
                     <div className={basketProduct.prePrice}>
                        {card.prePrice} ₽
                     </div>
                     :
                     null
               }
            </div>

            <div className={basketProduct.counter}>
               <button
                  className={basketProduct.counterBtn}
                  disabled={card.count < 1}
                  onClick={() => setCount(card.id, card.count - 1)}
               >-</button>

               <input
                  className={basketProduct.input}
                  value={card.count}
                  type="text"
                  onChange={(event) => setCount(card.id, event.target.value)}
               />

               <button
                  className={basketProduct.counterBtn}
                  onClick={() => setCount(card.id, card.count + 1)}
               >+</button>
            </div>
         </div>

         <Modal show={show} onHide={() => setShow(false)}>
            <Modal.Header closeButton>
               <Modal.Title>Удаление товара</Modal.Title>
            </Modal.Header>
            <Modal.Body>Вы точно хотите удалить выбранные товары? Отменить действие будет невозможно</Modal.Body>
            <Modal.Footer>
               <Button type="squre" onClick={() => { deleteCard(card.id); setShow(false) }}>
                  Удалить
               </Button>
            </Modal.Footer>
         </Modal>
      </>
   )
}
