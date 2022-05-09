import React from 'react'
import property from "./Property.module.scss";

export default function Property({ name, value }) {
   return (
      <div className={property.property}>
         <span className={property.name}>{name}</span>
         <hr className={property.line} />
         <span className={property.value}>{value}</span>
      </div>
   )
}
