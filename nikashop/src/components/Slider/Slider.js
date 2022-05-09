import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import slider from './Slider.module.scss';

export default function Slider({ children, linkToAll, title, className }) {

   const [shift, setShift] = React.useState(0);

   function slide(direction, event) {
      let width = event.target.parentElement.getElementsByClassName(slider.row)[0].firstChild.offsetWidth;
      if (direction == 'right') {
         setShift(pred => pred - width)
      } else {
         setShift(pred => pred + width)
      }
   }

   return (
      <div className={[slider.slider, className].join(' ')}>
         <Container className={slider.container}>
            {title ? <h2 className={slider.title}>{title}</h2> : null}
            <div className={slider.content}>
               <Row
                  className={slider.row}
                  style={{
                     transform: `translateX(${shift}px)`
                  }}
               >
                  {children}
               </Row>
            </div>
            <div className={`${slider.arrow} ${slider.leftArrow}`} onClick={(e) => slide('left', e)}></div>
            <div className={`${slider.arrow} ${slider.rightArrow}`} onClick={(e) => slide('right', e)}></div>
            {linkToAll ? <Link className={slider.linkToAll} to={linkToAll}>Смотреть все</Link> : null}
         </Container>
      </div>
   )
}
