import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import "../ScreenContainer.css";
import CarouselSlider from "./CarouselSlider";
import MenusCards from "./MenusCards";

export default function HomeScreen() {
  return (
    <div className="SCREEN-CONTAINER">
      <Header />

      <div className="MAIN">
        <CarouselSlider />
        <MenusCards />
      </div>

      <Footer />
    </div>
  );
}
