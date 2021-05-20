import React from "react";
import {
  Form,
  Input,
  Label,
  FormGroup,
  FormFeedback,
  Button,
} from "reactstrap";
import { FormControl } from "react-bootstrap";
import Footer from "../Footer";
import Header from "../Header";
import "../ScreenContainer.css";
import LoadingBox from "../LoadingBox";
import MessageBox from "../MessageBox";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { contactus } from "../../actions/contactusAction";


export default function ContactUsScreen(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [event, setEvent] = useState("");
  const [otherevent, setOtherevent] = useState("");
  const [message, setMessage] = useState("");

  const [nameErr, setNameErr] = useState({});
  const [emailErr, setEmailErr] = useState({});
  const [telephoneErr, setTelephoneErr] = useState({});
  const [otherEventErr, setOtherEventErr] = useState({});
  const [eventErr, setEventErr] = useState({});
  const [messageErr, setMessageErr] = useState({});

  const userContactus = useSelector((state) => state.userContactus);
  const { userInfo, loading, error } = userContactus;

  const formValidation = () => {
    const nameErr = {};
    const emailErr = {};
    const telephoneErr = {};
    const otherEventErr = {};
    const eventErr = {};
    const messageErr = {};
    let isValid = true;

    if (name === "") {
      nameErr.nameEmpty = "Name can not be blank.";
      isValid = false;
    }
    if (name.trim().length > 20) {
      nameErr.nameLong = "Name text is too long.";
      isValid = false;
    }
    if (email === "") {
      emailErr.emailEmpty = "Email can not be blank.";
      isValid = false;
    }
    // if (telephone === "") {
    //   telephoneErr.telephoneEmpty = "Telephone can not be blank.";
    //   isValid = false;
    // }
    if (
      telephone.trim().length <= 9 ||
      telephone.trim().length > 10 ||
      telephone === ""
    ) {
      telephoneErr.telephoneLong = "Length of a phone number is 10 digits.";
      isValid = false;
    }
    if (message === "") {
      messageErr.messageEmpty = "Message can not be blank.";
      isValid = false;
    }
    if (message.trim().length > 100) {
      messageErr.messageLong = "Message text is too long.";
      isValid = false;
    }
    // if (otherevent === "") {
    //   otherEventErr.otherEventEmpty = "Other event can not be blank.";
    //   isValid = false;
    // }
    if (otherevent.trim().length > 15) {
      otherEventErr.otherEventLong = "Other event text is too long.";
      isValid = false;
    }
    if (event === "") {
      eventErr.eventEmpty = "Select an event.";
      isValid = false;
    }

    setNameErr(nameErr);
    setEmailErr(emailErr);
    setTelephoneErr(telephoneErr);
    setMessageErr(messageErr);
    setOtherEventErr(otherEventErr);
    setEventErr(eventErr);
    return isValid;
  };

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    const isValid = formValidation();
    if (isValid) {
      dispatch(contactus(name, telephone, email, event, otherevent, message));
      setName("");
      setTelephone("");
      setEmail("");
      setEvent("");
      setOtherevent("");
      setMessage("");
    }
  };
  return (
    <div className="SCREEN-CONTAINER">
      <Header />
      <div className="MAIN">
        <h1 className="Title">Contact Us</h1>

        <Form onSubmit={submitHandler} className="ContactFormContainer">
          {loading && <LoadingBox></LoadingBox>}
          {error && <MessageBox variant="danger">{error}</MessageBox>}
          <FormGroup>
            <Label for="name">Full Name</Label>
            <Input
              placeholder="Enter Full Name"
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {Object.keys(nameErr).map((key) => {
              return (
                <div style={{ color: "red" }} key={key}>
                  {nameErr[key]}
                </div>
              );
            })}
          </FormGroup>

          <FormGroup>
            <Label for="telephone">Telephone</Label>
            <Input
              type="number"
              placeholder="Enter Telephone"
              name="telephone"
              value={telephone}
              onChange={(e) => setTelephone(e.target.value)}
            />
            {Object.keys(telephoneErr).map((key) => {
              return (
                <div style={{ color: "red" }} key={key}>
                  {telephoneErr[key]}
                </div>
              );
            })}
          </FormGroup>

          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              type="email"
              placeholder="name@example.com"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {Object.keys(emailErr).map((key) => {
              return (
                <div style={{ color: "red" }} key={key}>
                  {emailErr[key]}
                </div>
              );
            })}
          </FormGroup>

          <FormGroup controlid="formGridState">
            <Label>Event Types</Label>
            <FormControl
              as="select"
              name="event"
              value={event}
              onChange={(e) => setEvent(e.target.value)}
            >
              <option>none</option>
              <option>College Event</option>
              <option>Fare Well</option>
              <option>Ring Ceremony</option>
              <option>Bachelor Party</option>
              <option>Reunion</option>
              <option>Festival</option>
              <option>Anniversary</option>
              <option>Breakup party</option>
              <option>Birthday Party</option>
              <option>Wedding Ceremony</option>
              <option>Outdoor Concert</option>
              <option>Seminar</option>
              <option>Highway</option>
              <option>Destination</option>
            </FormControl>
            {Object.keys(eventErr).map((key) => {
              return (
                <div style={{ color: "red" }} key={key}>
                  {eventErr[key]}
                </div>
              );
            })}
          </FormGroup>

          <FormGroup
          // className={
          //   event === "none"
          //     ? "ShowMeOtherEventBox"
          //     : "HideMeOtherEventBox"
          // }
          >
            <Label for="text">Other Event</Label>
            <Input
              type="otherevent"
              placeholder="other event"
              name="otherevent"
              value={otherevent}
              onChange={(e) => setOtherevent(e.target.value)}
            />
            {Object.keys(otherEventErr).map((key) => {
              return (
                <div style={{ color: "red" }} key={key}>
                  {otherEventErr[key]}
                </div>
              );
            })}
          </FormGroup>

          <FormGroup>
            <Label for="message">Message</Label>
            <Input
              placeholder="Enter Message"
              type="textarea"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            {Object.keys(messageErr).map((key) => {
              return (
                <div style={{ color: "red" }} key={key}>
                  {messageErr[key]}
                </div>
              );
            })}
          </FormGroup>

          <Button type="submit">Submit</Button>
        </Form>
      </div>

      <Footer />
    </div>
  );
}
