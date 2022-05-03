import React from 'react'
import './Radio.scss'

export default function Radio({ value, label, name, ...atrs }) {
   return (
      <div className="Radio">
         <input
            className="Radio__input"
            id={value}
            type="radio"
            name={name}
            value={value}
            {...atrs}
         />
         <label className="Radio__label" htmlFor={value}>{label}</label>
      </div>
   )
}
