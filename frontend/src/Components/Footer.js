import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="nb-footer">
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <div className="">
              {/* <h2 className="footer-title">Company Goal</h2> */}
              <img
                src="/images/FooterLogo.jpg"
                className="logo"
                style={{ padding: "0 5px 5px 0" }}
              ></img>
              {/* <p className="footer-p">
                We are an mobile and online boutique who specialize in adaptive
                and special needs clothing.
              </p> */}
            </div>
          </div>

          <div className="col-md-3 col-sm-6">
            <div className="">
              <h2 className="footer-title">For You</h2>
              <ul className="company-ul">
                <li>
                  <a href="/privacy" title="">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="/guidelines-for-restaurants" title="">
                    Guidelines
                  </a>
                </li>

                <li>
                  <a href="/guidelines-for-restaurants" title=""></a>
                </li>
                <li>
                  <a href="/privacy" title="">
                    Security
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-3 col-sm-6">
            <div className="">
              <h2 className="footer-title">Company</h2>
              <ul className="company-ul">
                <li>
                  <a href="/" title="">
                    Home
                  </a>
                </li>

                <li>
                  <a href="/foodproducts" title="">
                    Plans & Pricing
                  </a>
                </li>
                <li>
                  <a href="/menus" title="">
                    Menus
                  </a>
                </li>

                <li>
                  <a href="/contactus" title="">
                    Connect Us
                  </a>
                </li>
                <li>
                  <a href="/gallery" title="">
                    Gallery
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-3 col-sm-6">
            <div className="">
              <h2 className="footer-title">Get in touch</h2>
              <ul className="">
                <li className="footer-list">
                  <i className="fas fa-map-marked-alt"></i>
                  <p className="footer-p p-l-6">
                    C/O Jeevan Dhara, Jubba Sahni Market, Mithanpura,
                    Muzaffarpur, Bihar - 842002
                  </p>
                </li>

                <li className="footer-list">
                  <div>
                    <i className="fas fa-phone-alt"></i>
                  </div>
                  <div>
                    <p className="footer-p p-l-6">Tel: +91 8578820994</p>
                  </div>
                </li>
                <li className="footer-list">
                  <div>
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div>
                    <p className="footer-p p-l-6">
                      Mail: info@playberries.com , ayush@playberries.com
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* <div className="col-md-4 col-sm-6">
            <div className="">
              <h2 className="footer-title">Company Gole</h2>
              <p className="footer-p">
                Our goal is to become India’s largest managed marketplace for
                construction and renovation. We will do this through a strong
                in-house team of architects, designers, project managers and
                relationship managers with over 6+ years of combined experience
                in the construction industry and our strong technological
                foundation which will digitize the entire workflow from booking
                experience, design phase, documentation, project execution,
                quality checks, payment flow and final handover.
              </p>
            </div>
          </div> */}
        </div>
      </div>

      <section className="copyright">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <div className="social-media">
                <p>Copyright © 2021playberries</p>
              </div>
            </div>

            <div className="col-sm-6">
              <ul className="social-media">
                <li>
                  <a href="#" title="twiter">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#" title="linkdin">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
                <li>
                  <a href="#" title="facebook">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="#" title="instagram">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}
