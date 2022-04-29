import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Transition } from 'react-transition-group';

import styles from "./SlidingHeaderStyle.css";

import Catalog from "./Catalog/Catalog";

export default function SlidingHeader() {
    const [visibility, setVisibility] = useState(false);

    function handleClick() {
        setVisibility(!visibility);

    }

    return (
        <header className="Sliding_Header">
            <div className="Menu">
                <Container>
                    <Row>
                        <Col className="Colums" md={2}>
                            <img src="../images/logo_3D_out 1.png" alt="Error"></img>
                        </Col>
                        <Col className="Colums" md={2}>
                            <button className="Catalog_button" onClick={handleClick}>
                                <img src="../images/AllMenu.png" alt="Error"></img>
                                <div className="Catalog_button_text">КАТАЛОГ</div>
                            </button></Col>
                        <Col className="Colums" md={6}><div className="Main_search_block">
                            <input className="Header_Search" type="text" placeholder="Поиск"></input>
                            <button className="Search_button">
                                <img className="Search_img" src="../images/search.png" alt="Error"></img>
                            </button>
                        </div></Col>
                        <Col className="Colums" md={1}>
                            <button className="Account_button">
                                <img src="../images/user_icon.png" alt="Error"></img>
                                <div>Войти</div>
                            </button>
                        </Col>
                        <Col className="Colums" md={1}>
                            <button className="Cart_button">
                                <img src="../images/vector.png" alt="Error"></img>
                                <div>Корзина</div>
                            </button>
                        </Col>
                    </Row>
                </Container>
            </div>

            <Catalog visibility={visibility} />
        </header >
    )
}

