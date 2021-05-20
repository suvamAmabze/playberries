import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import Footer from "../Footer";
// import Header from "../Header";
import "../ScreenContainer.css";
import LoadingBox from "../LoadingBox";
import MessageBox from "../MessageBox";
import { deleteUser, listUsers } from "../../actions/userActions";
import { USER_DETAILS_RESET } from "../../constants/userConstants";
import { useState } from "react";
import HeaderAdmin from "./HeaderAdmin";
import FooterAdmin from "./FooterAdmin";

export default function UserListScreen(props) {
  const [searchTerm, setSearchTerm] = useState("");

  const userList = useSelector((state) => state.userList);
  const { loading, error, users } = userList;

  const userDelete = useSelector((state) => state.userDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = userDelete;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listUsers());
    dispatch({
      type: USER_DETAILS_RESET,
    });
  }, [dispatch, successDelete]);

  const deleteHandler = (user) => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteUser(user._id));
    }
  };

  return (
    <div className="SCREEN-CONTAINER">
      {/* <Header /> */}
      <HeaderAdmin />

      <div className="MAIN">
        <h1 className="Title">Users List</h1>

        {loadingDelete && <LoadingBox></LoadingBox>}
        {errorDelete && <MessageBox variant="danger">{errorDelete}</MessageBox>}
        {successDelete && (
          <MessageBox variant="success">User Deleted Successfully</MessageBox>
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
                <th>EMAIL</th>
                <th>IS ADMIN</th>
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
                    val._id.toLowerCase().includes(searchTerm.toLowerCase())
                  ) {
                    return val;
                  }
                })
                .map((user) => (
                  <tr key={user._id}>
                    <td>{user._id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.isAdmin ? "YES" : "NO"}</td>
                    <td>
                      <button
                      className="adminButton"
                        type="button"
                        onClick={() =>
                          props.history.push(`/user/${user._id}/edit`)
                        }
                      >
                        Edit <i className="fas fa-edit"></i>
                      </button>
                      <button className="adminButton" type="button" onClick={() => deleteHandler(user)}>
                        Delete  <i className="fas fa-trash"></i>
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
