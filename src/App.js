import React from "react";
import "./App.css";
import CountryPicker from "./components/CountryPicker";
import Header from "./components/Header";
import Carousel from "./components/Carousel";
import Precautions from "./components/Precautions";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header></Header>
      <Carousel></Carousel>
      <CountryPicker></CountryPicker>
      <Precautions />
      <Footer />
    </div>
  );
}

export default App;
