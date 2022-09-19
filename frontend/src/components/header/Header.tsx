import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
<<<<<<< HEAD

import { NavLink } from "react-router-dom";

=======
import { LinkContainer } from "react-router-bootstrap";
import { Link, NavLink } from "react-router-dom";

>>>>>>> main
import "./header.scss";

const Header = () => {
  return (
    <header>
      <Navbar expand="lg" className="header-navbar">
        <Container>
<<<<<<< HEAD

          <Navbar.Brand href="/home">
          <Navbar.Brand to="/" as={NavLink}>

=======
          <Navbar.Brand to="/" as={NavLink}>
>>>>>>> main
            <div className="navbar-brand">
              <img
                src="/images/logo-teknoza.png"
                alt="Logo"
                height="50"
                className="logoImage"
              />
              <b>Electronics for everyone</b>
            </div>
          </Navbar.Brand>

          <div className="search-box">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input
              type="text"
              placeholder="Search..."
              className="searchInput"
            />
<<<<<<< HEAD
          </div>
          <Navbar.Toggle aria-controls="main-navbar-nav" />
          <Navbar.Collapse id="main-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/shopping-cart">
                Shopping Cart <i className="fa-solid fa-cart-shopping"></i>
              </Nav.Link>

              <Nav.Link href="/register">Register</Nav.Link>

              <Nav.Link href="/register">Login</Nav.Link>
=======
            <Navbar.Toggle aria-controls="main-navbar-nav" />
          </div>
          <Navbar.Collapse id="main-navbar-nav">
            <Nav className="ms-auto nav-links">
              <Nav.Link as={NavLink} to="/shopping-cart">
                Shopping Cart <i className="fa-solid fa-cart-shopping"></i>
              </Nav.Link>

              <Nav.Link as={NavLink} to="/register">
                Register
              </Nav.Link>

              <Nav.Link as={NavLink} to="/login">
                Login
              </Nav.Link>
>>>>>>> main

              <NavDropdown
                title={<i className="fa-solid fa-user"></i>}
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.1">Account</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Orders</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Login</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
<<<<<<< HEAD
          </Container>
=======
        </Container>
>>>>>>> main
      </Navbar>
      <div className="sub-nav-frame">
        <Container>
          <Nav className="justify-content-between sub-nav">
            <Nav.Link href="/home/:all-products">All Products</Nav.Link>

            <Nav.Link href="/home/:sales">
              <i className="fa-solid fa-bullhorn"></i> Sales
            </Nav.Link>

            <Nav.Link href="/home/:mobile-phones">
              <i className="fa-solid fa-mobile-screen-button"></i> Mobile Phone
            </Nav.Link>
            <Nav.Link href="/home/:computers">
              <i className="fa-solid fa-computer"></i> Computer
            </Nav.Link>
            <Nav.Link href="/home/:tvs">
              <i className="fa-solid fa-tv"></i> TV
            </Nav.Link>
            <Nav.Link href="/home/:appliances">
              <i className="fa-solid fa-blender"></i> Appliances
            </Nav.Link>
          </Nav>
        </Container>
      </div>
    </header>
  );
};

export default Header;
