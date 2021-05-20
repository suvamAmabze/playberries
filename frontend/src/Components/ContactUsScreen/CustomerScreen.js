import React from 'react'
import Footer from "../Footer";
import Header from "../Header";
import CustomerScreenMain from './CustomerScreenMain';
import "../ScreenContainer.css";


export default function CustomerScreen() {
    return (
        <div className="SCREEN-CONTAINER">
        <Header />
        <CustomerScreenMain />
        <Footer />
      </div>
    )
}
