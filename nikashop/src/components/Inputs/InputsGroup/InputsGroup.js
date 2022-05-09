import React from 'react';
import inputsGroup from './InputsGroup.module.scss';

export default function InputsGroup({ children, title }) {
   return (
      <fieldset className={inputsGroup.inputsGroup}>
         <h2 className={inputsGroup.title}> {title} </h2>
         {children}
      </fieldset>
   )
}
