import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import basketResult from './BasketResult.module.scss';
import { Button } from '../';

export default function BasketResult({ total = 0, discount = 0, buttonText = "Error", to = "/404", text = "" }) {
   return (
      <div className={basketResult.basketResult}>
         <h3 className={basketResult.title}>Общая стоимость</h3>
         <div className={`${basketResult.line}  ${basketResult.totalLine}`}>
            <span className="BasketResult__name">Товары</span>
            <span className="BasketResult__value">{`${total} ₽`}</span>
         </div>

         <div className={`${basketResult.line}  ${basketResult.discountLine}`}>
            <span className={basketResult.lineName}>Скидки</span>
            <span className={basketResult.lineValue}>{`-${discount} ₽`}</span>
         </div>

         <hr />

         <div className={`${basketResult.line}  ${basketResult.resultLine}`}>
            <span className={basketResult.lineName}>Итого</span>
            <span className={basketResult.lineValue}>{`${total - discount} ₽`}</span>
         </div>

         <Button type="squre" to={to} className={basketResult.button}>{buttonText}</Button>

         <p className={basketResult.info}>
            {text}
         </p>
      </div >
   )
}
