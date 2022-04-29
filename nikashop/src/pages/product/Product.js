import React from 'react'


import ProductTag from '../../components/ProductTag/ProductTag';
import Discount from '../../components/Discount/Discount';
import Property from '../../components/Property/Property';
import Slider from '../../components/Slider/Slider';
import Button from '../../components/Button/Button';
import Card from '../../components/Card/Card';



import { Col, Container, Row, Tabs, Tab } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './Product.scss';

const testProduct = {
   id: 327192478,
   name: 'Средство для мытья стекол и зеркал “Ника”',
   tag: 'Бестселлер',
   compound: "Изопропиловый спирт, Аммиак водный, Н'ПАВ, Триклозан, Ароматическая добавка, Краситель",
   price: '1639 ₽',
   prePrice: '2022 ₽',
   discount: '- 15%',
   count: 2590,
   images: ['https://dummyimage.com/700x700/FFE4EB/000', 'https://dummyimage.com/700x700/5577EF/000', 'https://dummyimage.com/700x700/1FE4EB/000', 'https://dummyimage.com/700x700/0DFFE0/000', 'https://dummyimage.com/700x700/FFF4EB/000', 'https://dummyimage.com/700x700/4FE4FF/000'],
   description: 'Средство чистящее предназначено для чистки оконных стекол, зеркал, стеклянных поверхностей витрин и витражей, кафеля, керамики, фарфора, хрусталя, а также пластиковых окон и твердых полимерных поверхностей от различных видов загрязнений, остатков насекомых.',
   package: ['0,75 л', '1 л'],
   info: [
      ['Назначение', 'Для мытья стекол и зеркал'],
      ['Срок годности', '24 месяца'],
      ['Бренд', 'Ника'],
      ['Страна изготовитель', 'Россия'],
   ]
}

const testCards = [
   {
      name: "Набор Для ванной комнаты 2.0",
      tag: "Бестселлер",
      price: "639 ₽",
   },
   {
      name: "Набор “Для кухни 2.0”",
      tag: "Новинка",
      price: "3999 ₽",
   },
   {
      name: "Набор “Эко-уборка”",
      price: "639 ₽",
      discount: "30%"
   },
   {
      name: "Набор “Защита для дома”",
      price: "167 ₽",
   },
   {
      name: "Дозатор настенный в ассортименте",
      tag: "Бестселлер",
      price: "391 ₽",
      discount: "10%"
   },
   {
      name: "Комбинезон одноразовый с капюшоне",
      price: "99 ₽",
      discount: "25%"
   },
   {
      name: "Набор Для ванной комнаты 2.0",
      tag: "Новинка",
      price: "1999 ₽",
   },
   {
      name: "Набор Для ванной комнаты 2.0",
      tag: "Бестселлер",
      price: "639 ₽",
   },
   {
      name: "Набор “Для кухни 2.0”",
      tag: "Новинка",
      price: "3999 ₽",
   },
];

export default function Product() {
   const [mainImg, setMainImg] = React.useState(testProduct.images[0]);

   return (
      <>
         <div className="Product">
            <Container>
               <Row>
                  <Discount discount={testProduct.discount} className="Product__discount" />
                  <h1 className="Product__title"> {testProduct.name} </h1>

                  <Col md={5}>
                     <div className="Product__mainImg">
                        <ProductTag tag={testProduct.tag} className="Product__tag" />
                        <img src={mainImg} />
                     </div>
                     <Slider className="Product__slider">
                        {testProduct.images.map((image, index) =>
                           <Col md={3}>
                              <img className="Product__img" src={image} key={index} onClick={() => setMainImg(image)} />
                           </Col>
                        )}
                     </Slider>
                  </Col>


                  <Col md={4}>
                     <div className="Product__info">
                        <Property name="Код товара" value={testProduct.id} key={testProduct.id} />
                        <Property name="Состав" value={testProduct.compound} key={testProduct.compound} />
                        {testProduct.info.map(property => <Property name={property[0]} value={property[1]} key={property[0]} />)}
                     </div>
                  </Col>


                  <Col md={3}>
                     <div className="Product__actions">

                        <p>Розничная цена</p>
                        <span className="Product__price"> {testProduct.price} </span>
                        <span className="Product__prePrice"> {testProduct.prePrice} </span>
                        <hr />

                        <div className="Product__availability">
                           <img src="../../images/cardIcons/availability.svg"></img>
                           <span>В наличии - {testProduct.count} шт.</span>
                        </div>
                        <div className="Product__alert">
                           <img src="../../images/cardIcons/alert.svg"></img>
                           <Link to="/">Узнать о снижении цены.</Link>
                        </div>

                        <Button type="squre" className="Product__button">Добавить в корзину</Button>
                     </div>
                     <div className="Product__delivery">
                        <Property name="Самовывоз" value="Бесплатно" key="Самовывоз" />
                        <Property name="Курьером" value="От 200 ₽" key="Курьером" />
                        <Property name="От 1 000 ₽" value="Бесплатно" key="От 1 000 ₽" />
                        <Link className="Product__link" to="https://google.com">Подробнее...</Link>
                     </div>
                  </Col>
               </Row>



               <Row>
                  <Tabs
                     defaultActiveKey="description"
                     transition={true}
                     id="Product__description"
                     className="mb-3"
                     bsPrefix="myTabs Product__tabs"
                  >
                     <Tab eventKey="description" title="Описание">
                        <h2 className="Product__subtitle">Основная иинформация</h2>
                        <p className="Product_paragraph">Средство чистящее предназначено для чистки оконных стекол, зеркал, стеклянных поверхностей витрин и витражей, кафеля, керамики, фарфора, хрусталя, а также пластиковых окон и твердых полимерных поверхностей от различных видов загрязнений, остатков насекомых.</p>
                        <h2 className="Product__subtitle">Преимущества</h2>
                        <p className="Product_paragraph">В состав входит триклозан, что обеспечивает антибактериальный эффект.
                           Благодаря специальной формуле легко и быстро удаляет сильные загрязнения, жирные пятна, следы от пальцев и остатки насекомых.

                           Нашатырный спирт придает дополнительный блеск обрабатываемым поверхностям и быстро испаряется, не оставляя разводов.

                           Эффект «антипыль» создает на поверхности пленку, которая отталкивает пыль и влагу, обеспечивая антистатический эффект.</p>
                        <h2 className="Product__subtitle">Способ применения</h2>
                        <ol className="Product_paragraph">
                           <li>Повернуть носик распылителя в положение «ОМ/5РКАУ»</li>
                           <li>Нанести средство на небольшой участок очищаемой поверхности с расстояния 10 - 15 см</li>
                           <li>Насухо (до блеска) протереть чистой, мягкой, сухой тканью или бумажной салфеткой</li>
                           <li className="Product__warning">*  При условии правильного применения средство не оставляет разводов, подтеков и других следов.</li>
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

            <Slider linkToAll="products" title="Рекомендуем также" className="Product__recomends">
               {testCards.map((card, index) =>
                  <Card
                     name={card.name}
                     tag={card.tag}
                     price={card.price}
                     discount={card.discount}
                     key={index}
                  />
               )}
            </Slider>
         </div>
      </>
   )
}
