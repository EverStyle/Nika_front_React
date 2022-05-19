import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import SlidingHeader from "./components/SlidingHeader/SlidingHeader";
import Navbar from "./components/Navbar/Navbar";
import SlidingAdvantages from "./components/SlidingAdvantages/SlidingAdvantages"
import './App.css';
import AxCall from "./components/AxCall";
import ImgSlider from "./components/ImgSlider/ImgSlider"
import ImgSlider2 from "./components/ImgSlider2/ImgSlider2"
import ImgSlider3 from "./components/ImgSlider3/ImgSlider3"
import GoodsSlider from "./components/GoodsSlider/GoodsSlider";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <SlidingHeader></SlidingHeader>
      <SlidingAdvantages></SlidingAdvantages>
      <AxCall></AxCall>
      <ImgSlider></ImgSlider>
      <div>Скидки недели</div>
      <GoodsSlider></GoodsSlider>
      <ImgSlider2></ImgSlider2>
      <div>Бестселлеры</div>
      <GoodsSlider></GoodsSlider>
      <ImgSlider3></ImgSlider3>
      <div>Для бизнеса</div>
      <GoodsSlider></GoodsSlider>
    </div>
  );
}

export default App;
