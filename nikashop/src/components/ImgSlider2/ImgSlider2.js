import React from "react";
import styles from "./ImgSlider2.css";
import { Container, Row, Col } from "react-bootstrap";
import Carousel from 'react-elastic-carousel'
export default function ImgSlider2() {
    return (

        <div className="ImgSliderBlock">
            <Carousel itemsToShow={2}>
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
                <div>5</div>
            </Carousel>
        </div>

    )
}