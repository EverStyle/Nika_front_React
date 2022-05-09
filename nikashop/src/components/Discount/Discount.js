import React from 'react'

import styles from './Discount.module.scss'

export default function Discount({ discount, className }) {
   return (
      discount ?
         <span className={[styles.discount, className].join(' ')}>
            {discount + '%'}
         </span>
         :
         null
   )
}
