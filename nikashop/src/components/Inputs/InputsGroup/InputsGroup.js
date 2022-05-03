import React from 'react'
import './InputsGroup.scss'

export default function InputsGroup({ children, title }) {
   return (
      <fieldset className="InputsGroup">
         <h2 className="InputsGroup__title"> {title} </h2>
         {children}
      </fieldset>
   )
}
