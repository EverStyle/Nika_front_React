import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { InputsGroup, TextInput } from '../../components/Inputs'
import { Button } from '../../components';
import form from './Login.module.scss';

import axios from 'axios';

import { useNavigate } from 'react-router-dom';


export default function Login({ loadBasket }) {
   const navigate = useNavigate();

   const [formType, setFormType] = useState('login');
   const [showPasswordsAreDifferent, setShowPasswordsAreDifferent] = useState(false);
   const [showErrror, setShowErrror] = useState(false);
   const [errrorMess, setErrrorMess] = useState('Проишла какая-то ошибка. Попытайтесь повторить попытку позже!');

   const [loginPassword, setLoginPassword] = useState('');
   const [loginName, setLoginName] = useState('');

   const [registerPassword, setRegisterPassword] = useState('');
   const [registerSecondPassword, setRegisterSecondPassword] = useState('');
   const [registerName, setRegisterName] = useState('');
   const [registerEmail, setRegisterEmail] = useState('');

   async function login(password, username) {
      try {
         const response = await axios.post('https://market.ruban.xyz/api/auth/token/login/', {
            password,
            username,
         });

         const authToken = response.data.auth_token;
         localStorage.setItem('authToken', authToken);
         await loadBasket();
         navigate('/')

      } catch (error) {
         console.error('Error to login: ', error);

         if (error?.response?.data?.password?.[0]) setErrrorMess(`Ошибка в пароле: ${error?.response?.data?.password?.[0]}`)
         else if (error?.response?.data?.username?.[0]) setErrrorMess(`Ошибка в логине: ${error?.response?.data?.username?.[0]}`)
         else if (Object.entries(error?.response?.data).length != 0) {
            let errText = Object.entries(error?.response?.data)[0][1];
            setErrrorMess(`Ошибка: ${errText}`)
         }

         else setErrrorMess('Проишла какая-то ошибка. Попытайтесь повторить попытку позже!');

         setShowErrror(true);
      }
   }


   function loginEvent(event) {
      event.preventDefault();
      login(loginPassword, loginName);
   }

   function registerEvent(event) {
      event.preventDefault();
      if (registerPassword != registerSecondPassword) {
         setShowPasswordsAreDifferent(true);
         return
      }

      axios.post('https://market.ruban.xyz/api/auth/users/', {
         email: registerEmail,
         username: registerName,
         password: registerPassword,
      })
         .then(result => {
            let id = result.data.id;
            localStorage.setItem('clientID', id);
            login(registerPassword, registerName);
         })
         .catch(error => {
            console.error('Error to register: ', error);

            if (error?.response?.data?.password?.[0]) setErrrorMess(`Ошибка в пароле: ${error?.response?.data?.password?.[0]}`)
            else if (error?.response?.data?.username?.[0]) setErrrorMess(`Ошибка в логине: ${error?.response?.data?.username?.[0]}`)
            else if (error?.response?.data?.email?.[0]) setErrrorMess(`Ошибка в почте: ${error?.response?.data?.email?.[0]}`)
            else if (Object.entries(error?.response?.data).length != 0) {
               let errText = Object.entries(error?.response?.data)[0][1];
               setErrrorMess(`Ошибка: ${errText}`)
            }
            else setErrrorMess('Проишла какая-то ошибка. Попытайтесь повторить попытку позже!');

            setShowErrror(true);
         })

   }



   return (
      <main className={form.main}>
         <Container className={form.container}>
            <Row className={['justify-content-md-center', form.row].join(' ')}>
               <Col md={5} className={form.col}>
                  {/* <img className={form.logo} src="../images/logo_3D_out 1.png" /> */}
                  {formType == 'login' ?
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
                           <Button className={form.button} type="squre">Войти</Button>
                        </InputsGroup>
                     </form>

                     :

                     <form className={form.form} onSubmit={(e) => registerEvent(e)}>
                        <InputsGroup>
                           <h1 className={form.title}>Регистрация</h1>
                           <TextInput
                              className={form.login}
                              label="Придумайте логин"
                              value={registerName}
                              onChange={(e) => setRegisterName(e.target.value)}
                              minLen={1}
                              maxLen={150}
                              pattern={/^[\w.@+-]+$/g}
                           />
                           <TextInput
                              className={form.login}
                              label="Напишите вашу почту"
                              value={registerEmail}
                              onChange={(e) => setRegisterEmail(e.target.value)}
                              minLen={1}
                              maxLen={254}
                           />
                           <TextInput
                              className={form.password}
                              label="Придумайте ваш пароль"
                              type="password"
                              value={registerPassword}
                              onChange={(e) => setRegisterPassword(e.target.value)}
                              minLen={8}
                           />
                           <TextInput
                              className={form.password}
                              label="Повторите ваш пароль"
                              type="password"
                              value={registerSecondPassword}
                              onChange={(e) => setRegisterSecondPassword(e.target.value)}
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


         <Modal show={showPasswordsAreDifferent} onHide={() => setShowPasswordsAreDifferent(false)}>
            <Modal.Header closeButton>
               <Modal.Title>Пароли не совпадают</Modal.Title>
            </Modal.Header>
            <Modal.Body>Ваши пароли не совпадают, перепроверьте их, пожалуйста</Modal.Body>
            <Modal.Footer>
               <Button type="squre" onClick={() => { setShowPasswordsAreDifferent(false) }}>
                  Ясно!
               </Button>
            </Modal.Footer>
         </Modal>

         <Modal show={showErrror} onHide={() => setShowErrror(false)}>
            <Modal.Header closeButton>
               <Modal.Title>Что-то пошло не так 😞</Modal.Title>
            </Modal.Header>
            <Modal.Body>{errrorMess}</Modal.Body>
            <Modal.Footer>
               <Button type="squre" onClick={() => { setShowErrror(false) }}>
                  Ясно!
               </Button>
            </Modal.Footer>
         </Modal>
      </main>
   )
}
