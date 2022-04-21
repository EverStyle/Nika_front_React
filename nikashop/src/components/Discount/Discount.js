import React from 'react'

import './Discount.scss'

export default function Discount({ discount, className = '' }) {
   return (
      discount ? <span className={'Discount ' + className}> {discount} </span> : null
   )
}
