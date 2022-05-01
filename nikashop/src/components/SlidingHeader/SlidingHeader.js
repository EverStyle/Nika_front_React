import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Transition } from 'react-transition-group';
import { Link } from 'react-router-dom';
import styles from "./SlidingHeaderStyle.css";

import Catalog from "./Catalog/Catalog";

export default function SlidingHeader({ basketSize }) {
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
                            </button>
                        </Col>

                        <Col className="Colums" md={6}>
                            <div className="Main_search_block">
                                <input className="Header_Search" type="text" placeholder="Поиск"></input>
                                <button className="Search_button">
                                    <img className="Search_img" src="../images/search.png" alt="Error"></img>
                                </button>
                            </div>
                        </Col>

                        <Col className="Colums" md={1}>
                            <button className="Account_button">
                                <img src="../images/user_icon.png" alt="Error"></img>
                                <div>Войти</div>
                            </button>
                        </Col>

                        <Col className="Colums" md={1}>
                            <Link className="Basket_button" to="/basket">
                                <svg className="Basket_icon" width="16" height="18" viewBox="0 0 16 18">
                                    <path d="M14.5516 6.21C14.4717 5.76 14.1521 5.4 13.7526 5.4H11.9949V4.5C11.9949 1.98 10.2371 0 8 0C5.76287 0 4.00512 1.98 4.00512 4.5V5.4H2.24737C1.84788 5.4 1.52829 5.76 1.44839 6.21L0.0102313 17.01C-0.0696663 17.55 0.329822 18 0.809208 18H15.1908C15.6702 18 16.0697 17.55 15.9898 17.01L14.5516 6.21ZM5.60307 4.5C5.60307 2.97 6.64174 1.8 8 1.8C9.35826 1.8 10.3969 2.97 10.3969 4.5V5.4H5.60307V4.5Z" fill="#1F3948" />
                                </svg>
                                <span className="Basket_button_size"> {basketSize} </span>
                                <div>Корзина</div>
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </div>

            <Catalog visibility={visibility} />
        </header >
    )
}

