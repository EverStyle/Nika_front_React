import React from 'react'
import './ProductTag.scss'

export default function ProductTag({ tag, className }) {
   return (
      tag ? (
         <span
            className={"ProductTag " + className}
            style={{
               background: tag == 'Новинка' ? '#8BD155' : '#FF7E35'
            }}
         > {tag} </span>
      ) : null
   )
}
