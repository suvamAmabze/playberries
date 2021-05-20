import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { register } from "../../actions/userActions";
import LoadingBox from "../LoadingBox";
import MessageBox from "../MessageBox";
import "../ScreenContainer.css";
import Footer from "../Footer";
import Header from "../Header";

export default function RegisterScreen(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [nameErr, setNameErr] = useState({});
  const [emailErr, setEmailErr] = useState({});
  const [passwordErr, setPasswordErr] = useState({});
  const [confirmPasswordErr, setConfirmPasswordErr] = useState({});

  const formValidation = () => {
    const nameErr = {};
    const passwordErr = {};
    const confirmPasswordErr = {};
    const emailErr = {};

    let isValid = true;

    if (name === "") {
      nameErr.nameEmpty = "name can not be blank.";
      isValid = false;
    }
    if (name.trim().length > 20) {
      nameErr.nameLong = "name text is too long.";
      isValid = false;
    }
    if (email === "") {
      emailErr.nameEmpty = "email can not be blank.";
      isValid = false;
    }
    if (password.trim().length > 6 || password.trim().length < 6) {
      passwordErr.numberLong = "length of password is 6";
      isValid = false;
    }
    if (
      confirmPassword.trim().length > 6 ||
      confirmPassword.trim().length < 6
    ) {
      confirmPasswordErr.numberLong = "length of password is 6";
      isValid = false;
    }

    setNameErr(nameErr);
    setEmailErr(emailErr);
    setPasswordErr(passwordErr);
    setConfirmPasswordErr(confirmPasswordErr);
    return isValid;
  };

  const redirect = props.location.search
    ? props.location.search.split("=")[1]
    : "/";

  const userRegister = useSelector((state) => state.userRegister);
  const { userInfo, loading, error } = userRegister;

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();

    const isValid = formValidation();
    if (isValid) {
      if (password !== confirmPassword) {
        alert("Password and confirm password are not match");
      } else {
        dispatch(register(name, email, password));
      }
    }
  };

  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
  }, [props.history, redirect, userInfo]);

  return (
    <div className="SCREEN-CONTAINER">
      <Header />

      <div className="MAIN">
        <h1 className="Title">Register</h1>

        <form className="UserAccountform" onSubmit={submitHandler}>
          {loading && <LoadingBox></LoadingBox>}
          {error && <MessageBox variant="danger">{error}</MessageBox>}
          <div>
            <label htmlFor="name">Name</label>
            <input
              className="UserAccountform-input"
              type="text"
              id="name"
              placeholder="Enter name"
              // required
              onChange={(e) => setName(e.target.value)}
            ></input>
            {Object.keys(nameErr).map((key) => {
              return (
                <div style={{ color: "red", fontWeight: "bold" }} key={key}>
                  {nameErr[key]}
                </div>
              );
            })}
          </div>
          <div>
            <label htmlFor="email">Email address</label>
            <input
              className="UserAccountform-input"
              type="email"
              id="email"
              placeholder="Enter email"
              // required
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            {Object.keys(emailErr).map((key) => {
              return (
                <div style={{ color: "red", fontWeight: "bold" }} key={key}>
                  {emailErr[key]}
                </div>
              );
            })}
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              className="UserAccountform-input"
              type="password"
              id="password"
              placeholder="Enter password"
              // required
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            {Object.keys(passwordErr).map((key) => {
              return (
                <div style={{ color: "red", fontWeight: "bold" }} key={key}>
                  {passwordErr[key]}
                </div>
              );
            })}
          </div>
          <div>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              className="UserAccountform-input"
              type="password"
              id="confirmPassword"
              placeholder="Enter confirm password"
              // required
              onChange={(e) => setConfirmPassword(e.target.value)}
            ></input>
            {Object.keys(confirmPasswordErr).map((key) => {
              return (
                <div style={{ color: "red", fontWeight: "bold" }} key={key}>
                  {confirmPasswordErr[key]}
                </div>
              );
            })}
          </div>
          <div>
            <label />
            <button className="UserAccountform-btn" type="submit">
              Register
            </button>
          </div>
          <div>
            <label />
            <div>
              Already have an account?&nbsp;
              <Link to={`/signin?redirect=${redirect}`}>Sign-In</Link>
            </div>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
}
