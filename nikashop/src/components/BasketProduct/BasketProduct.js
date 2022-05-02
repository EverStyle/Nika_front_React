import React, { useEffect, useState } from 'react'
import './BasketProduct.scss'
import { Link } from 'react-router-dom';

import { Modal } from 'react-bootstrap';
import Button from '../Button/Button';

export default function BasketProduct({ card, deleteCard, setCount }) {

   const [show, setShow] = useState(false);


   return (
      <>
         <div className="BasketProduct">
            <img className="BasketProduct__img" src={card.imgUrl} alt="product" />
            <div className="BasketProduct__info">
               <h2 className="BasketProduct__title"> {card.name} </h2>
               {card.info.map(([name, value]) =>
                  <div className="BasketProduct__property" key={name}>{`${name}: ${value}`}</div>
               )}
               <div
                  className="BasketProduct__delete"
                  onClick={() => { console.log(show); setShow(true); console.log(show); }}
               >Удалить</div>
            </div>
            <div className="BasketProduct__price">
               <div className="BasketProduct__currentPrice"> {card.price} ₽ </div>
               {card.prePrice ? <div className="BasketProduct__prePrice"> {card.prePrice} ₽ </div> : null}
            </div>
            <div className="BasketProduct__counter">
               <button
                  className="BasketProduct__button"
                  disabled={card.count < 1}
                  onClick={() => setCount(card.id, card.count - 1)}
               >-</button>

               <input
                  className="BasketProduct__input"
                  value={card.count}
                  type="text"
                  onChange={(event) => setCount(card.id, event.target.value)}
               />

               <button
                  className="BasketProduct__button"
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
