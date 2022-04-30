import React, { useEffect, useState } from 'react'
import './BasketProduct.scss'
import { Link } from 'react-router-dom';

export default function BasketProduct({ card, deleteCard }) {

   const [count, setCount] = useState(card.count);

   return (
      <div className="BasketProduct">
         <img className="BasketProduct__img" src={card.imgUrl} alt="product" />
         <div className="BasketProduct__info">
            <h2 className="BasketProduct__title"> {card.name} </h2>
            {card.info.map(([name, value]) =>
               <div className="BasketProduct__property" key={name}>{`${name}: ${value}`}</div>
            )}
            <div className="BasketProduct__delete" onClick={() => deleteCard(card.id)}>Удалить</div>
         </div>
         <div className="BasketProduct__price">
            <div className="BasketProduct__currentPrice"> {card.price} </div>
            {card.prePrice ? <div className="BasketProduct__prePrice"> {card.prePrice} </div> : null}
         </div>
         <div className="BasketProduct__counter">
            <button className="BasketProduct__button" onClick={() => setCount(preValue => preValue - 1)}>-</button>
            <input className="BasketProduct__input" value={count} type="text" onChange={(event) => setCount(event.target.value)} />
            <button className="BasketProduct__button" onClick={() => setCount(preValue => preValue + 1)}>+</button>
         </div>

      </div>
   )
}
