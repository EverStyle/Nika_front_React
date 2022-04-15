import React from 'react'

import SlidingHeader from './components/SlidingHeader/SlidingHeader';
import ProductTag from './components/ProductTag/ProductTag';
import Discount from './components/Discount/Discount';
import Button from './components/Button/Button';

import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './Product.scss';

const testProduct = {
   id: 327192478,
   name: 'Средство для мытья стекол и зеркал “Ника”',
   tag: 'Бестселлер',
   price: '1639 ₽',
   prePrice: '2022 ₽',
   discount: '- 15%',
   images: ['https://dummyimage.com/196x196/FFE4EB/000', 'https://dummyimage.com/196x196/FFE4EB/000', 'https://dummyimage.com/196x196/FFE4EB/000', 'https://dummyimage.com/196x196/FFE4EB/000'],
   description: 'Средство чистящее предназначено для чистки оконных стекол, зеркал, стеклянных поверхностей витрин и витражей, кафеля, керамики, фарфора, хрусталя, а также пластиковых окон и твердых полимерных поверхностей от различных видов загрязнений, остатков насекомых.',
   package: ['0,75 л', '1 л'],
   info: [
      ['Назначение', 'Для мытья стекол и зеркал'],
      ['Срок годности', '24 месяца'],
      ['Бренд', 'Ника'],
      ['Страна изготовитель', 'Россия'],
   ]
}

export default function Product() {
   return (
      <>
         <SlidingHeader />
         <div className="Product">
            <Container>
               <Row>
                  <Discount discount={testProduct.discount} />
                  <h1 className="Product__title"> {testProduct.name} </h1>

                  <Col md={5}>
                     <img className="Product__img" src={testProduct.images[0]} />
                  </Col>
                  <Col md={4}>
                     <div className="Product__info"></div>
                  </Col>
                  <Col md={3}>
                     <div className="Product__actions">

                        <p>Розничная цена</p>
                        <span className="Product__price"> {testProduct.price} </span>
                        <span className="Product__prePrice"> {testProduct.prePrice} </span>
                        <hr />
                        <Button type="squre" className="Product__button">Добавить в корзину</Button>

                     </div>
                     <div className="Product_delivery">

                     </div>
                  </Col>



               </Row>
            </Container>
         </div>
      </>
   )
}
