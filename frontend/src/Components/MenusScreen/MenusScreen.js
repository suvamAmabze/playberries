import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import "../ScreenContainer.css";
import data from "../../data";
import MenuCard from "./MenuCard";

export default function MenusScreen() {
  return (
    <div className="SCREEN-CONTAINER">
      <Header />

      <div className="MAIN">
        <h1 className="Title">Menus</h1>
        <div className="MenusCardsContainer CenterBody">
          {data.AllMenus.slice(4).map((menu) => (
            <MenuCard key={menu._id} menu={menu} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
