import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import SlidingHeader from "./components/SlidingHeader/SlidingHeader";
import Navbar from "./components/Navbar/Navbar";
import SlidingAdvantages from "./components/SlidingAdvantages/SlidingAdvantages"
import './App.css';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
     <SlidingHeader></SlidingHeader>
<SlidingAdvantages></SlidingAdvantages>
    </div>
  );
}

export default App;
