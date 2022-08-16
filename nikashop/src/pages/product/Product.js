import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Tabs, Tab } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

import { ProductTag, Discount, Property, Slider, Card, ProductPackage, Comment } from '../../components';

import { TextInput, Rating, Button } from '../../components/Inputs';
import product from './Product.module.scss';

import { testCard, sliderCards } from '../../testData';

import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { addProduct } from '../../redux/basket';

export default function Product() {

   const dispatch = useDispatch();
   const basket = useSelector(state => state.basket);
   const user = useSelector(state => state.user);

   function checkAvailability(productId, packageId) {
      if (basket.find(el => el.products == productId && el.package == packageId)) {
         setAvailability(false);
      } else {
         setAvailability(true);
      }
   }

   const params = useParams();
   const productId = parseInt(params.id);

   const [card, setCard] = useState(testCard);
   const [comments, setComments] = useState([]);

   const [commentText, setCommentText] = useState('');
   const [grade, setGrade] = useState(5);

   const [packageIndex, setPackageIndex] = useState(0);
   const [mainImg, setMainImg] = useState(card.package[packageIndex].image.image);

   const [availability, setAvailability] = useState(true);

   async function loadProduct() {
      try {
         const response = await axios.get(`https://market.ruban.xyz/api/products/${productId}`);
         const card = response.data;
         card.package.forEach(pack => pack.image.image = 'https://market.ruban.xyz' + pack.image.image);
         const img = card.package[packageIndex].image.image;
         setCard(card);
         setMainImg(img);
      } catch (err) {
         console.error(`Error to get product: ${err}`)
      }
   }

   async function loadComments() {
      try {
         const response = await axios.get(`https://market.ruban.xyz/api/comments/${productId}/`);
         setComments(response.data);
      } catch (err) {
         console.error(`Error to get comments: ${err}`)
      }
   }

   async function addComment(event) {
      event.preventDefault();
      try {
         const data = {
            title: user.name,
            text: commentText,
            grade,
         };
         console.log(data);
         await axios.post(`https://market.ruban.xyz/api/comments/${productId}/`, data);
         loadComments();
      } catch (err) {
         console.error(`Error to create comment: ${err}`)
      }
   }

   useEffect(() => {
      loadProduct();
      loadComments();
   }, []);

   useEffect(() => checkAvailability(productId, card.package[packageIndex].id), [basket, card, packageIndex]);



   return (

      <main className={product.product}>
         <Container>
            <Row>
               <Col md={12}>
                  <Discount discount={card.discount} className={product.discount} />
               </Col>
               <h1 className={product.title}> {card.name} </h1>

               <Col md={7} lg={5}>
                  <div className={product.mainImg}>
                     <ProductTag tag={card.tag} className={product.tag} />
                     <img src={mainImg} />
                  </div>

                  <Slider className={product.slider}>
                     {card.package.map((pack, index) =>
                        <Col md={3} key={index}>
                           <img
                              className={product.img}
                              src={pack.image.image}
                              onClick={() => setMainImg(pack.image.image)} />
                        </Col>
                     )}
                  </Slider>
               </Col>


               <Col className="d-md-none d-lg-block" md={3} lg={4}>
                  <div className={product.info}>
                     <div className={product.packages}>
                        {card.package.map((pack, index) =>
                           <ProductPackage
                              name={pack.name}
                              active={index == packageIndex}
                              onClick={() => setPackageIndex(index)}
                              key={pack.name}
                           />
                        )}
                     </div>

                     <Property name="Код товара" value={card.id} key={'Код товара'} />
                     <Property name="Состав" value={card.composition} key={card.composition} />
                     {/* {card.info.map(property => <Property name={property[0]} value={property[1]} key={property[0]} />)} */}
                  </div>
               </Col>


               <Col md={5} lg={3}>
                  <div className={product.actions}>

                     <p>Розничная цена</p>
                     <span className={product.price}> {card.package[packageIndex].cost} ₽</span>
                     {
                        card.discount ?
                           <span className={product.prePrice}> {Math.round(card.package[packageIndex].cost * 100 / (100 - card.discount))} ₽</span>
                           :
                           null
                     }
                     <hr />

                     <div className={product.availability}>
                        <img src="../../images/cardIcons/availability.svg"></img>
                        <span>В наличии - {card.package[packageIndex].quantity} шт.</span>
                     </div>
                     <div className={product.alert}>
                        <img src="../../images/cardIcons/alert.svg"></img>
                        <Link to="/">Узнать о снижении цены.</Link>
                     </div>

                     {
                        availability ?
                           <Button
                              type="squre"
                              className={product.button}
                              onClick={() => dispatch(addProduct(productId, card.package[packageIndex].id, 1))}
                           >Добавить в корзину</Button>
                           :
                           <Button
                              type="squre"
                              to="/basket"
                              color="green"
                           >Перейти в корзину</Button>
                     }
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
                     <p className={product.paragraph}>{card.discription}</p>
                     <h2 className={product.subtitle}>Назначение</h2>
                     <p className={product.paragraph}>{card.purpose}</p>
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
                     {
                        comments.length === 0 ?
                           <p className={product.noComments}>Комминтариев пока нету, будьте первым ;-)</p>
                           :
                           comments.map((comment, i) => <Comment comment={comment} key={i} />)
                     }
                     <form onSubmit={(e) => addComment(e)}>
                        <Rating
                           grade={grade}
                           setGrade={setGrade}
                        />
                        <TextInput
                           placeholder="Комментировать"
                           value={commentText}
                           onChange={(e) => setCommentText(e.target.value)}
                        />
                        <Button className={product.commentButton} type="squre" >Опубликовать</Button>
                     </form>
                  </Tab>
                  <Tab eventKey="useful" title="Области применения">
                     5
                  </Tab>

               </Tabs>
            </Row>
         </Container>

         <Slider linkToAll="products" title="Рекомендуем также" className={product.recomends}>
            {sliderCards.map((card, index) =>
               <Col md={2} key={index}>
                  <Card card={card} />
               </Col>
            )}
         </Slider>
      </main>
   )
}
