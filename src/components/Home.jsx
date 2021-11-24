import Carousel2 from "./Carousel";
import React from "react";
import Display from "./Display";
import Navbar from "./Navbar";
import "../styles/Home.css";
import Footer from "./Footer"

function Home() {
  return (
    <div>
      <Navbar />
      <Carousel2 />
      <Display />
      <Footer />
    </div>
  );
}

export default Home;
