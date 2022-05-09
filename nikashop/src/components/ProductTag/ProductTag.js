import React from 'react';
import productTag from './ProductTag.module.scss';

export default function ProductTag({ tag, className }) {
   return (
      tag ? (
         <span
            className={[productTag.productTag, className].join(' ')}
            style={{
               background: tag == 'Новинка' ? '#8BD155' : '#FF7E35'
            }}
         > {tag} </span>
      ) : null
   )
}
