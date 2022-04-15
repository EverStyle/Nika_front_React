import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';

import './Slider.scss'

export default function Slider({ children, linkToAll, title, className }) {

   const [shift, setShift] = React.useState(0);

   function slide(direction) {
      let width = document.querySelector('.Slider__row').firstChild.offsetWidth;
      if (direction == 'right') {
         setShift(pred => pred - width)
      } else {
         setShift(pred => pred + width)
      }
   }


   return (
      <div className={`Slider ` + className}>
         <Container className="Slider__container">
            {title ? <h2 className="Slider__title">{title}</h2> : null}
            <div className="Slider__content">
               <Row
                  className="Slider__row"
                  style={{
                     transform: `translateX(${shift}px)`
                  }}
               >
                  {children}
               </Row>
            </div>
            <div className="Slider__arrow Slider__arrow_left" onClick={() => slide('left')}></div>
            <div className="Slider__arrow Slider__arrow_right" onClick={() => slide('right')}></div>
            {linkToAll ? <Link className="Slider__all" to={linkToAll}>Смотреть все</Link> : null}
         </Container>
      </div>
   )
}
