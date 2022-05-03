import React from 'react'
import './Select.scss'

export default function Select({ label, children, ...atrs }) {
   return (
      <div className="Select" {...atrs}>
         <label className="Select__label">
            {label}
         </label>
         <select className="Select__input">
            {children}
         </select>
      </div>
   )
}
