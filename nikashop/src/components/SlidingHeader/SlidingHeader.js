import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import slidingHeader from "./SlidingHeaderStyle.module.scss";
import Catalog from "./Catalog/Catalog";

export default function SlidingHeader({ basketSize }) {
    const [visibility, setVisibility] = useState(false);

    function handleClick() {
        setVisibility(!visibility);
    }

    return (
        <header className={slidingHeader.slidingHeader}>
            <div className={slidingHeader.menu}>
                <Container>
                    <Row>
                        <Col className={slidingHeader.column} md={2}>
                            <Link to="/">
                                <img src="../images/logo_3D_out 1.png" alt="Error"></img>
                            </Link>
                        </Col>

                        <Col className={slidingHeader.column} md={2}>
                            <button className={slidingHeader.catalogButton} onClick={handleClick}>
                                <img src="../images/AllMenu.png" alt="Error"></img>
                                <div className={slidingHeader.catalogButtonText}>КАТАЛОГ</div>
                            </button>
                        </Col>

                        <Col className={slidingHeader.column} md={6}>
                            <div className={slidingHeader.mainSearchBlock}>
                                <input className={slidingHeader.headerSearch} type="text" placeholder="Поиск"></input>
                                <button className={slidingHeader.searchButton}>
                                    <img className={slidingHeader.searchImg} src="../images/search.png" alt="Error"></img>
                                </button>
                            </div>
                        </Col>

                        <Col className={slidingHeader.column} md={1}>
                            <Link className={slidingHeader.accountButton} to="/login">
                                <svg className={slidingHeader.accountIcon} width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.99978 9.48221C10.0065 9.48221 12.1612 6.93317 12.1612 4.31499C12.1612 1.69653 10.2983 0 7.99978 0C5.7016 0 3.83836 1.69653 3.83836 4.31499C3.83836 6.93317 5.9275 9.48221 7.99978 9.48221Z" fill="#1F3948" />
                                    <path d="M15.4445 13.9402C14.9415 12.9872 14.5749 12.507 13.892 11.8285C13.3017 11.242 11.5399 10.4156 10.4028 10.7791C9.49584 10.969 9.45293 11.4682 8.00009 11.4682C6.54725 11.4682 6.50404 10.969 5.59678 10.7791C4.45964 10.4156 2.69816 11.242 2.10752 11.8285C1.42432 12.507 1.05804 12.9875 0.555375 13.9402C0.30312 14.418 -0.222537 15.8116 0.103585 16.4113C0.516142 17.17 1.52056 17.4841 4.28126 17.8066C5.93486 18 8.00009 18 8.00009 18C8.00009 18 10.0647 18 11.7186 17.8066C14.4793 17.4841 15.4831 17.17 15.8963 16.4113C16.2227 15.8116 15.6968 14.418 15.4445 13.9402Z" fill="#1F3948" />
                                </svg>
                                <div>Войти</div>
                            </Link>
                        </Col>

                        <Col className={slidingHeader.column} md={1}>
                            <Link className={slidingHeader.basketButton} to="/basket">
                                <svg className={slidingHeader.basketIcon} width="16" height="18" viewBox="0 0 16 18">
                                    <path d="M14.5516 6.21C14.4717 5.76 14.1521 5.4 13.7526 5.4H11.9949V4.5C11.9949 1.98 10.2371 0 8 0C5.76287 0 4.00512 1.98 4.00512 4.5V5.4H2.24737C1.84788 5.4 1.52829 5.76 1.44839 6.21L0.0102313 17.01C-0.0696663 17.55 0.329822 18 0.809208 18H15.1908C15.6702 18 16.0697 17.55 15.9898 17.01L14.5516 6.21ZM5.60307 4.5C5.60307 2.97 6.64174 1.8 8 1.8C9.35826 1.8 10.3969 2.97 10.3969 4.5V5.4H5.60307V4.5Z" fill="#1F3948" />
                                </svg>
                                {
                                    basketSize != 0 ?
                                        <span className={slidingHeader.basketButtonSize}> {basketSize} </span>
                                        :
                                        null
                                }
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

