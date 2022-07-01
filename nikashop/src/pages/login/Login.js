import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { InputsGroup, TextInput } from '../../components/Inputs'
import { Button } from '../../components';
import form from './Login.module.scss';

export default function Login() {
   const [formType, setFormType] = useState('login');



   return (
      <main className={form.main}>
         <Container className={form.container}>
            <Row className={['justify-content-md-center', form.row].join(' ')}>
               <Col md={5} className={form.col}>
                  {/* <img className={form.logo} src="../images/logo_3D_out 1.png" /> */}
                  {formType == 'login' ?
                     <form className={form.form}>
                        <InputsGroup>
                           <h1 className={form.title}>Авторизация</h1>
                           <TextInput className={form.login} label="Введите ваш логин" />
                           <TextInput
                              className={form.password}
                              label="Введите ваш пароль"
                              helpText="Забыли пароль?"
                              helpLink="https://google.com"
                              type="password"
                           />
                           <Button className={form.button} type="squre">Войти</Button>
                        </InputsGroup>
                     </form>

                     :

                     <form className={form.form}>
                        <InputsGroup>
                           <h1 className={form.title}>Регистрация</h1>
                           <TextInput className={form.login} label="Придумайте логин" />
                           <TextInput
                              className={form.password}
                              label="Придумайте ваш пароль"
                              type="password"
                           />
                           <TextInput
                              className={form.password}
                              label="Повторите ваш пароль"
                              type="password"
                           />
                           <Button className={form.button} type="squre">Зарегистрироваться</Button>
                        </InputsGroup>
                     </form>
                  }


                  {formType == 'login' ?
                     <div className={form.changeTypeBtn} onClick={() => setFormType('registration')}>
                        Впервые здесь? Тогда зарегистрируйтесь!
                     </div>
                     :
                     <div className={form.changeTypeBtn} onClick={() => setFormType('login')}>
                        Уже зарегистрированы? Авторизуйтесь!
                     </div>
                  }
               </Col>
            </Row>
         </Container>
      </main>
   )
}
