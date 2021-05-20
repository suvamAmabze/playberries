import React from 'react'
import Footer from "../Footer";
import Header from "../Header";
import "../ScreenContainer.css";
import PrivacyMain from './PrivacyMain';

export default function Privacy() {
    return (
        <div className="SCREEN-CONTAINER">
        <Header />
        <PrivacyMain />
        <Footer />
      </div>
    )
}
