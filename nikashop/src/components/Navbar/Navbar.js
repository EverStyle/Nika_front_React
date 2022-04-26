import React from "react";
import styles from "./Navbar.css";
import { Container, Row, Col } from "react-bootstrap";
export default function Navbar() {
    return (

        <div className="Navbar_Cont">
            <Container className="Navbar_Cont" >
                <Row className="Navbar_Row">
                    <Col md={6} className="Navbar_Date">
                        <div className="Navbar_time">
                            Пн-Пт с 8:30 до 17:30
                        </div>
                        <div className="Navbar_time">
                        Сб-Вс - Выходной
                        </div>
                    </Col>
                    <Col md={6} className="Navbar_links">
                        <a href="exp">О нас </a>
                        <a href="exp">Госзакупки</a>
                        <a href="exp">Предприятиям</a>
                        <a href="exp">Оплата и доставка</a>
                        <a href="exp">Новости</a>
                        <a href="exp">Контакты</a>
                    </Col>
                </Row>

            </Container>
        </div>

    )
}