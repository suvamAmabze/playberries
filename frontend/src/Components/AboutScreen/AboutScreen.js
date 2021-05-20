import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import "../ScreenContainer.css";

export default function AboutScreen() {
  return (
    <div className="SCREEN-CONTAINER">
      <Header />
      <div className="MAIN">
        <h1 className="Title">About Us</h1>

        <div className="aboutInfoContainer" data-aos="fade-in">
          <div className="aboutInfoContainer-left">
            <img src="/images/Gallery/1.jpg"></img>
          </div>
          <div className="aboutInfoContainer-right">
            <p data-aos="fade-up">
              It all started in 2020 when graduates decided to make life easier
              by changing the way of events- all with just a tap! With their
              idea of ’hyperlocal special events e.g., Seminars. A seminar is a
              type of corporate event that's organised with a target audience in
              mind and aims to impart highly relevant information to them. All
              they needed was the tech to power it and were introduced to Amabze
              Technolozy, who brought this vision to life with the first
              website. And with this, Playberries Pvt. Ltd. was launched as an
              online events platform. Unemployment is the state of a person
              qualified and available to do any work in which he is neither
              employed with any company or institution nor in his business. And
              with the blessings of almighty and dedication of the team
              Playberries Pvt. Ltd. will end this unemployment. Playberries Pvt.
              Ltd. is an Indian Special events start-up founded by Ayush Raj and
              Mr. Birendra Kumar Thakur (Ayush’s father) with the dedication and
              consent of two gems Rahul Kumar and Abhishek Kumar. Playberries
              Pvt. Ltd. provides information, menus and user-reviews of
              restaurants as well as special events options from partner
              restaurants in select cities and provide an ease to book events
              online. As of 2021, the service is available in All over India.
            </p>
          </div>
        </div>

        <section className="team-section">
          {/*Core team members */}
          <div className="team-sectionContainer">
            <div className="team-sectionRow">
              <div className="section-title">
                <h1>Our Core Team</h1>
              </div>
            </div>

            <div className="team-sectionRow">
              <div className="team-items">
                <div className="item">
                  <img src="images/Team/A1.jpg" alt="team" />
                  <div className="inner">
                    <div className="info">
                      <h5>Ayush Raj</h5>
                      <p>M.D and CEO</p>
                      <div className="social-links">
                        <a href="">
                          <i className="fab fa-instagram"></i>
                        </a>
                        <a href="">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="">
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                        <a href="">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="item">
                  <img src="images/Team/director.jpg" alt="team" />
                  <div className="inner">
                    <div className="info">
                      <h5>Mr. Birendra Kumar Thakur</h5>
                      <p>Director</p>
                      <div className="social-links">
                        <a href="">
                          <i className="fab fa-instagram"></i>
                        </a>
                        <a href="">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="">
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                        <a href="">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Team members */}
          <div className="team-sectionContainer">
            <div className="team-sectionRow">
              <div className="section-title">
                <h1>Our Team Members</h1>
              </div>
            </div>

            <div className="team-sectionRow">
              <div className="team-items">
                <div className="item">
                  <img src="images/Team/A2.jpg" alt="team" />
                  <div className="inner">
                    <div className="info">
                      <h5>Abhishek Kumar</h5>
                      <p>Chief of National/ state Affairs</p>
                      <div className="social-links">
                        <a href="">
                          <i className="fab fa-instagram"></i>
                        </a>
                        <a href="">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="">
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                        <a href="">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="item">
                  <img src="images/Team/A4.jpg" alt="team" />
                  <div className="inner">
                    <div className="info">
                      <h5>Rahul Kumar</h5>
                      <p>Head of Sales And Marketing</p>
                      <div className="social-links">
                        <a href="">
                          <i className="fab fa-instagram"></i>
                        </a>
                        <a href="">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="">
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                        <a href="">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="TechnicalPartner textAlign-center">
            <h1 className="font-bold">Our Technical Partner</h1>
            <span className="CenterBody">
              We create AI strategies and provides machine and deep learning
              services. For this purpose, Amabze team analyzes the market and
              develops an AI plan for the creation of AI-driven applications,
              platforms, and ecosystems.
            </span>

            <img src="images/Team/amabze.jpg"></img>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
