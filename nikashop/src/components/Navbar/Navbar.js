import React from "react";
import navbar from "./Navbar.module.scss";
import { Container, Row, Col } from "react-bootstrap";


export default function Navbar() {
    return (

        <div className={navbar.cont}>
            <Container className={navbar.cont} >
                <Row className={navbar.row}>
                    <Col md={4} className={navbar.date}>
                        <div>
                            Сб-Вс - Выходной
                        </div>
                        <div className={navbar.wordTime}>
                            Пн-Пт с 8:30 до 17:30
                        </div>
                    </Col>
                    <Col md={7} className="ms-auto">
                        <nav className={navbar.menu}>
                            <ul className={navbar.list}>
                                <li className={navbar.element}>
                                    <a className={navbar.link} href="exp">О нас</a>
                                </li>
                                <li className={navbar.element}>
                                    <a className={navbar.link} href="exp">Госзакупки</a>
                                </li>
                                <li className={navbar.element}>
                                    <a className={navbar.link} href="exp">Предприятиям</a>
                                </li>
                                <li className={navbar.element}>
                                    <a className={navbar.link} href="exp">Оплата и доставка</a>
                                </li>
                                <li className={navbar.element}>
                                    <a className={navbar.link} href="exp">Новости</a>
                                </li>
                                <li className={navbar.element}>
                                    <a className={navbar.link} href="exp">Контакты</a>
                                </li>
                            </ul>
                        </nav>
                    </Col>
                </Row>
            </Container>

        </div>

    )
}