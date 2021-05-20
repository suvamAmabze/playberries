import React from "react";
// import Footer from "../Footer";
// import Header from "../Header";
import "../ScreenContainer.css";
import LoadingBox from "../LoadingBox";
import MessageBox from "../MessageBox";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteContactusUser,
  listContactusUsers,
} from "../../actions/contactusAction";
import { useState } from "react";
import HeaderAdmin from "./HeaderAdmin";
import FooterAdmin from "./FooterAdmin";

export default function UserContactusScreen() {
  const contactusList = useSelector((state) => state.contactusList);
  const { loading, error, users } = contactusList;
  const contactusDelete = useSelector((state) => state.contactusDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = contactusDelete;

  const [searchTerm, setSearchTerm] = useState("");

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listContactusUsers({}));
  }, [dispatch, successDelete]);

  const deleteHandler = (user) => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteContactusUser(user._id));
      setSearchTerm("");
    }
  };
  return (
    <div className="SCREEN-CONTAINER">
      {/* <Header /> */}
      <HeaderAdmin />
      <div className="MAIN">
        <h1 className="Title">ContactUs User List</h1>

        {loadingDelete && <LoadingBox></LoadingBox>}
        {errorDelete && <MessageBox variant="danger">{errorDelete}</MessageBox>}
        {successDelete && (
          <MessageBox variant="success">
            ContactUs User Deleted Successfully
          </MessageBox>
        )}

        <div className="searchBox">
          <input
            type="input"
            placeholder="Search data"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          ></input>
        </div>

        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>Telephone</th>
                <th>EMAIL</th>
                <th>Event</th>
                <th>Other Event</th>
                <th>Message</th>
                <th>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {users
                .filter((val) => {
                  if (searchTerm === "") {
                    return val;
                  } else if (
                    val.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    val.email
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase()) ||
                    val.event
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase()) ||
                    val.otherevent
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase()) ||
                    val.telephone
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase()) ||
                    val._id
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase())
                  ) {
                    return val;
                  }
                })
                .map((user) => (
                  <tr key={user._id}>
                    <td>{user._id}</td>
                    <td>{user.name}</td>
                    <td>{user.telephone}</td>
                    <td>{user.email}</td>
                    <td>{user.event}</td>
                    <td>{user.otherevent}</td>
                    <td>{user.message}</td>
                    <td>
                      <button  className="adminButton" type="button" onClick={() => deleteHandler(user)}>
                        Delete <i className="fas fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        )}
      </div>
      {/* <Footer /> */}
      <FooterAdmin />
    </div>
  );
}
