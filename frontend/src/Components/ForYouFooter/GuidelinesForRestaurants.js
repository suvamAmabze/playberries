import React from 'react'
import Footer from "../Footer";
import Header from "../Header";
import "../ScreenContainer.css";
import GuidelinesForRestaurantsMain from './GuidelinesForRestaurantsMain';

export default function GuidelinesForRestaurants() {
    return (
        <div className="SCREEN-CONTAINER">
        <Header />
        <GuidelinesForRestaurantsMain />
        <Footer />
      </div>
    )
}
