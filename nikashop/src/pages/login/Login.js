import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { InputsGroup, TextInput } from '../../components/Inputs'
import { Button } from '../../components';
import form from './Login.module.scss';

import { useSelector, useDispatch } from 'react-redux';
import { login } from '../../redux/user';
import { loadBasket } from '../../redux/basket';


export default function Login() {
   const user = useSelector(state => state.user);
   const dispatch = useDispatch();
   const navigate = useNavigate();


   const [loginPassword, setLoginPassword] = useState('');
   const [loginName, setLoginName] = useState('');

   async function loginEvent(event) {
      event.preventDefault();
      await dispatch(login(loginPassword, loginName));
      await dispatch(loadBasket());
      navigate('/');
   }

   return (
      <main className={form.main}>
         <Container className={form.container}>
            <Row className={['justify-content-md-center', form.row].join(' ')}>
               <Col sm={12} md={8} lg={6} xl={5} className={form.col}>
                  {/* <img className={form.logo} src="../images/logo_3D_out 1.png" /> */}
                  <form className={form.form} onSubmit={(e) => loginEvent(e)}>
                     <InputsGroup>
                        <h1 className={form.title}>Авторизация</h1>
                        <TextInput
                           className={form.login}
                           label="Введите ваш логин"
                           value={loginName}
                           onChange={(e) => setLoginName(e.target.value)}
                        />
                        <TextInput
                           className={form.password}
                           label="Введите ваш пароль"
                           helpText="Забыли пароль?"
                           helpLink="https://google.com"
                           type="password"
                           value={loginPassword}
                           onChange={(e) => setLoginPassword(e.target.value)}
                        />
                        {
                           user.error ?
                              <p className={form.error}>
                                 {user.loginError}
                              </p>
                              :
                              null
                        }
                        <Button className={form.button} type="squre">Войти</Button>
                     </InputsGroup>
                  </form>


                  <Link className={form.changeTypeBtn} to='/registration'>
                     Впервые здесь? Тогда зарегистрируйтесь!
                  </Link>
               </Col>
            </Row>
         </Container>
      </main>
   )
}
