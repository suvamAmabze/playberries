import React from "react";
import { Accordion, Card } from "react-bootstrap";
import "../ScreenContainer.css";
import ForYouItems from "./ForYouItems";

export default function GuidelinesForRestaurantsMain() {
  return (
    <div className="MAIN">
      <h1 className="Title">Guidelines for Restaurants</h1>
      <div className="CenterBody ForYouContainer ">
        <div className="ForYouItemContainer">
          <div>
            <Accordion defaultActiveKey="0">
              <Card className="disableAccordion-border">
                <Card.Header className="disableAccordion-border">
                  <Accordion.Toggle
                    className="disableAccordion-border"
                    variant="link"
                    eventKey="0"
                  >
                    <h5 className="ForYouItemTitle-h">
                      Restaurant Name&nbsp;<i className="fas fa-sort-down"></i>
                    </h5>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse
                  eventKey="0"
                  className="disableAccordion-border"
                >
                  <Card.Body className="ForYouItemCard">
                    <div>
                      <p>
                        <strong>
                          Restaurant names are how our users search for and
                          identify places to eat at and order from.
                        </strong>
                      </p>
                      <div>
                        For this to be easy to do, restaurant listings must be
                        as user-friendly as possible. Here are a few guidelines
                        that must be followed for restaurant listings on United
                        Planners:
                        <ol>
                          <li>
                            <p>
                              Restaurant names on United Planners need to be
                              written as they appear on the board outside the
                              restaurant.
                            </p>
                          </li>
                          <li>
                            <p>
                              Restaurant taglines and establishment types must
                              not be mentioned in the name of the restaurant on
                              United Planners. People usually remember
                              restaurants by name rather than by tagline, and
                              also makes them easier to search for. Eg. 'Masala
                              – Spice of Life’ is incorrect, since ‘Spice of
                              Life’ is a tagline that shouldn’t be mentioned in
                              the name. However, if a restaurant name has been
                              legally registered with the tagline, we will
                              accept it.
                            </p>
                          </li>
                          <li>
                            <p>
                              We don’t add restaurant abbreviations in the
                              restaurant name on United Planners. For instance,
                              if your restaurant’s name is ‘Tiger Restaurant’,
                              we can’t add it as ‘TB’. This may affect the
                              search results when a user searches for the
                              restaurant organically. If you need to add an
                              abbreviation or an alias, we can add them
                              separately.
                            </p>
                          </li>
                        </ol>
                      </div>
                    </div>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              {/* 2nd card */}
              <Card className="disableAccordion-border">
                <Card.Header className="disableAccordion-border">
                  <Accordion.Toggle
                    className="disableAccordion-border"
                    variant="link"
                    eventKey="1"
                  >
                    <h5 className="ForYouItemTitle-h">
                      Restaurant Address&nbsp;
                      <i className="fas fa-sort-down"></i>
                    </h5>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse
                  eventKey="1"
                  className="disableAccordion-border"
                >
                  <Card.Body className="ForYouItemCard">
                    <div>
                      <p>
                        <strong>
                          The address of a restaurant is what guides diners to
                          the restaurant. For this to be easy to do, restaurant
                          listings must be as user-friendly as possible.
                        </strong>
                      </p>
                      <div>
                        Here are a few guidelines that must be followed for
                        restaurant listings on United Planners:
                        <ol>
                          <li>
                            <p>
                              The address needs to be in a standardized format
                              for consistency and ease of understanding for
                              users. The order we follow to display the
                              available information is: [Shop/ Plot Number],
                              [Opposite/Beside Landmark], [Road Number/Name],
                              [Neighbourhood], [City]
                            </p>
                          </li>
                          <li>
                            <p>
                              We try not to add more than one landmark, and
                              don’t use abbreviations such as St. (for Street),
                              No. (for Number), or Opp. (for Opposite) to
                              maintain quality and consistency.
                            </p>
                          </li>
                          <li>
                            <p>
                              We don’t add other restaurant names as landmarks
                              since it affects results when searching for either
                              restaurant.
                            </p>
                          </li>
                          <li>
                            <p>
                              We add the floor number along with name of the
                              building if the restaurant is situated on a level
                              above the ground floor, as users may have
                              difficulty locating it.
                            </p>
                          </li>
                        </ol>
                      </div>
                    </div>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              {/* 3nd card */}
              <Card className="disableAccordion-border">
                <Card.Header className="disableAccordion-border">
                  <Accordion.Toggle
                    className="disableAccordion-border"
                    variant="link"
                    eventKey="2"
                  >
                    <h5 className="ForYouItemTitle-h">
                      Restaurant Features&nbsp;
                      <i className="fas fa-sort-down"></i>
                    </h5>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse
                  eventKey="2"
                  className="disableAccordion-border"
                >
                  <Card.Body className="ForYouItemCard">
                    <div>
                      <p>
                        <strong>
                          These are the facilities that a diner is looking for
                          when they’re making a decision about where to dine,
                          and are called attribute tags on United Planners.
                        </strong>
                      </p>
                      <div>
                        Some of the most popular ones are below:
                        <ol>
                          <li>
                            <p>
                              The <strong>Pure Veg</strong> tag is used for
                              restaurants that serve only vegetarian food (i.e.
                              no meat or eggs).
                            </p>
                          </li>
                          <li>
                            <p>
                              We mark the <strong>Smoking Area</strong> tag only
                              for restaurants that have a separate smoking area
                              as well as a non-smoking section. This is for the
                              benefit of users – smokers and non-smokers alike –
                              to make an informed decision when picking a
                              restaurant. A restaurant which allows diners to
                              smoke outside their doors does not need this tag.
                            </p>
                          </li>
                          <li>
                            <p>
                              <strong>Happy Hours</strong> are exclusively for
                              restaurants that serve alcohol, and that provide
                              discounted rates or special offers during a period
                              in the day. We don’t mark Happy Hours for offers
                              on non-alcoholic drinks.
                            </p>
                          </li>
                          <li>
                            <p>
                              <strong> WiFi Available</strong>is marked if WiFi
                              services can be used by diners at the restaurant.
                              We can’t add this tag to your restaurant if the
                              WiFi can only be used by the management.
                            </p>
                          </li>
                        </ol>
                      </div>
                    </div>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              {/* 4nd card */}
              <Card className="disableAccordion-border">
                <Card.Header className="disableAccordion-border">
                  <Accordion.Toggle
                    className="disableAccordion-border"
                    variant="link"
                    eventKey="3"
                  >
                    <h5 className="ForYouItemTitle-h">
                      Business Hours&nbsp;<i className="fas fa-sort-down"></i>
                    </h5>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse
                  eventKey="3"
                  className="disableAccordion-border"
                >
                  <Card.Body className="ForYouItemCard">
                    <div>
                      <p>
                        <strong>
                          Business hours represent the operational hours of a
                          restaurant, so diners can plan their visits.
                        </strong>
                      </p>
                      <div>
                        Users can filter restaurants based on a restaurant’s
                        opening hours by using the “Open at” filter on United
                        Planners. This ensures that they find a place to dine
                        depending on when it’s convenient for them. Some of the
                        guidelines we have around timings are:
                        <ol>
                          <li>
                            <p>
                              We use a 24-hour clock when we add timings to a
                              listing. This is displayed on the restaurant page
                              in a 12-hour clock format. For instance, if your
                              restaurant is open from 9 am to 6 pm, we add it as
                              09:00 to 18:00 to the listing for it to display
                              correctly.
                            </p>
                          </li>
                          <li>
                            <p>
                              We always add the timing for the dine-in hours. If
                              the delivery hours are different from the dine-in
                              timings, we can add the custom delivery timings to
                              your page if you mail us at
                              unitedplanners2021@gmail.com.
                            </p>
                          </li>
                          <li>
                            <p>
                              Our timing grids accepts only numerals, so this
                              mandates specific times to be entered. As a
                              result, we can’t add text such as ‘Late’ or ‘Early
                              Hours’ right now. However, we are working on a
                              provision to display non-specific times for
                              restaurants that don’t have a set opening or
                              closing time.
                            </p>
                          </li>
                          <li>
                            <p>
                              Entering specific timings as specified above will
                              also help our users find your restaurant using the
                              filter ‘Open at’ if they search for a specific
                              time while choosing a restaurant.
                            </p>
                          </li>
                        </ol>
                      </div>
                    </div>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              {/* 5nd card */}
              <Card className="disableAccordion-border">
                <Card.Header className="disableAccordion-border">
                  <Accordion.Toggle
                    className="disableAccordion-border"
                    variant="link"
                    eventKey="4"
                  >
                    <h5 className="ForYouItemTitle-h">
                      Photos&nbsp;<i className="fas fa-sort-down"></i>
                    </h5>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse
                  eventKey="4"
                  className="disableAccordion-border"
                >
                  <Card.Body className="ForYouItemCard">
                    <div>
                      <p>
                        <strong>
                          The photo stream of a restaurant gives diners an idea
                          about what to expect at the restaurant in terms of
                          ambiance, service, and food.
                        </strong>
                      </p>
                      <div>
                        A complete set of façade, ambiance, and food shots on a
                        restaurant page gives the diner all the information he
                        needs to make a decision. Some pointers to remember
                        while uploading photos for the restaurant are:
                        <ol>
                          <li>
                            <p>
                              We only put-up relevant photos that showcase the
                              restaurant's ambiance or food. This is because
                              users looking through the images would want to
                              know the factors that could affect their
                              experience at the restaurant – primarily the
                              ambiance and the food. Façade/exterior shots are
                              added to help customers identify the restaurant
                              visually.
                            </p>
                          </li>
                          <li>
                            <div>
                              We follow an order in which photos appear on the
                              photo stream, which is maintained for all
                              restaurants: [Façade/exterior shots] ---
                              [Ambiance/interior shots] --- [Food shots]. We
                              order this in the way the diner will experience it
                              first-hand.
                              <ol>
                                <li>
                                  <p>
                                    <strong>Facade shots</strong> are photos
                                    taken from the exterior of the restaurant,
                                    typically including the sign and the
                                    entrance
                                  </p>
                                </li>
                                <li>
                                  <p>
                                    <strong>Ambiance shots</strong> are photos
                                    of the interiors of the restaurant that give
                                    the users information about the lighting or
                                    seating arrangement at the restaurant
                                  </p>
                                </li>
                                <li>
                                  <p>
                                    <strong>Food shots</strong> are images of
                                    food prepared by that specific restaurant
                                  </p>
                                </li>
                              </ol>
                            </div>
                          </li>
                          <li>
                            <p>We do not put-up images with people in them.</p>
                          </li>
                          <li>
                            <p>
                              We do not put-up ambiance/food shots that are
                              stock images, or taken from Google Images/other
                              websites, as that would be copyright infringement.
                            </p>
                          </li>
                          <li>
                            <p>
                              Even if stock photos have been legally purchased
                              by the restaurant, they are not uploaded as they
                              do not depict the true nature of the food and
                              service provided by the restaurant. This is
                              misleading for diners.
                            </p>
                          </li>
                          <li>
                            <p>
                              We currently only support .JPEG file formats for
                              photo uploads.
                            </p>
                          </li>
                          <li>
                            <p>
                              A single frame can only contain a single photo. We
                              try not to upload photo collages as they don’t
                              always show a clear picture of what’s at the
                              restaurant.
                            </p>
                          </li>
                          <li>
                            <p>
                              We do not use images where logos and social media
                              handles take up a significant portion of the
                              image. We’re a neutral platform, and we don’t want
                              to look like we’re promoting any restaurants.
                            </p>
                          </li>
                        </ol>
                      </div>
                    </div>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              {/* 6 card */}
              <Card className="disableAccordion-border">
                <Card.Header className="disableAccordion-border">
                  <Accordion.Toggle
                    className="disableAccordion-border"
                    variant="link"
                    eventKey="5"
                  >
                    <h5 className="ForYouItemTitle-h">
                      Menus&nbsp;<i className="fas fa-sort-down"></i>
                    </h5>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse
                  eventKey="5"
                  className="disableAccordion-border"
                >
                  <Card.Body className="ForYouItemCard">
                    <div>
                      <p>
                        <strong>
                          Diners rely extensively on the menus on United
                          Planners when deciding on where to eat or what to
                          order, and to know how much it might cost them.
                        </strong>
                      </p>
                      <div>
                        This is one of the primary deciding factors in a user’s
                        decision on which restaurant to visit. We maintain some
                        important criteria for menus, based largely on user
                        feedback:
                        <ol>
                          <li>
                            <p>
                              The maximum dimensions we can upload for menu
                              pages are 650x700 pixels. The size helps maintain
                              uniformity and provides an optimal viewing
                              experience on the website and the app.
                            </p>
                          </li>
                          <li>
                            <p>
                              We try to keep only the relevant text portion of
                              the menu on the page, and do away with any
                              surrounding graphics on the menu.
                            </p>
                          </li>
                          <li>
                            <p>
                              We maintain the highest menu quality, and put up
                              very clear menus. Clarity includes many criteria –
                              pages with proper alignment, appropriate lighting,
                              contrast, and legibility of text on the page are a
                              few.
                            </p>
                          </li>
                          <li>
                            <p>
                              We try and correct minute details, but if a menu
                              required has major editing, we try our best to
                              give the highest quality data to our users.
                              However, if we are unable to do so, we will need
                              to remove it. A couple of major issues are:
                              flash/glare appearing on the page, blurry images
                              etc. We’ll need you to resend the menu if we can’t
                              edit it.
                            </p>
                          </li>
                          <li>
                            <p>
                              We maintain a certain order for menu pages,
                              similar to the way a user would read through a
                              menu: [Appetizers/soups] --- [Entrées] --- [Main
                              course] --- [Desserts]
                            </p>
                          </li>
                          <li>
                            <p>
                              We can retain the order of pages if that is how
                              the restaurant would like users to see it.
                            </p>
                          </li>
                          <li>
                            <p>
                              Promotional menus and other Special Menus are not
                              to be uploaded as regular restaurant menus as they
                              may not be part of the restaurant’s year-long
                              menu. All promotional and special menus will also
                              be subject to the above guidelines.
                            </p>
                          </li>
                          <li>
                            <p>
                              We avoid putting up menus without prices as it
                              affects a user's decision. The menu must include
                              the names of the dishes and prices, as this helps
                              users get an idea of how much they will spend at
                              the restaurant.
                            </p>
                          </li>
                        </ol>
                      </div>
                    </div>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              {/* 7 card */}
              <Card className="disableAccordion-border">
                <Card.Header className="disableAccordion-border">
                  <Accordion.Toggle
                    className="disableAccordion-border"
                    variant="link"
                    eventKey="6"
                  >
                    <h5 className="ForYouItemTitle-h">
                      Cover Photos&nbsp;<i className="fas fa-sort-down"></i>
                    </h5>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse
                  eventKey="6"
                  className="disableAccordion-border"
                >
                  <Card.Body className="ForYouItemCard">
                    <div>
                      <p>
                        <strong>
                          Cover photos are meant to visually enhance the page,
                          as well as convey information about the establishment.
                        </strong>
                      </p>
                      <div>
                        Because of their importance, we have a few specific
                        guidelines:
                        <ol>
                          <li>
                            <p>
                              Stock images aren’t allowed, so please choose food
                              and ambiance images which depict your restaurant.
                            </p>
                          </li>
                          <li>
                            <p>The photo needs to be visually appealing.</p>
                          </li>
                          <li>
                            <p>
                              The image should have high resolution (images with
                              1200x500 pixels or greater in resolution).
                            </p>
                          </li>
                          <li>
                            <p>
                              Photos of raw ingredients are not allowed, unless
                              that is the way the food is served.
                            </p>
                          </li>
                          <li>
                            <p>
                              Please do not add superimposed logos to the
                              photos. However, in-content branding, such as
                              logos on boxes, walls, crockery, etc is allowed.
                            </p>
                          </li>
                          <li>
                            <p>
                              Horizontal photos are preferred, as they would be
                              far better suited to the page layout. While
                              vertical photos are allowed, the focal elements of
                              the image may be lost when it is cropped to the
                              required dimensions.
                            </p>
                          </li>
                          <li>
                            <p>
                              Websites, phone numbers, and other text should not
                              be superimposed on the photo.
                            </p>
                          </li>
                        </ol>
                      </div>
                    </div>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              {/* 8 card */}
              <Card className="disableAccordion-border">
                <Card.Header className="disableAccordion-border">
                  <Accordion.Toggle
                    className="disableAccordion-border"
                    variant="link"
                    eventKey="7"
                  >
                    <h5 className="ForYouItemTitle-h">
                      New Listing Creation – Guidelines&nbsp;
                      <i className="fas fa-sort-down"></i>
                    </h5>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse
                  eventKey="7"
                  className="disableAccordion-border"
                >
                  <Card.Body className="ForYouItemCard">
                    <div>
                      <div>
                        We will create a new listing for your restaurant if
                        there have been any major changes that will affect a
                        user’s experience. A couple of examples are below:
                        <ol>
                          <li>
                            <p>
                              A complete change in cuisine. For instance, if you
                              were serving Asian food and have changed your
                              cuisine to European
                            </p>
                          </li>
                          <li>
                            <p>
                              Any changes in the type of establishment, such as
                              a bar revamped into a cafe
                            </p>
                          </li>
                          <li>
                            <p>
                              If you change locations, and the new outlet is not
                              in the same area or neighbourhood as the original
                              outlet
                            </p>
                          </li>
                        </ol>
                      </div>
                      <div>
                        If one of the above is met, we will then create a new
                        listing if:
                        <ol>
                          <li>
                            <p>
                              There’s been a change in the name of the
                              establishment and not just an addition to the
                              original name, e.g. if Drift Bar is renamed Drift
                              Bar & Grill, a new listing is not warranted as
                              there is no major change in the concept of the
                              restaurant such as the cuisine, location, or
                              establishment type.
                            </p>
                          </li>
                          <li>
                            <p>
                              The establishment has come under ownership of new
                              management and there’s been a change in concept.
                              If there’s no change in concept, we don’t create a
                              new listing as the new management is taking over
                              everything in the establishment, including its
                              existing image.
                            </p>
                          </li>
                          <li>
                            <p>
                              Changes in ambiance will be taken up individually,
                              and creating a new listing will be at our
                              discretion.
                            </p>
                          </li>
                          <li>
                            <p>
                              A combination of any two criteria above will
                              require a new listing.
                            </p>
                          </li>
                        </ol>
                      </div>
                      <p>
                        We don’t create new listings when menu prices change,
                        when cuisines or facilities are added/removed, or if the
                        restaurant was temporarily shut.
                      </p>
                      <p>
                        For any assistance with your restaurant page, please
                        write to us at &nbsp;
                        <a href="mailto:unitedplanners2021@gmail.com">
                          unitedplanners2021@gmail.com
                        </a>
                        , and we’ll get back to you at the earliest.
                      </p>
                    </div>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </div>
        </div>

        <ForYouItems Guidelines_btnActive="white" />
      </div>
    </div>
  );
}
