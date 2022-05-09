import React from 'react'
import { Col, Container, Row, Tabs, Tab } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { ProductTag, Discount, Property, Slider, Button, Card } from '../../components'
import product from './Product.module.scss';

import { sliderCards, card } from '../../testData';


export default function Product() {
   const [mainImg, setMainImg] = React.useState(card.images[0]);

   return (

      <main className={product.product}>
         <Container>
            <Row>
               <Col md={12}>
                  <Discount discount={card.discount} className={product.discount} />
               </Col>
               <h1 className={product.title}> {card.name} </h1>

               <Col md={5}>
                  <div className={product.mainImg}>
                     <ProductTag tag={card.tag} className={product.tag} />
                     <img src={mainImg} />
                  </div>
                  <Slider className={product.slider}>
                     {card.images.map((image, index) =>
                        <Col md={3}>
                           <img
                              className={product.img}
                              src={image}
                              key={index}
                              onClick={() => setMainImg(image)} />
                        </Col>
                     )}
                  </Slider>
               </Col>


               <Col md={4}>
                  <div className={product.info}>
                     <Property name="Код товара" value={card.id} key={card.id} />
                     <Property name="Состав" value={card.compound} key={card.compound} />
                     {card.info.map(property => <Property name={property[0]} value={property[1]} key={property[0]} />)}
                  </div>
               </Col>


               <Col md={3}>
                  <div className={product.actions}>

                     <p>Розничная цена</p>
                     <span className={product.price}> {card.price} </span>
                     <span className={product.prePrice}> {card.prePrice} </span>
                     <hr />

                     <div className={product.availability}>
                        <img src="../../images/cardIcons/availability.svg"></img>
                        <span>В наличии - {card.count} шт.</span>
                     </div>
                     <div className={product.alert}>
                        <img src="../../images/cardIcons/alert.svg"></img>
                        <Link to="/">Узнать о снижении цены.</Link>
                     </div>

                     <Button type="squre" className={product.button}>Добавить в корзину</Button>
                  </div>
                  <div className={product.delivery}>
                     <Property name="Самовывоз" value="Бесплатно" key="Самовывоз" />
                     <Property name="Курьером" value="От 200" key="Курьером" />
                     <Property name="От 1 000" value="Бесплатно" key="От 1 000" />
                     <Link className={product.link} to="https://google.com">Подробнее...</Link>
                  </div>
               </Col>
            </Row>



            <Row>
               <Tabs
                  defaultActiveKey="description"
                  transition={true}
                  id="Product__description"
                  className="mb-3"
                  bsPrefix={`myTabs ${product.tabs}`}
               >
                  <Tab eventKey="description" title="Описание">
                     <h2 className={product.subtitle}>Основная иинформация</h2>
                     <p className={product.paragraph}>Средство чистящее предназначено для чистки оконных стекол, зеркал, стеклянных поверхностей витрин и витражей, кафеля, керамики, фарфора, хрусталя, а также пластиковых окон и твердых полимерных поверхностей от различных видов загрязнений, остатков насекомых.</p>
                     <h2 className={product.subtitle}>Преимущества</h2>
                     <p className={product.paragraph}>В состав входит триклозан, что обеспечивает антибактериальный эффект.
                        Благодаря специальной формуле легко и быстро удаляет сильные загрязнения, жирные пятна, следы от пальцев и остатки насекомых.

                        Нашатырный спирт придает дополнительный блеск обрабатываемым поверхностям и быстро испаряется, не оставляя разводов.

                        Эффект «антипыль» создает на поверхности пленку, которая отталкивает пыль и влагу, обеспечивая антистатический эффект.</p>
                     <h2 className={product.ubtitle}>Способ применения</h2>
                     <ol className={product.paragraph}>
                        <li>Повернуть носик распылителя в положение «ОМ/5РКАУ»</li>
                        <li>Нанести средство на небольшой участок очищаемой поверхности с расстояния 10 - 15 см</li>
                        <li>Насухо (до блеска) протереть чистой, мягкой, сухой тканью или бумажной салфеткой</li>
                        <li className={product.warning}>*  При условии правильного применения средство не оставляет разводов, подтеков и других следов.</li>
                     </ol>

                  </Tab>
                  <Tab eventKey="сharacteristics" title="Характеристики">
                     2
                  </Tab>
                  <Tab eventKey="documents" title="Документы">
                     3
                  </Tab>
                  <Tab eventKey="reviews" title="Отзывы">
                     4
                  </Tab>
                  <Tab eventKey="useful" title="Области применения">
                     5
                  </Tab>

               </Tabs>
            </Row>
         </Container>

         <Slider linkToAll="products" title="Рекомендуем также" className={product.recomends}>
            {sliderCards.map((card, index) => <Card card={card} key={index} />)}
         </Slider>
      </main>
   )
}
