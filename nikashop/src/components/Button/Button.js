import React from 'react'
import { Link } from 'react-router-dom';
import './Button.scss'

export default function Button({ children, type, className, to, ...args }) {
   return (
      to ?
         <Link
            to={to}
            className={['Button', className].join(' ')}
            style={{
               borderRadius: type == "squre" ? '4px' : '20px',
               textDecoration: 'none',
               color: '#fff',
            }}
            {...args}
         > {children} </Link>

         :

         <button
            className={['Button', className].join(' ')}
            style={{
               borderRadius: type == "squre" ? '4px' : '20px',
            }}
            {...args}
         > {children} </button>
   )
}
