import React from 'react'
import './Button.scss'

export default function Button({ children, type, className, ...args }) {
   return (
      <button
         className={`Button ` + className}
         style={{
            borderRadius: type == "squre" ? '4px' : '20px'
         }}
         {...args}
      > {children} </button>
   )
}
