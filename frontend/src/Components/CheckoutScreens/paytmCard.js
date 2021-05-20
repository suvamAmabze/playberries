import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import image from "./paytm.jpeg";

export default function paytmCard() {
  return (
    <div className="SCREEN-CONTAINER">
      <Header />
      <div className="MAIN">
        <div className="paytmImageContainer textAlign-center">
          <img src={image} alt=""></img>
        </div>
      </div>
      <Footer />
    </div>
  );
}
