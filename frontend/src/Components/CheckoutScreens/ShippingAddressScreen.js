import React, { useState } from "react";
import { saveShippingAddress } from "../../actions/cartActions";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../Footer";
import Header from "../Header";
import data from "./data.json";
import Select from "react-select";
import { Form, Input, Label, FormGroup } from "reactstrap";
import CheckoutSteps from "./CheckoutSteps";

export default function ShippingAddressScreen(props) {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  // const cart = useSelector((state) => state.cart);
  // const { shippingAddress } = cart;

  if (!userInfo) {
    props.history.push("/signin");
  }

  let restaurant;
  let city;

  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState("India");
  const [telephone, setTelephone] = useState("");

  const [DDLcity, setDDLCity] = useState("");
  const [DDLrestaurant, setDDLRestaurant] = useState("");
  const [DDLrestaurantList, setDDLRestaurantList] = useState([]);

  const [DDLcityErr, setDDLcityErr] = useState({});
  const [DDLrestaurantErr, setDDLrestaurantErr] = useState({});
  const [fullNameErr, setFullNameErr] = useState({});
  const [postalCodeErr, setPostalCodeErr] = useState({});
  const [addressErr, setAddressErr] = useState({});
  const [telephoneErr, setTelephoneErr] = useState({});

  const formValidation = () => {
    const DDLcityErr = {};
    const DDLrestaurantErr = {};
    const fullNameErr = {};
    const postalCodeErr = {};
    const addressErr = {};
    const telephoneErr = {};
    let isValid = true;

    if (fullName === "") {
      fullNameErr.nameEmpty = "Name can not be blank.";
      isValid = false;
    }
    if (fullName.trim().length > 20) {
      fullNameErr.nameLong = "Name text is too long.";
      isValid = false;
    }
    if (postalCode.trim().length > 6 || postalCode.trim().length < 6) {
      postalCodeErr.numberLong = "Pincode have 6 numbers";
      isValid = false;
    }
    if (address === "") {
      addressErr.nameEmpty = "Address can not be blank.";
      isValid = false;
    }
    if (address.trim().length > 30) {
      addressErr.nameLong = "Address text is too long.";
      isValid = false;
    }
    if (
      telephone.trim().length <= 9 ||
      telephone.trim().length > 10 ||
      telephone === ""
    ) {
      telephoneErr.telephoneLong = "Length of a phone number is 10 digits.";
      isValid = false;
    }
    if (DDLcity === "") {
      DDLcityErr.nameEmpty = `City can not be blank`;
      isValid = false;
    }
    if (DDLrestaurant === "") {
      DDLrestaurantErr.nameEmpty = `Restaurant can not be blank`;
      isValid = false;
    }

    setFullNameErr(fullNameErr);
    setDDLcityErr(DDLcityErr);
    setDDLrestaurantErr(DDLrestaurantErr);
    setPostalCodeErr(postalCodeErr);
    setAddressErr(addressErr);
    setTelephoneErr(telephoneErr);
    return isValid;
  };

  // handle change event of the country dropdown
  const handleCountryChange = (obj) => {
    setDDLCity(obj);
    setDDLRestaurantList(obj.languages);
    setDDLRestaurant("");
  };

  // handle change event of the language dropdown
  const handleLanguageChange = (obj) => {
    setDDLRestaurant(obj);
  };

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();

    const isValid = formValidation();
    if (isValid) {
      restaurant = DDLrestaurant.name;
      city = DDLcity.region;

      dispatch(
        saveShippingAddress({
          fullName,
          address,
          city,
          postalCode,
          country,
          restaurant,
          telephone,
        })
      );

      props.history.push("/payment");
    }
  };
  return (
    <div className="SCREEN-CONTAINER">
      <Header />
      <div className="MAIN">
        <CheckoutSteps step1 step2></CheckoutSteps>

        <Form onSubmit={submitHandler} className="UserAccountform">
          <div className="textAlign-center">
            <h1 className="font-bold checkoutMainTitle">Shipping Address</h1>
          </div>
          <FormGroup>
            <Label for="name">
              <span>Full Name</span>
            </Label>
            <Input
              placeholder="Enter Full Name"
              className="form-control"
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
            {Object.keys(fullNameErr).map((key) => {
              return (
                <div style={{ color: "red", fontWeight: "bold" }} key={key}>
                  {fullNameErr[key]}
                </div>
              );
            })}
          </FormGroup>

          <FormGroup>
            <Label for="telephone">
              <span>Telephone</span>
            </Label>
            <Input
              type="number"
              placeholder="Enter Telephone"
              value={telephone}
              onChange={(e) => setTelephone(e.target.value)}
            />
            {Object.keys(telephoneErr).map((key) => {
              return (
                <div style={{ color: "red", fontWeight: "bold" }} key={key}>
                  {telephoneErr[key]}
                </div>
              );
            })}
          </FormGroup>

          <FormGroup>
            <Label for="address">
              <span>Address</span>
            </Label>
            <Input
              type="textarea"
              placeholder="Enter address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            {Object.keys(addressErr).map((key) => {
              return (
                <div style={{ color: "red", fontWeight: "bold" }} key={key}>
                  {addressErr[key]}
                </div>
              );
            })}
          </FormGroup>

          <FormGroup>
            <Label for="email">
              <span>Postal Code</span>
            </Label>
            <Input
              type="number"
              placeholder="Enter postal code"
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
            />
            {Object.keys(postalCodeErr).map((key) => {
              return (
                <div style={{ color: "red", fontWeight: "bold" }} key={key}>
                  {postalCodeErr[key]}
                </div>
              );
            })}
          </FormGroup>

          {/* <FormGroup controlid="formGridState">
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
          </FormGroup> */}

          {/* <FormGroup
         
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
          </FormGroup> */}

          <FormGroup>
            <Label for="Country">
              <span>Country</span>
            </Label>
            <Input
              type="text"
              className="form-control"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              disabled
            />
          </FormGroup>

          <FormGroup>
            <Label for="City">
              <span>City</span>
            </Label>
            <Select
              placeholder="Select City"
              value={DDLcity}
              options={data}
              onChange={handleCountryChange}
              getOptionLabel={(x) => x.region}
              getOptionValue={(x) => x.country_code}
            />
            {Object.keys(DDLcityErr).map((key) => {
              return (
                <div style={{ color: "red", fontWeight: "bold" }} key={key}>
                  {DDLcityErr[key]}&nbsp;<i className="fas fa-exclamation"></i>
                </div>
              );
            })}
          </FormGroup>

          <FormGroup>
            <Label for="City">
              <span>Restaurant</span>
            </Label>
            <Select
              placeholder="Select Restaurant"
              value={DDLrestaurant}
              options={DDLrestaurantList}
              onChange={handleLanguageChange}
              getOptionLabel={(x) => x.name}
              getOptionValue={(x) => x.code}
            />
            {Object.keys(DDLrestaurantErr).map((key) => {
              return (
                <div style={{ color: "red", fontWeight: "bold" }} key={key}>
                  {DDLrestaurantErr[key]}&nbsp;
                  <i className="fas fa-exclamation"></i>
                </div>
              );
            })}
          </FormGroup>

          <div>
            <label />
            <button className="primary btn btn-primary" type="submit">
              Continue
            </button>
          </div>
        </Form>
      </div>
      <Footer />
    </div>
  );
}
