import React from "react";
import styles from "./Navbar.css";
import { Container, Row, Col } from "react-bootstrap";
export default function Navbar() {
    return (

        <div className="Navbar_Cont">
            <Container className="Navbar_Cont" >
                <Row className="Navbar_Row">
                    <Col md={4} className="Navbar_Date">
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