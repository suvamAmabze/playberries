import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import Footer from "../Footer";
// import Header from "../Header";
import "../ScreenContainer.css";
import LoadingBox from "../LoadingBox";
import MessageBox from "../MessageBox";
import { detailsUser, updateUser} from "../../actions/userActions";
import { USER_UPDATE_RESET } from "../../constants/userConstants";
import HeaderAdmin from "./HeaderAdmin";
import FooterAdmin from "./FooterAdmin";

export default function UserEditScreen(props) {
  const userId = props.match.params.id;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);

  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;
  const userUpdate = useSelector((state) => state.userUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = userUpdate;

  const dispatch = useDispatch();
  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: USER_UPDATE_RESET });
      props.history.push("/userlist");
    }
    if (!user) {
      dispatch(detailsUser(userId));
    } else {
      setName(user.name);
      setEmail(user.email);
      setIsAdmin(user.isAdmin);
    }
  }, [dispatch, props.history, successUpdate, user, userId]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(updateUser({ _id: userId, name, email, isAdmin }));
  };

  return (
    <div className="SCREEN-CONTAINER">
      {/* <Header /> */}
      <HeaderAdmin />

      <div className="MAIN">
        <h1 className="Title">Edit User {name}</h1>

        <form className="UserAccountform" onSubmit={submitHandler}>
          <div>
            {loadingUpdate && <LoadingBox></LoadingBox>}
            {errorUpdate && (
              <MessageBox variant="danger">{errorUpdate}</MessageBox>
            )}
          </div>

          {loading ? (
            <LoadingBox />
          ) : error ? (
            <MessageBox variant="danger">{error}</MessageBox>
          ) : (
            <>
              <div>
                <label htmlFor="name">Name</label>
                <input
                 className="UserAccountform-input"
                  id="name"
                  type="text"
                  placeholder="Enter name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                ></input>
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input
                 className="UserAccountform-input"
                  id="email"
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
              </div>

              <div>
                <label htmlFor="isAdmin">Is Admin</label>
                <input
                //  className="UserAccountform-input"
                  id="isAdmin"
                  type="checkbox"
                  checked={isAdmin}
                  onChange={(e) => setIsAdmin(e.target.checked)}
                ></input>
              </div>
              <div>
                <button className="adminButton" type="submit">
                  Update
                </button>
              </div>
            </>
          )}
        </form>
      </div>

      {/* <Footer /> */}
      <FooterAdmin />
    </div>
  );
}
