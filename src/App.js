import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import ABButton from "./components/ABButton";
import Input from "./components/Input";
import Navbar from "./layouts/Navbar";
// import Herosec from "./layouts/Herosec";
import Cards from "./layouts/Cards";
import Footer from "./layouts/Footer";

function App() {

  return (
    <div className="App bg-gray-300">
    <Navbar title="Home" />
    <Cards />
    <Footer />
    </div>
  );
}

export default App;
