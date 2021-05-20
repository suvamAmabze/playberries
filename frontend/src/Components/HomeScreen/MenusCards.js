import React from "react";
import { Link } from "react-router-dom";
import data from "../../data";
import MenuCard from "../MenusScreen/MenuCard";

export default function MenusCards() {
  return (
    <>
      <h1 className="Title">Menus</h1>
      <div className="MenusCardsContainer">
        {data.AllMenus.slice(0, 4).map((menu) => (
          <MenuCard key={menu._id} menu={menu} />
        ))}
      </div>

      <div className="showmore">
        <p className="showmore-p">show more&nbsp;</p>
        <Link to={"/menus"}>
          <h3 className="showmore-h">ᗐ</h3>
        </Link>
      </div>
    </>
  );
}
