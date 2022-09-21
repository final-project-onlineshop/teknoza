import { useContext } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

import { NavLink } from "react-router-dom";

import Badge from "react-bootstrap/Badge";

import CartPage from "../../pages/cartPage/CartPage";
import { Store } from "../../Store";

import "./header.scss";

const Header = () => {
  const { state } = useContext(Store);
  const { cart } = state;

  return (
    <header>
      <Navbar expand="lg" className="header-navbar">
        <Container>
          <Navbar.Brand href="/home">
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

            <Navbar.Toggle aria-controls="main-navbar-nav" />
          </div>
          <Navbar.Collapse id="main-navbar-nav">
            <Nav className="me-auto ms-auto nav-links">
              <Nav.Link as={NavLink} to="/shopping-cart">
                Shopping Cart
                <i className="fa-solid fa-cart-shopping"></i>
                {cart.cartItems.length > 0 && (
                  <Badge pill bg="danger">
                    {cart.cartItems.length}
                  </Badge>
                )}
              </Nav.Link>

              <Nav.Link as={NavLink} to="/register">
                Register
              </Nav.Link>

              <Nav.Link as={NavLink} to="/login">
                Login
              </Nav.Link>

              <NavDropdown
                title={<i className="fa-solid fa-user"></i>}
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.1">Account</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/orderHistory">
                  Orders
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Login</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Admin" id="basic-nav-dropdown">
                <NavDropdown.Item as={NavLink} to="/dashboard">
                  Dashboard
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/profile">
                  Profile
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={NavLink} to="/products">
                  Products
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/orders">
                  Orders
                </NavDropdown.Item>

                <NavDropdown.Item as={NavLink} to="/users">
                  Users
                </NavDropdown.Item>                
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
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
