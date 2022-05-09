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
                        <div>
                            Пн-Пт с 8:30 до 17:30
                        </div>
                    </Col>
                    <Col md={5}>
                        <a href="exp">1</a>
                        <a href="exp">2</a>
                        <a href="exp">3</a>
                        <a href="exp">4</a>
                        <a href="exp">5</a>
                    </Col>
                </Row>
            </Container>

        </div>

    )
}