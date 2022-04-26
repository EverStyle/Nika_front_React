import React from 'react'
import styles from "./Property.scss";

export default function Property({ name, value }) {
   return (
      <div className="Property">
         <span className="Property__name">{name}</span>
         <hr className="Property__line" />
         <span className="Property__value">{value}</span>
      </div>
   )
}
