import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import slidingAdvantages from "./SlidingAdvantages.module.scss";

export default function Navbar() {
    return (

        <div className={slidingAdvantages.advM}>
            <Container className={slidingAdvantages.cont} >
                <Row className={slidingAdvantages.row}>
                    <Col className={slidingAdvantages.column}>
                        <div>
                            <img src="../images/a1.png"></img>
                        </div>
                        <div>
                            Бесплатная доставка
                        </div>
                        <div>
                            До вашего склада или терминала ТК
                        </div>
                    </Col>
                    <Col className={slidingAdvantages.column} >
                        <div>
                            <img src="../images/a2.png"></img>
                        </div>
                        <div>
                            В наличии на складе
                        </div>
                        <div>
                            Весь асортимент продукции серии "Ника"
                        </div>
                    </Col>
                    <Col className={slidingAdvantages.column}>
                        <div>
                            <img src="../images/a3.png"></img>
                        </div>
                        <div>
                            Выделенный менеджер
                        </div>
                        <div>
                            помощь в выборе средств, для конкретного предприятия
                        </div>
                    </Col>
                    <Col className={slidingAdvantages.column}>
                        <div>
                            <img src="../images/a4.png"></img>
                        </div>
                        <div>
                            Быстрые сроки поставки
                        </div>
                        <div>
                            сроки поставки товаров (1-2 дня)
                        </div>
                    </Col>
                    <Col className={slidingAdvantages.column}>
                        <div>
                            <img src="../images/a5.png"></img>
                        </div>
                        <div>
                            Фиксированная цена
                        </div>
                        <div>
                            в течение года
                        </div>
                    </Col>
                </Row>

            </Container>
        </div>

    )
}