import React, { useEffect, useState } from 'react'
import './BasketResult.scss'
import { Link } from 'react-router-dom';

import Button from '../../components/Button/Button';

export default function BasketResult({ total = 0, discount = 0 }) {
   return (
      <div className="BasketResult">
         <h3 className="BasketResult__title">Общая стоимость</h3>
         <div className="BasketResult__line BasketResult__line_total">
            <span className="BasketResult__name">Товары</span>
            <span className="BasketResult__value">{total}</span>
         </div>

         <div className="BasketResult__line BasketResult__line_discount">
            <span className="BasketResult__name">Скидки</span>
            <span className="BasketResult__value">{discount}</span>
         </div>

         <hr />

         <div className="BasketResult__line BasketResult__line_result">
            <span className="BasketResult__name">Итого</span>
            <span className="BasketResult__value">{`${total - discount} ₽`}</span>
         </div>

         <Button type="squre">Перейти к оформлению</Button>

         <p className="BasketResult__info">
            Доступные способы и время доставки можно выбрать при оформлении заказа
         </p>

      </div >
   )
}
