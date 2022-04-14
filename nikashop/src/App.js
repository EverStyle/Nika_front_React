import React from "react";

import SlidingHeader from "./components/SlidingHeader/SlidingHeader";
import Navbar from "./components/Navbar/Navbar";
import SlidingAdvantages from "./components/SlidingAdvantages/SlidingAdvantages"

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Navbar />
      <SlidingHeader />
      <SlidingAdvantages />
    </div>
  );
}

export default App;
