import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Col } from 'react-bootstrap';
import axios from 'axios';
import Carousel from 'react-elastic-carousel'
import styles from './AdvertSlider.css';
import AdvertSlider from './AdvertSlider.css';



export default function AdvertSlider2() {
 
  const [Adv, setAdv,] = useState([]);
  useEffect(() => {
    axios.get('https://market.ruban.xyz/api/products/')

      .then(result => setAdv(result.data))  //Алексей просил, пока что фильтровать здесь
      .catch(error => console.log('Error to load product list: ', error));

  }, []);

  return (
    <div className="ContainerSlider1">
      <Carousel itemsToShow={3} className="AdSlider" linkToAll="products">
        {Adv.map(advs =>
          <div>
            <div>
            <img className="AdvImg" src="https://dummyimage.com/700x700/FFE4EB/000" />
            </div>
            <div>
              {advs.name}
            </div>
          </div>
        )}
      </Carousel>
    </div>
  )
}

