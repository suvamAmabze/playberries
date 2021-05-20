import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import "../ScreenContainer.css";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function SuperServicesScreen() {
  return (
    <div className="SCREEN-CONTAINER">
      <Header />

      <div className="MAIN">
        <h1 className="Title">Special Services</h1>

        <Container className="SpecialServices-Container">
          <Row>
            <Col lg={6} md={6} sm={12}>
              <h2 data-aos="fade-right" data-aos-delay="80">
                Bachelor Party&nbsp;
                <span
                  data-aos="fade-up"
                  data-aos-offset="390"
                  style={{ color: "#b78c33" }}
                >
                  <i className="fas fa-glass-cheers" />
                </span>
              </h2>
              <div
                className="SpecialServices-p"
                data-aos="fade"
                data-aos-offset="180"
              >
                <p data-aos="fade-up" data-aos-offset="200" data-aos-delay="50">
                  A bachelor party, known as a stag party, stag night or stag do
                  a bull's party, or a buck's party or buck's night, is a party
                  held for a man shortly before he enters marriage, to celebrate
                  his "last night of freedom" or merely to spend time with his
                  male friends, who are often at his wedding party afterwards. A
                  bachelor party is usually planned by the best man or other
                  friends of the groom, occasionally, with the assistance of a
                  bachelor party planning company. Personalize the party by
                  coming up with a fun name for the event. It lets guests know
                  right away who and what they’re being invited to celebrate. It
                  should be simple and to the point, like “John’s last night of
                  freedom”, or “World’s Greatest Bachelor Party”. So go ahead
                  and get a damn cake.
                </p>
                <div className="MenuBtnContainer" data-aos="fade">
                  <Link to="/search/name/combo">
                    <button className="MenuBtn">Details</button>
                  </Link>
                </div>
              </div>
            </Col>
            <Col lg={6} md={6} sm={12}>
              <img
                src="/images/Menus/BachelorParty.jpg"
                className="SpecialMenu-Img"
                data-aos="fade-up"
                data-aos-offset="180"
              ></img>
            </Col>
          </Row>
        </Container>

        <Container className="SpecialServices-Container">
          <Row>
            <Col lg={6} md={6} sm={12}>
              <h2 data-aos="fade-right" data-aos-delay="100">
                Highway&nbsp;
                <span
                  data-aos="fade-up"
                  data-aos-offset="390"
                  style={{ color: "#b78c33" }}
                >
                  <i className="fas fa-car"></i>
                </span>
              </h2>
              <div
                className="SpecialServices-p"
                data-aos="fade"
                data-aos-offset="370"
              >
                <p data-aos="fade-up" data-aos-offset="390" data-aos-delay="50">
                  A great party - sometimes referred to as a “Highway party" is
                  the type of party that involves going someplace for your party
                  activities, rather than having your party at home. ... Some
                  people like it because they don't have to use their home for a
                  party. Especially for places that do kids parties (bowling
                  alleys, rock climbing places, arcades, etc.) - birthday
                  parties at these one stop family entertainment centers can
                  account for a good chunk of their revenue, so they have the
                  party system down pat. If you have a favorite spot where you
                  like to go, check and see if they offer a birthday party
                  package deal. Often priced at a flat fee, packages can include
                  decorations, cake, servers, someone to be in charge of your
                  party and invitations. Sometimes food and drink are available
                  too, and themed goody bags or favors can often be provided for
                  an additional fee.
                </p>
                <div
                  className="MenuBtnContainer"
                  data-aos="fade"
                  data-aos-offset="150"
                >
                  <Link to="/search/name/combo">
                    <button className="MenuBtn">Details</button>
                  </Link>
                </div>
              </div>
            </Col>
            <Col lg={6} md={6} sm={12}>
              <img
                src="/images/Menus/Highway.jpg"
                className="SpecialMenu-Img"
                data-aos="fade-up"
                data-aos-offset="330"
              ></img>
            </Col>
          </Row>
        </Container>

        <Container className="SpecialServices-Container">
          <Row>
            <Col lg={6} md={6} sm={12}>
              <h2 data-aos="fade-right" data-aos-delay="100">
                Breakup Party&nbsp;
                <span
                  data-aos="fade-up"
                  data-aos-offset="390"
                  style={{ color: "#b78c33" }}
                >
                  <i className="fas fa-heartbeat" />
                </span>
              </h2>
              <div
                className="SpecialServices-p"
                data-aos="fade"
                data-aos-offset="370"
              >
                <p data-aos="fade-up" data-aos-offset="390" data-aos-delay="50">
                  Forget snuggling up to a bottle of wine in your bathrobe. A
                  better way to bounce back from a split? Host your own breakup
                  party—aka a get-together at which you and your besties toast
                  to your freedom. Give your party an exciting tag line. For
                  example, “Let’s get ready to rumble”, or “Bring extra
                  underwear, you’ll know when it happens”, or “Say farewell to
                  bachelor years with cheers & beers”. It can be anything catchy
                  that encompasses the fun vibe the celebration is aiming for.
                  You may be craving sweets (for real). Research has found that
                  people yearn for sugar when they’re sad. So go ahead and get a
                  damn cake. Make it party appropriate by ­asking the bakery to
                  write something on top like “Back in the Game!” or “Single and
                  Hot.”
                </p>
                <div
                  className="MenuBtnContainer"
                  data-aos="fade"
                  data-aos-offset="150"
                >
                  <Link to="/search/name/combo">
                    <button className="MenuBtn">Details</button>
                  </Link>
                </div>
              </div>
            </Col>
            <Col lg={6} md={6} sm={12}>
              <img
                src="/images/Menus/BreakupParty.jpg"
                className="SpecialMenu-Img"
                data-aos="fade-up"
                data-aos-offset="350"
              ></img>
            </Col>
          </Row>
        </Container>
      </div>

      <Footer />
    </div>
  );
}
