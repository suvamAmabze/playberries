import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";
import { signout } from "../actions/userActions";

export default function Header() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

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
        <a href="/">
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
            <Nav.Link as={Link} to="/" className="NAV-ITEM">
              <span>Home</span>
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className="NAV-ITEM">
              <span>About</span>
            </Nav.Link>
            <Nav.Link as={Link} to="/super-services" className="NAV-ITEM">
              <span>Special Services</span>
            </Nav.Link>
            <Nav.Link as={Link} to="/foodproducts" className="NAV-ITEM">
              <span>Plans & Pricing</span>
            </Nav.Link>
            <Nav.Link as={Link} to="/menus" className="NAV-ITEM">
              <span>Menus</span>
            </Nav.Link>

            <Nav.Link href="/gallery" className="NAV-ITEM">
              <span>Gallery</span>
            </Nav.Link>

            <Nav.Link as={Link} to="/contactus" className="NAV-ITEM">
              <span>Contact Us</span>
            </Nav.Link>

            <NavDropdown
              title={<span>Connect With Us</span>}
              id="collasible-nav-dropdown"
              className="NAV-ITEM"
            >
              <NavDropdown.Item as={Link} to="/business">
                As Business
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/customer">
                AS Customer
              </NavDropdown.Item>
            </NavDropdown>

            {userInfo ? (
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
            ) : (
              <NavDropdown
                title={
                  <span>
                    <i className="fas fa-user"></i>
                  </span>
                }
                id="collasible-nav-dropdown"
                className="NAV-ITEM"
              >
                <NavDropdown.Item as={Link} to="/signin">
                  signin
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/register">
                  register
                </NavDropdown.Item>
              </NavDropdown>
            )}

            {/* Admin list dropdown */}
            {/* {userInfo && userInfo.isAdmin && (
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
            )} */}

            <Nav.Link as={Link} to="/cart" className="NAV-ITEM CartIcon">
              <span>
                <i className="fas fa-shopping-cart"></i>
              </span>
              {cartItems.length > 0 && (
                <span className="CartItemsNum">{cartItems.length}</span>
              )}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}
