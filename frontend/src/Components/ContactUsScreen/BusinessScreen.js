import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import "../ScreenContainer.css";
import BusinessScreenMain from "./BusinessScreenMain";

export default function BusinessScreen() {
  return (
    <div className="SCREEN-CONTAINER">
      <Header />
      <BusinessScreenMain />
      <Footer />
    </div>
  );
}
