import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { signout } from "../../actions/userActions";

export default function HeaderAdmin() {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };
  return (
    <header>
      <Navbar collapseOnSelect expand="lg" variant="dark">
        {/* <Navbar.Brand href="#home"> */}
        <a>
          <img src="/images/logo.jpg" className="logo" />
        </a>
        {/* </Navbar.Brand> */}

        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="Hamburger-button"
        />
        <Navbar.Collapse id="responsive-navbar-nav" className="NAV-right">
          <Nav className="mr-auto"></Nav>
          <Nav>
            {userInfo && userInfo.isAdmin && (
              <NavDropdown
                title={<span>{userInfo.name}</span>}
                id="collasible-nav-dropdown"
                className="NAV-ITEM"
              >
                <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="#signout"
                  onClick={signoutHandler}
                >
                  Sign Out
                </NavDropdown.Item>
              </NavDropdown>
            )}

            {/* Admin list dropdown */}
            {userInfo && userInfo.isAdmin && (
              <NavDropdown
                title={<span>Admin</span>}
                id="collasible-nav-dropdown"
                className="NAV-ITEM"
              >
                <NavDropdown.Item as={Link} to="/userlist">
                  Users list
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/contactuslist">
                  Contactus list
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/gallerylist">
                  Gallery list
                </NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}
