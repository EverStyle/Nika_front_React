import React from 'react'

import './Discount.scss'

export default function Discount({ discount }) {
   return (
      discount ? <span className="Discount"> {discount} </span> : null
   )
}
