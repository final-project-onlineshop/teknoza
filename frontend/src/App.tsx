import Button from "react-bootstrap/Button";
import HomePage from "./pages/homePage/HomePage";
import ProductPage from "./pages/productPage/ProductPage";
import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router-dom";
import { Container, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="d-flex flex-column site-container">
          <header>
            <Link to="/"></Link>
            <Navbar bg="light" variant="light" className="navbar">
              <Container>
                <LinkContainer to="/">
                  <Navbar.Brand>
                    <div className="d-flex flex-column">
                      <img
                        src="images/logo-teknoza.png"
                        alt="Logo"
                        height="50"
                        className="logoImage"
                      />
                      <b>Electronics for everyone</b>
                    </div>
                  </Navbar.Brand>
                </LinkContainer>
              </Container>
            </Navbar>
          </header>

          <main>
            <Container>
              <Routes>
                <Route path="/home" element={<HomePage />} />
                <Route path="/product/:slug" element={<ProductPage />} />
                <Route path="/" element={<Navigate to="/home" replace />} />
              </Routes>
            </Container>
          </main>
          <footer>
            <div className="text-center">All rights reserved</div>
          </footer>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
