import React from "react";
import styles from "./GoodsSlider.css";
import { Container, Row, Col } from "react-bootstrap";
import Carousel from 'react-elastic-carousel'
export default function GoodsSlider() {
    return (

        <div className="GoodsSliderBlock">
            <Carousel itemsToShow={3}>
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
                <div>5</div>
            </Carousel>
        </div>

    )
}