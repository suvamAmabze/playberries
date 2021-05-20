import React from "react";

import "./AdminHomeScreen.css";
import FooterAdmin from "./FooterAdmin";

import HeaderAdmin from "./HeaderAdmin";

export default function AdminHomeScreen() {
  return (
    <div className="SCREEN-CONTAINER">
      <HeaderAdmin />
      <div className="MAIN">
      </div>
      <FooterAdmin />
    </div>
  );
}
