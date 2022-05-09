import React from 'react';
import radio from './Radio.module.scss';

export default function Radio({ value, label, name, ...atrs }) {
   return (
      <div className={radio.radioGroup}>
         <input
            className={radio.input}
            id={value}
            type="radio"
            name={name}
            value={value}
            {...atrs}
         />
         <label className={radio.label} htmlFor={value}>{label}</label>
      </div>
   )
}
