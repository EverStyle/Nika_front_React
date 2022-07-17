import React from 'react'

import style from './ProductPackage.module.scss';

export default function ProductPackage({ name, active, onClick }) {
   return (
      <div
         className={`${style.productPackage} ${active ? style.active : null}`}
         onClick={onClick}
      >{name}</div>
   )
}
