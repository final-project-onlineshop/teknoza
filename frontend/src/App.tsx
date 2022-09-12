

import Button from 'react-bootstrap/Button'
import HomePage from "./pages/homePage/HomePage";
import ProductPage from "./pages/productPage/ProductPage";
import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router-dom";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap';
import "./App.scss";
import Header from './components/header/Header';

function App() {


  return (
    <BrowserRouter>
      <div className="App">

        <header>
          <Header />
        </header>

        <main>
          <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/product/:slug" element={<ProductPage />} />

            <Route path="/" element={<Navigate to="/home" replace />} />


          </Routes>
        </main>



        {/* <Button variant="warning">bootstrap testing button</Button>{' '} */}
      </div>

    </BrowserRouter >
  );
}

export default App;
