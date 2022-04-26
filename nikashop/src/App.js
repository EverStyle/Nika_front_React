import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import SlidingHeader from "./components/SlidingHeader/SlidingHeader";
import Navbar from "./components/Navbar/Navbar";
import SlidingAdvantages from "./components/SlidingAdvantages/SlidingAdvantages"
import './App.css';
import AxCall from "./components/AxCall";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
     <SlidingHeader></SlidingHeader>
<SlidingAdvantages></SlidingAdvantages>
<AxCall></AxCall>
    </div>
  );
}

export default App;
