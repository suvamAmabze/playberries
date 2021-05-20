import React, { useState } from "react";
import { Accordion, Card } from "react-bootstrap";
import "../ScreenContainer.css";
import ForYouItems from "./ForYouItems";

export default function PrivacyMain() {
  const [click, setClicked] = useState(<i className="fas fa-sort-down"></i>);

  const clickMe = (event) => {
    console.log(event)
    if (click.props.className === "fas fa-sort-down") {
      setClicked(<i className="fas fa-sort-up"></i>);
    } else {
      setClicked(<i className="fas fa-sort-down"></i>);
    }
  };

  return (
    <div className="MAIN">
      <h1 className="Title">Privacy Policy</h1>
      <div className="CenterBody ForYouContainer ">
        <div className="ForYouItemContainer">
          <p>
            Playberries Private Limited has copyright over this privacy policy.
            This Privacy Policy (“Policy”) describes the policies and procedures
            on the collection, use, disclosure and protection of your
            information when you use our website located at unitedplanners.in,
            or the UpoN mobile application (collectively, “Playberries
            Platform”) made available by Amabze Technolozy Private Limited
            (“Playberries”, “Company”, “we”, “us” and “our”), a private company
            established under the laws of India with C/o Jeewan Dhara having its
            registered office near Jubba Sahni Market, Mithanpura, Muzaffarpur,
            Bihar – 842002.
          </p>
          <p>
            Playberries respect your privacy and is committed to protecting it
            through its compliance with its privacy policies. This policy
            describes:
          </p>
          <div>
            <ol>
              <li>
                <p>
                  <strong>
                    the types of information that Playberries may collect from
                    you when you access or use its websites, applications and
                    other online services (collectively, referred as
                    "Services"); and
                  </strong>
                </p>
              </li>
              <li>
                <p>
                  <strong>
                    its practices for collecting, using, maintaining, protecting
                    and disclosing that information.
                  </strong>
                </p>
              </li>
            </ol>
          </div>
          <p>
            Playberries value the trust you place in us and that is why we
            insist upon the highest standards for operator information policy.
          </p>
          <p>
            This policy applies only to the information Playberries collects
            through its Services, in email, text and other electronic
            communications sent through or in connection with its Services.
          </p>
          <p>
            This policy DOES NOT apply to information that you provide to, or
            that is collected by, any third party, such as restaurants at which
            you make reservations and/or pay through United Planner’s Services
            and social networks that you use in connection with its Services.
            Playberries encourages you to consult directly with such
            third-parties about their privacy practices.
          </p>
          <p>
            By using the Playberries Platform and the Services, you agree and
            consent to the collection, transfer, use, storage, disclosure and
            sharing of your information as described and collected by us in
            accordance with this Policy. If you do not agree with the Policy,
            please do not use or access the Playberries Platform.
          </p>
          <p>
            We may occasionally update this Policy and such changes will be
            posted on this page. If we make any significant changes to this
            Policy, we will endeavor to provide you with reasonable notice of
            such changes, such as via prominent notice on the Playberries
            Platform or to your email address on record and where required by
            applicable law, we will obtain your consent. To the extent permitted
            under the applicable law, your continued use of our Services after
            we publish or send a notice about our changes to this Policy shall
            constitute your consent to the updated Policy.
          </p>
          <p>
            The Playberries Platform may contain links to other websites. Any
            personal information about you collected whilst visiting such
            websites is not governed by this Policy. Playberries shall not be
            responsible for and has no control over the practices and content of
            any website accessed using the links contained on the Playberries
            Platform. This Policy shall not apply to any information you may
            disclose to any of our service providers/service personnel which we
            do not require you to disclose to us or any of our service providers
            under this Policy. Your data controller is responsible for the
            collection, use, disclosure, retention, and protection of your
            personal information in accordance with its privacy standards as
            well as any applicable national laws. Your data controller may
            transfer data to other members of Playberries as described in this
            Privacy Policy. Playberries may process and retain your personal
            information on its servers in India where its data centers are
            located, and/or on the servers of its third parties having
            contractual relationships with Playberries.
          </p>

          <div>
            <Accordion defaultActiveKey="0">
              {/* 1 card */}
              <Card className="disableAccordion-border">
                <Card.Header className="disableAccordion-border">
                  <Accordion.Toggle
                    className="disableAccordion-border"
                    variant="link"
                    eventKey="0"
                    onClick={() => clickMe()}
                  >
                    <h5 className="ForYouItemTitle-h">
                      3. Information you give us&nbsp;
                      {/* <i className="fas fa-sort-down"></i> */}
                      {click}
                    </h5>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse
                  eventKey="0"
                  className="disableAccordion-border"
                >
                  <Card.Body className="ForYouItemCard">
                    <ul>
                      <li>
                        <p>
                          A. Create or update your Playberries account, which
                          may include your name, email, phone number, login name
                          and password, address, payment or banking information,
                          date of birth and profile picture. If you sign in to
                          the. Playberries Platform through third-party sign-in
                          services such as Facebook, Google Plus or Gmail or any
                          other social networking or similar site (collectively,
                          “SNS”), an option of which may be provided to you by
                          Playberries at its sole discretion, you will be
                          allowing us to pass through and receive from the SNS
                          your log-in information and other user data; or
                        </p>
                      </li>
                      <li>
                        <p>
                          B. Provide content to us, which may include reviews,
                          ordering details and history, favorite vendors,
                          special merchant requests, contact information of
                          people you refer to us and other information you
                          provide on the. Playberries Platform (“Your Content”).
                        </p>
                      </li>
                      <li>
                        <p>
                          C. Use our Services, we may collect and store
                          information about you to process your requests and
                          automatically complete forms for future transactions,
                          including (but not limited to) your phone number,
                          address, email, billing information and credit or
                          payment card information.
                        </p>
                      </li>
                      <li>
                        <p>
                          D. Correspond with Playberries for customer support;
                        </p>
                      </li>
                      <li>
                        <p>
                          E. Participate in the interactive services offered by
                          the Playberries Platform such as discussion boards,
                          competitions, promotions or surveys, other social
                          media functions or make payments etc., or
                        </p>
                      </li>
                      <li>
                        <p>
                          F. Enable features that require United Planner’s
                          access to your address book or calendar;
                        </p>
                      </li>
                      <li>
                        <p>G. Report problems for troubleshooting.</p>
                      </li>
                      <li>
                        <p>
                          H. If you sign up to use our Services as a merchant or
                          a captain, we may collect location details, copies of
                          government identification documents and other details
                          (KYC), call and SMS details.
                        </p>
                      </li>
                    </ul>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              {/* 2 card */}
              <Card className="disableAccordion-border">
                <Card.Header className="disableAccordion-border">
                  <Accordion.Toggle
                    className="disableAccordion-border"
                    variant="link"
                    eventKey="1"
                    onClick={() => clickMe()}
                  >
                    <h5 className="ForYouItemTitle-h">
                      4. Information we collect about you&nbsp;
                      {/* <i className="fas fa-sort-down"></i> */}
                      {click}
                    </h5>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse
                  eventKey="1"
                  className="disableAccordion-border"
                >
                  <Card.Body className="ForYouItemCard">
                    <ul>
                      <li>
                        <p>
                          I. Your Personal Information("PI") - Personal
                          Information is the information that can be associated
                          with a specific person and could be used to identify
                          that specific person whether from that data, or from
                          the data and other information that we have, or is
                          likely to have access to. We do not consider personal
                          information to include information that has been made
                          anonymous or aggregated so that it can no longer be
                          used to identify a specific person, whether in
                          combination with other information or otherwise.
                        </p>
                      </li>
                      <li>
                        <p>
                          J. Information about your internet connection, the
                          equipment you use to access our Services and your
                          usage details.
                        </p>
                      </li>
                      <li>
                        <p>We collect this information:</p>
                        <p>
                          K. directly from you when you provide it to us; and/or
                        </p>
                      </li>
                      <li>
                        <p>
                          L. Automatically as you navigate through our Services
                          (information collected automatically may include usage
                          details, IP addresses and information collected
                          through cookies, web beacons and other tracking
                          technologies).
                        </p>
                        <p>
                          With regard to each of your visits to the Playberries
                          Platform, we will automatically collect and analyses
                          the following demographic and other information:
                        </p>
                      </li>
                      <li>
                        <p>
                          M. When you communicate with us (via email, phone,
                          through the Playberries Platform or otherwise), we may
                          maintain a record of your communication;
                        </p>
                      </li>
                      <li>
                        <p>
                          N. <strong>Location information:</strong> Depending on
                          the Services that you use, and your app settings or
                          device permissions, we may collect your real time
                          information, or approximate location information as
                          determined through data such as GPS, IP address;
                        </p>
                      </li>
                      <li>
                        <p>
                          O. <strong>Usage and Preference Information:</strong>
                          &nbsp; We collect information as to how you interact
                          with our Services, preferences expressed and settings
                          chosen. Playberries Platform includes the Playberries
                          advertising services (“Ad Services”), which may
                          collect user activity and browsing history within the
                          Playberries Platform and across third-party sites and
                          online services, including those sites and services
                          that include our ad pixels (“Pixels”), widgets,
                          plug-ins, buttons, or related services or through the
                          use of cookies. Our Ad Services collect browsing
                          information including without limitation your Internet
                          protocol (IP) address and location, your login
                          information, browser type and version, date and time
                          stamp, user agent, Playberries cookie ID (if
                          applicable), time zone setting, browser plug-in types
                          and versions, operating system and platform, and other
                          information about user activities on the Playberries
                          Platform, as well as on third party sites and services
                          that have embedded our Pixels, widgets, plug-ins,
                          buttons, or related services;
                        </p>
                      </li>
                      <li>
                        <p>
                          P. <strong>Transaction Information:</strong> We
                          collect transaction details related to your use of our
                          Services, and information about your activity on the
                          Services, including the full Uniform Resource Locators
                          (URL), the type of Services you requested or provided,
                          comments, domain names, search results selected,
                          number of clicks, information and pages viewed and
                          searched for, the order of those pages, length of your
                          visit to our Services, the date and time you used the
                          Services, amount charged, details regarding
                          application of promotional code, methods used to
                          browse away from the page and any phone number used to
                          call our customer service number and other related
                          transaction details;
                        </p>
                      </li>
                      <li>
                        <p>
                          Q. <strong>Device Information:</strong>&nbsp; We may
                          collect information about the devices you use to
                          access our Services, including the hardware models,
                          operating systems and versions, software, file names
                          and versions, preferred languages, unique device
                          identifiers, advertising identifiers, serial numbers,
                          device motion information and mobile network
                          information. Analytics companies may use mobile device
                          IDs to track your usage of the Playberries Platform;
                        </p>
                      </li>
                      <li>
                        <p>
                          U. <strong>Stored information and files:</strong>
                          &nbsp; Playberries mobile application (UpoN app) may
                          also access metadata and other information associated
                          with other files stored on your mobile device. This
                          may include, for example, photographs, audio and video
                          clips, personal contacts and address book information.
                          If you permit the Playberries app to access the
                          address book on your device, we may collect names and
                          contact information from your address book to
                          facilitate social interactions through our services
                          and for other purposes described in this Policy or at
                          the time of consent or collection. If you permit the
                          Playberries app to access the calendar on your device,
                          we collect calendar information such as event title
                          and description, your response (Yes, No, Maybe), date
                          and time, location and number of attendees.{" "}
                        </p>
                      </li>
                      <li>
                        <p>
                          R. If you are a partner restaurant, merchant or a
                          captain, we will, additionally, record your calls with
                          us made from the device used to provide Services,
                          related call details, SMS details location and address
                          details.
                        </p>
                      </li>
                    </ul>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              {/* 3 card */}
              <Card className="disableAccordion-border">
                <Card.Header className="disableAccordion-border">
                  <Accordion.Toggle
                    className="disableAccordion-border"
                    variant="link"
                    eventKey="2"
                  >
                    <h5 className="ForYouItemTitle-h">
                      5. Information about Your Messages&nbsp;
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
                      If you exchange messages with others through the Services,
                      we may store them in order to process and deliver them,
                      allow you to manage them, and investigate possible
                      violations of our Terms of Service and wrongdoing in
                      connection with the Services. If you send information from
                      the Services to your mobile device via SMS text message,
                      we may log your phone number, phone carrier, and the date
                      and time that the message was processed. Carriers may
                      charge recipients for texts that they receive.
                    </div>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              {/* 4 card */}
              <Card className="disableAccordion-border">
                <Card.Header className="disableAccordion-border">
                  <Accordion.Toggle
                    className="disableAccordion-border"
                    variant="link"
                    eventKey="3"
                  >
                    <h5 className="ForYouItemTitle-h">
                      6. Information we receive from other sources&nbsp;
                      <i className="fas fa-sort-down"></i>
                    </h5>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse
                  eventKey="3"
                  className="disableAccordion-border"
                >
                  <Card.Body className="ForYouItemCard">
                    <ul>
                      <li>
                        <p>
                          S. We may receive information about you from third
                          parties, such as other users, partners (including ad
                          partners, analytics providers, search information
                          providers), or our affiliated companies or if you use
                          any of the other websites/apps we operate or the other
                          Services we provide. Users of our Ad Services and
                          other third-parties may share information with us such
                          as the cookie ID, device ID, or demographic or
                          interest data, and information about content viewed or
                          actions taken on a third-party website, online
                          services or apps. For example, users of our Ad
                          Services may also be able to share customer list
                          information (e.g., email or phone number) with us to
                          create customized audience segments for their ad
                          campaigns.
                        </p>
                      </li>
                      <li>
                        <p>
                          T. When you sign in to Playberries Platform with your
                          SNS account, or otherwise connect to your SNS account
                          with the Services, you consent to our collection,
                          storage, and use, in accordance with this Policy, of
                          the information that you make available to us through
                          the social media interface. This could include,
                          without limitation, any information that you have made
                          public through your social media account, information
                          that the social media service shares with us, or
                          information that is disclosed during the sign-in
                          process. Please see your social media provider’s
                          privacy policy and help center for more information
                          about how they share information when you choose to
                          connect your account.
                        </p>
                      </li>
                      <li>
                        <p>
                          U. If you are partner restaurant, merchant or a
                          captain, we may, additionally, receive feedback and
                          rating from other users.
                        </p>
                      </li>
                    </ul>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              {/* 5 card */}
              <Card className="disableAccordion-border">
                <Card.Header className="disableAccordion-border">
                  <Accordion.Toggle
                    className="disableAccordion-border"
                    variant="link"
                    eventKey="4"
                  >
                    <h5 className="ForYouItemTitle-h">
                      7. Cookies and other Electronic Tools&nbsp;
                      <i className="fas fa-sort-down"></i>
                    </h5>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse
                  eventKey="4"
                  className="disableAccordion-border"
                >
                  <Card.Body className="ForYouItemCard">
                    <ul>
                      <li>
                        <p>
                          V. We, and third parties with whom we partner, may use
                          cookies, pixel tags, web beacons, mobile device IDs,
                          "flash cookies" and similar files or technologies to
                          collect and store information in respect to your use
                          of the Services and third-party websites. A cookie is
                          a small text file that is stored on your computer that
                          enables us to recognize you (for example, as a
                          registered user) when you visit our website, store
                          your preferences and settings, enhance your experience
                          by delivering content and advertising specific to your
                          interests, perform research and analytics, track your
                          use of our Services, and assist with security and
                          administrative functions. Cookies may be persistent or
                          stored only during an individual session. To
                          understand more about cookies, click here
                          https://www.aboutcookies.org. A pixel tag (also called
                          a web beacon or clear GIF) is a tiny graphic with a
                          unique identifier, embedded invisibly on a webpage (or
                          an online ad or email), and is used to count or track
                          things like activity on a webpage or ad impressions or
                          clicks, as well as to access cookies stored on users'
                          computers. Zomato uses pixel tags to measure the
                          popularity of our various pages, features and
                          services. We also may include web beacons in e-mail
                          messages or newsletters to determine whether the
                          message has been opened and for other analytics.
                        </p>
                      </li>
                      <li>
                        <p>
                          W. Most browsers are set to automatically allow
                          cookies. Please note it may be possible to disable
                          some (but not all) cookies through your device or
                          browser settings, but doing so may interfere with
                          certain functionality on the Services. Major browsers
                          provide users with various options when it comes to
                          cookies. Users can usually set their browsers to block
                          all third-party cookies (which are those set by
                          third-party companies collecting information on
                          websites operated by other companies), block all
                          cookies (including first-party cookies such as the
                          ones Zomato uses to collect search activity
                          information about its users), or block specific
                          cookies. To modify your cookie settings, please visit
                          your browser's help settings. You will need to opt out
                          on each browser and each device you use to access the
                          Services. Flash cookies operate differently than
                          browser cookies and cannot be removed or blocked via
                          web browser settings. By using our Services with your
                          browser set to accept cookies you are consenting to
                          our use of cookies in the manner described in this
                          section. For more information, please read our Cookie
                          Policy.
                        </p>
                      </li>
                      <li>
                        <p>
                          X. Third parties whose products or services are
                          accessible or advertised through the Services,
                          including social media services, may also use cookies
                          or similar tools, and we advise you to check their
                          privacy policies for information about their cookies
                          and other practices. We do not control the practices
                          of such partners and their privacy policies govern
                          their interactions with you.
                        </p>
                      </li>
                      <li>
                        <p></p>
                      </li>
                    </ul>
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
                    onClick={() => clickMe()}
                  >
                    <h5 className="ForYouItemTitle-h">
                      8. Uses of your information&nbsp;
                    </h5>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse
                  eventKey="5"
                  className="disableAccordion-border"
                >
                  <Card.Body className="ForYouItemCard">
                    <div>
                      We use the information we collect for following purposes,
                      including:
                      <ol>
                        <li>
                          <p>
                            To provide, personalize, maintain and improve our
                            products and services, such as to enable deliveries
                            and other services, enable features to personalize
                            your Playberries account;
                          </p>
                        </li>
                        <li>
                          <p>
                            To carry out our obligations arising from any
                            contracts entered into between you and us and to
                            provide you with the relevant information and
                            services;
                          </p>
                        </li>
                        <li>
                          <p>
                            To administer and enhance the security of our
                            Playberries Platform and for internal operations,
                            including troubleshooting, data analysis, testing,
                            research, statistical and survey purposes;
                          </p>
                        </li>
                        <li>
                          <p>
                            To provide you with information about services we
                            consider similar to those that you are already
                            using, or have enquired about, or may interest you.
                            If you are a registered user, we will contact you by
                            electronic means (e-mail or SMS or telephone) with
                            information about these services;
                          </p>
                        </li>
                        <li>
                          <p>
                            To understand our users (what they do on our
                            Services, what features they like, how they use
                            them, etc.), improve the content and features of our
                            Services (such as by personalizing content to your
                            interests), process and complete your transactions,
                            make special offers, provide customer support,
                            process and respond to your queries;
                          </p>
                        </li>
                        <li>
                          <p>
                            To generate and review reports and data about, and
                            to conduct research on, our user base and Service
                            usage patterns;
                          </p>
                        </li>
                        <li>
                          <p>
                            To allow you to participate in interactive features
                            of our Services, if any; or
                          </p>
                        </li>
                        <li>
                          <p>
                            To measure or understand the effectiveness of
                            advertising we serve to you and others, and to
                            deliver relevant advertising to you.
                          </p>
                        </li>
                        <li>
                          <p>
                            If you are a partner restaurant or merchant or
                            captain, to track the progress of delivery or status
                            of the order placed by our customers.
                          </p>
                        </li>
                        <li>
                          <p>
                            to carry out academic research with academic
                            partners.
                          </p>
                          <p>
                            We may combine the information that we receive from
                            third parties with the information you give to us
                            and information we collect about you for the
                            purposes set out above. Further, we may anonymize
                            and/or de-identify information collected from you
                            through the Services or via other means, including
                            via the use of third-party web analytic tools. As a
                            result, our use and disclosure of aggregated and/or
                            de-identified information is not restricted by this
                            Policy, and it may be used and disclosed to others
                            without limitation.
                          </p>
                          <p>
                            We analyze the log files of our Playberries Platform
                            that may contain Internet Protocol (IP) addresses,
                            browser type and language, Internet service provider
                            (ISP), referring, app crashes, page viewed and exit
                            websites and applications, operating system,
                            date/time stamp, and clickstream data. This helps us
                            to administer the website, to learn about user
                            behavior on the site, to improve our product and
                            services, and to gather demographic information
                            about our user base as a whole.
                          </p>
                        </li>
                      </ol>
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
                      9. How we use the information we collect&nbsp;
                      <i className="fas fa-sort-down"></i>
                    </h5>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse
                  eventKey="6"
                  className="disableAccordion-border"
                >
                  <Card.Body className="ForYouItemCard">
                    <div>
                      We use the information we collect from and about you for a
                      variety of purposes, including to:
                      <ol>
                        <li>
                          <p>Process and respond to your queries</p>
                        </li>
                        <li>
                          <p>
                            Understand our users (what they do on our Services,
                            what features they like, how they use them, etc.),
                            improve the content and features of our Services
                            (such as by personalizing content to your
                            interests), process and complete your transactions,
                            and make special offers.
                          </p>
                        </li>
                        <li>
                          <p>
                            Administer our Services and diagnose technical
                            problems.
                          </p>
                        </li>
                        <li>
                          <p>
                            Send you communications that you have requested or
                            that may be of interest to you by way of emails, or
                            courier, or registered post, or telephone calls, or
                            any other mode of communication. We may also share
                            your preferences or the Services availed by you with
                            your network followers on Playberries for marketing
                            and other promotional activities of our Services.
                          </p>
                        </li>
                        <li>
                          <p>
                            Send you questions from other users that you may be
                            able to answer if you have registered with
                            Playberries.
                          </p>
                        </li>
                        <li>
                          <p>
                            Enable us to show you ads that are relevant to you.
                          </p>
                        </li>
                        <li>
                          <p>
                            Generate and review reports and data about, and to
                            conduct research on, our user base and Service usage
                            patterns.
                          </p>
                        </li>
                        <li>
                          <p>Administer contests and sweepstakes.</p>
                        </li>
                        <li>
                          <p>Provide you with customer support.</p>
                        </li>
                        <li>
                          <p>Provide you with policies about your account.</p>
                        </li>
                        <li>
                          <p>
                            Carry out our obligations and enforce our rights
                            arising from any contracts entered into between you
                            and us, including for billing and collection.
                          </p>
                        </li>
                        <li>
                          <p>Notify you about changes to our Services.</p>
                        </li>
                        <li>
                          <p>
                            Allow you to participate in interactive features
                            offered through our Services.
                          </p>
                        </li>
                        <li>
                          <p>
                            In any other way we may describe when you provide
                            the information.
                          </p>
                        </li>
                        <li>
                          <p>For any other purpose with your consent.</p>
                          <p>
                            We may also use your information to contact you
                            about our own and third-party goods and services
                            that may be of interest to you. If you do not want
                            us to use your information in this way, please check
                            the relevant box located on the form on which we
                            collect your data and/or adjust your user
                            preferences in your account profile.
                          </p>
                          <p>
                            We may use the information we have collected from
                            you to enable us to display advertisements to our
                            advertisers'/service providers' target audiences.
                            Even though we do not disclose your personal
                            information for these purposes without your consent,
                            if you click on or otherwise interact with an
                            advertisement, the advertiser may assume that you
                            meet its target criteria.
                          </p>
                        </li>
                      </ol>
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
                      10. Disclosure and distribution of your information&nbsp;
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
                      We may share your information that we collect for
                      following purposes:
                      <ol>
                        <li>
                          <p>
                            <strong> With Service Providers:</strong> We may
                            share your information with our vendors,
                            consultants, marketing partners, research firms and
                            other service providers or business partners, such
                            as Payment processing companies, to support our
                            business. For example, your information may be
                            shared with outside vendors to send you emails and
                            messages or push notifications to your devices in
                            relation to our Services, to help us analyze and
                            improve the use of our Services, to process and
                            collect payments. We also may use vendors for other
                            projects, such as conducting surveys or organizing
                            sweepstakes for us.
                          </p>
                        </li>
                        <li>
                          <p>
                            <strong>With Partner Restaurants/Merchant:</strong>
                            &nbsp; While you place a request to order event
                            through the UpoN Platform, your information is
                            provided to us and to the restaurants/merchants with
                            whom you may choose to order. In order to facilitate
                            your online event order processing, we provide your
                            information to that restaurant/merchant in a similar
                            manner as if you had made an event order directly
                            with the restaurant. If you provide a mobile phone
                            number, Playberries may send you text messages
                            regarding the order’s delivery status.
                          </p>
                        </li>
                        <li>
                          <p>
                            <strong>With Academic Partners:</strong> We may
                            share your information with our academic partners
                            for the purpose of carrying out academic research.
                          </p>
                        </li>
                        <li>
                          <p>
                            <strong>With Other Users:</strong> If you are a
                            captain, we may share your name, phone number and/or
                            profile picture (if applicable), tracking details
                            with other users to provide them the Services.
                          </p>
                        </li>
                        <li>
                          <div>
                            <strong>
                              For Crime Prevention or Investigation:
                            </strong>
                            &nbsp; We may share this information with
                            governmental agencies or other companies assisting
                            us, when we are:
                            <ol>
                              <li>
                                <p>
                                  Obligated under the applicable laws or in good
                                  faith to respond to court orders and
                                  processes; or
                                </p>
                              </li>
                              <li>
                                <p>
                                  Detecting and preventing against actual or
                                  potential occurrence of identity theft, fraud,
                                  abuse of Services and other illegal acts;
                                </p>
                              </li>
                              <li>
                                <p>
                                  Responding to claims that an advertisement,
                                  posting or other content violates the
                                  intellectual property rights of a third party;
                                </p>
                              </li>
                              <li>
                                <p>
                                  Under a duty to disclose or share your
                                  personal data in order to enforce our Terms of
                                  Use and other agreements, policies or to
                                  protect the rights, property, or safety of the
                                  Company, our customers, or others, or in the
                                  event of a claim or dispute relating to your
                                  use of our Services. This includes exchanging
                                  information with other companies and
                                  organizations for the purposes of fraud
                                  detection and credit risk reduction.
                                </p>
                              </li>
                            </ol>
                          </div>
                        </li>
                        <li>
                          <p>
                            <strong>For Internal Use:</strong> We may share your
                            information with any present or future member of our
                            “Group” (as defined below)or affiliates for our
                            internal business purposes The term “Group” means,
                            with respect to any person, any entity that is
                            controlled by such person, or any entity that
                            controls such person, or any entity that is under
                            common control with such person, whether directly or
                            indirectly, or, in the case of a natural person, any
                            Relative (as such term is defined in the Companies
                            Act, 1956 and Companies Act, 2013 to the extent
                            applicable) of such person.
                          </p>
                        </li>
                        <li>
                          <p>
                            <strong>
                              With Advertisers and advertising networks:
                            </strong>
                            &nbsp; We may work with third parties such as
                            network advertisers to serve advertisements on the
                            Playberries Platform and on thirdparty websites or
                            other media (e.g., social networking platforms).
                            These third parties may use cookies, JavaScript, web
                            beacons (including clear GIFs), Flash LSOs and other
                            tracking technologies to measure the effectiveness
                            of their ads and to personalize advertising content
                            to you.
                          </p>
                          <p>
                            While you cannot opt out of advertising on the
                            Playberries Platform, you may opt out of much
                            interest-based advertising on third party sites and
                            through third party ad networks (including
                            DoubleClick Ad Exchange, Facebook Audience Network
                            and Google AdSense). For more information, visit
                            &nbsp;
                            <a href="https://optout.aboutads.info/?c=2&lang=EN">
                              www.aboutads.info/choices
                            </a>
                            . Opting out means that you will no longer receive
                            personalized ads by third party’s ad networks from
                            which you have opted out, which is based on your
                            browsing information across multiple sites and
                            online services. If you delete cookies or change
                            devices, you opt out may no longer be effective.
                          </p>
                          <ol>
                            <li>
                              <p>
                                To fulfill the purpose for which you provide it.
                              </p>
                            </li>
                            <li>
                              <p>
                                We may share your information other than as
                                described in this Policy if we notify you and
                                you consent to the sharing.
                              </p>
                            </li>
                          </ol>
                        </li>
                      </ol>
                    </div>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              {/* 9 card */}
              <Card className="disableAccordion-border">
                <Card.Header className="disableAccordion-border">
                  <Accordion.Toggle
                    className="disableAccordion-border"
                    variant="link"
                    eventKey="8"
                  >
                    <h5 className="ForYouItemTitle-h">
                      11. Payment Card Information&nbsp;
                      <i className="fas fa-sort-down"></i>
                    </h5>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse
                  eventKey="8"
                  className="disableAccordion-border"
                >
                  <Card.Body className="ForYouItemCard">
                    <div>
                      To use certain of our Services, such as to make
                      reservations at certain restaurants and to make payments
                      to certain restaurants, we may require credit or debit
                      card account information. By submitting your credit or
                      debit card account information through our Services, you
                      expressly consent to the sharing of your information with
                      restaurants, thirdparty payment processors, and other
                      third-party service providers (including but not limited
                      to vendors who provide fraud detection services to us and
                      other third parties), and you further agree to the
                      following terms:
                      <ol>
                        <li>
                          <p>
                            When you use a credit or debit card to secure a
                            reservation through our Sites, we provide your
                            credit or debit card account information (including
                            card number and expiration date) to our third-party
                            payment service providers and the applicable
                            restaurant.
                          </p>
                        </li>
                        <li>
                          <p>
                            When you initially provide your credit or debit card
                            account information through our Services in order to
                            use our restaurant payment services, we provide your
                            credit or debit card account information to our
                            third-party payment service providers. As explained
                            in our Terms of Use, these third parties may store
                            your credit or debit card account information so you
                            can use our restaurant payment services through our
                            Services in the future.
                          </p>
                        </li>
                        <li>
                          <p>
                            For information about the security of your credit or
                            debit card account information, see the "Security"
                            section below.
                          </p>
                        </li>
                      </ol>
                    </div>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              {/* 10 card */}
              <Card className="disableAccordion-border">
                <Card.Header className="disableAccordion-border">
                  <Accordion.Toggle
                    className="disableAccordion-border"
                    variant="link"
                    eventKey="9"
                  >
                    <h5 className="ForYouItemTitle-h">
                      12. Security: How we protect your information&nbsp;
                      <i className="fas fa-sort-down"></i>
                    </h5>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse
                  eventKey="9"
                  className="disableAccordion-border"
                >
                  <Card.Body className="ForYouItemCard">
                    <ol>
                      <li>
                        <p>
                          We have implemented appropriate physical, electronic,
                          and managerial procedures to safeguard and help
                          prevent unauthorized access to your information and to
                          maintain data security. These safeguards take into
                          account the sensitivity of the information that we
                          collect, process and store and the current state of
                          technology. We follow generally accepted industry
                          standards to protect the personal information
                          submitted to us, both during transmission and once we
                          receive it. The third-party service providers with
                          respect to payment gateway and payment processing are
                          all validated as compliant with the payment card
                          industry standard (generally referred to as PCI
                          compliant service providers).
                        </p>
                      </li>
                      <li>
                        <p>
                          We assume no liability or responsibility for
                          disclosure of your information due to errors in
                          transmission, unauthorized third-party access, or
                          other causes beyond our control. You play an important
                          role in keeping your personal information secure. You
                          should not share your user name, password, or other
                          security information for your Playberries account with
                          anyone. If we receive instructions using your user
                          name and password, we will consider that you have
                          authorized the instructions.
                        </p>
                      </li>
                    </ol>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              {/* 11 card */}
              <Card className="disableAccordion-border">
                <Card.Header className="disableAccordion-border">
                  <Accordion.Toggle
                    className="disableAccordion-border"
                    variant="link"
                    eventKey="10"
                  >
                    <h5 className="ForYouItemTitle-h">
                      13. Permissible Age &nbsp;
                      <i className="fas fa-sort-down"></i>
                    </h5>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse
                  eventKey="10"
                  className="disableAccordion-border"
                >
                  <Card.Body className="ForYouItemCard">
                    <p>
                      The Services are not intended for users under the age of
                      18, unless permitted under applicable local laws
                      (Permissible Age). We do not knowingly collect any
                      personal information from users or market to or solicit
                      information from anyone under the Permissible Age. If we
                      become aware that a person submitting personal information
                      is under the Permissible Age, we will delete the account
                      and any related information as soon as possible. If you
                      believe we might have any information from or about a user
                      under the Permissible Age, please contact us at&nbsp;
                      <a href="mailto:unitedplanners2021@gmail.com">
                        unitedplanners2021@gmail.com
                      </a>
                    </p>
                    <p>
                      <strong>Job applicants</strong>
                    </p>
                    <p>
                      If your information is submitted to us through our Service
                      when applying for a position with our company, the
                      information will be used to consider your application. We
                      may retain your information for any period of time. This
                      information may be shared with other companies for the
                      purpose of evaluating your qualifications for the
                      particular position or other available positions, as well
                      as with third-party service providers retained by us to
                      collect, maintain and analyze candidate submissions for
                      job postings.
                    </p>
                    <p>
                      <strong>
                        GRIEVANCE OFFICER AND PLAYBERRIES PLATFORM SECURITY
                      </strong>
                    </p>
                    <p>
                      If you have any queries relating to the processing or
                      usage of information provided by you in connection with
                      this Policy, please email us at &nbsp;
                      <a href="mailto:unitedplanners2021@gmail.com">
                        unitedplanners2021@gmail.com
                      </a>
                      &nbsp; or write to our Grievance Officer at the following
                      address:
                    </p>
                    <p>
                      Playberries Grievance Officer
                      <br />
                      C/o – Jeewan Dhara,
                      <br />
                      Jubba Sahni Market, Mithanpura,
                      <br />
                      Muzaffarpur, Bihar – 842002.
                      <br />
                    </p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </div>
        </div>

        <ForYouItems Privacy_btnActive="white" />
      </div>
    </div>
  );
}
