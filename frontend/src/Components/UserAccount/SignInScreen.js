import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../ScreenContainer.css";
import Footer from "../Footer";
import Header from "../Header";
import { useDispatch, useSelector } from "react-redux";
import { signin } from "../../actions/userActions";
import LoadingBox from "../LoadingBox";
import MessageBox from "../MessageBox";

export default function SignInScreen(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const redirect = props.location.search
    ? props.location.search.split("=")[1]
    : "/";

  const redirectAdmin = props.location.search
    ? props.location.search.split("=")[1]
    : "/admin";

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo, loading, error } = userSignin;

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signin(email, password));
  };

  useEffect(() => {
    if (userInfo) {
      if (userInfo.isAdmin) {
        props.history.push(redirectAdmin);
      } else {
        props.history.push(redirect);
      }
    }
  }, [props.history, redirect, userInfo, redirectAdmin]);

  return (
    <div className="SCREEN-CONTAINER">
      <Header />
      <div className="MAIN">
        <h1 className="Title">SignIn</h1>
        <form className="UserAccountform" onSubmit={submitHandler}>
          {loading && <LoadingBox></LoadingBox>}
          {error && <MessageBox>{error}</MessageBox>}
          <div>
            <label htmlFor="email">Email:</label>
            <input
              className="UserAccountform-input"
              type="email"
              id="email"
              placeholder="example@gmail.com"
              required
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              className="UserAccountform-input"
              type="password"
              id="password"
              placeholder="Enter password"
              required
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>
          <div>
            <label />
            <button className="UserAccountform-btn" type="submit">
              Sign In
            </button>
          </div>
          <div>
            <label />
            <div>
              New customer?{" "}
              <Link to={`/register?redirect=${redirect}`}>
                Create your account
              </Link>
            </div>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
}
