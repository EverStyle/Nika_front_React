import React from 'react';
import select from './Select.module.scss';

export default function Select({ label, children, ...atrs }) {
   return (
      <div className={select.select} {...atrs}>
         <label className={select.label}>
            {label}
         </label>
         <select className={select.input}>
            {children}
         </select>
      </div>
   )
}
