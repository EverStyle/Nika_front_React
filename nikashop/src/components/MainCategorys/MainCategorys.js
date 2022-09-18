import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import MainCategorys from "./MainCategorys.css";

export default function MainCategorys2() {
    return (

        <div className={MainCategorys.advM}>
            <Container className={MainCategorys.cont} >
                <Row className={MainCategorys.row}>
                    <Col className={MainCategorys.column}>
                      АКЦИИ
                    </Col>
                    <Col className={MainCategorys.column}>
                      БЫТОВАЯ ХИМИЯ
                    </Col>
                    <Col className={MainCategorys.column}>
                     ДЕЗИНСЕКЦИЯ
                    </Col>
                    <Col className={MainCategorys.column}>
                      ХОЗТОВАРЫ
                    </Col>
                    <Col className={MainCategorys.column}>
                      ЭКО-ЛИНЕЙКА
                    </Col>
                    <Col className={MainCategorys.column}>
                      COVID-19
                    </Col>
                    <Col className={MainCategorys.number}>
                      +7(343) 312 28 12
                    </Col>
                    <Col className={MainCategorys.number}>
                    +7(343) 346 81 89
                    </Col>
                </Row>

            </Container>
        </div>

    )
}