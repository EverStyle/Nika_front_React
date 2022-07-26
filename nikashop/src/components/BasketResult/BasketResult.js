import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import basketResult from './BasketResult.module.scss';
import { Button } from '../';
import axios from 'axios';

export default function BasketResult({ basket, buttonText = "Error", to = "/404", text = "" }) {

   const [totalSum, setTotalSum] = useState(0);
   const [totalDiscount, setTotalDiscount] = useState(0);
   const [resultSum, setResultSum] = useState(0);

   useEffect(async () => {
      try {
         let copyCards = [];
         setResultSum(0);
         setTotalSum(0);
         setTotalDiscount(0);

         for (let el of basket) {
            const response = await axios.get(`https://market.ruban.xyz/api/products/${el.products}`);
            const card = response.data;
            const packageIndex = card.package.findIndex(pack => pack.id == el.package);
            setResultSum(pre => pre + parseInt(card.package[packageIndex].cost));
            setTotalSum(pre => pre + Math.round(card.package[packageIndex].cost * 100 / (100 - card.discount)));
            setTotalDiscount(pre => pre + (
               card.discount ?
                  Math.round(card.package[packageIndex].cost * 100 / (100 - card.discount) - card.package[packageIndex].cost)
                  :
                  0
            ));
         }
      } catch (err) {
         console.error(`Error to load result block: ${err}`)
      }
   }, [basket]);



   return (
      <div className={basketResult.basketResult}>
         <h3 className={basketResult.title}>Общая стоимость</h3>
         <div className={`${basketResult.line}  ${basketResult.totalLine}`}>
            <span className="BasketResult__name">Товары</span>
            <span className="BasketResult__value">{`${totalSum} ₽`}</span>
         </div>


         {totalDiscount == 0 ?
            null
            :
            <div className={`${basketResult.line}  ${basketResult.discountLine}`}>
               <span className={basketResult.lineName}>Скидки</span>
               <span className={basketResult.lineValue}>{`-${totalDiscount} ₽`}</span>
            </div>
         }


         <hr />

         <div className={`${basketResult.line}  ${basketResult.resultLine}`}>
            <span className={basketResult.lineName}>Итого</span>
            <span className={basketResult.lineValue}>{`${resultSum} ₽`}</span>
         </div>

         <Button type="squre" to={to} className={basketResult.button}>{buttonText}</Button>

         <p className={basketResult.info}>
            {text}
         </p>
      </div >
   )
}
