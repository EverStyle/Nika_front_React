import React from 'react'
import { Link } from 'react-router-dom';
import styles from './Button.module.scss'

export default function Button({ children, type, className, to, color, ...args }) {
   return (
      to ?
         <Link
            to={to}
            className={[styles.button, className].join(' ')}
            style={{
               borderRadius: type == "squre" ? '4px' : '20px',
               textDecoration: 'none',
               color: '#fff',
               background: color == 'green' ? '#8BD155' : '#4faadf',
            }}
            {...args}
         > {children} </Link>

         :

         <button
            className={[styles.button, className].join(' ')}
            style={{
               borderRadius: type == "squre" ? '4px' : '20px',
            }}
            {...args}
         > {children} </button>
   )
}
