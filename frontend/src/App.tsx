
import HomePage from "./pages/homePage/HomePage";
import ProductPage from "./pages/productPage/ProductPage";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Container, } from "react-bootstrap";
import "./App.scss";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="d-flex flex-column site-container">
          <header>
            <Header />
          </header>

          <main className="mt-3">
            <Container>
              <Routes>
                <Route path="/home" element={<HomePage />} />
                <Route path="/product/:slug" element={<ProductPage />} />
                <Route path="/" element={<Navigate to="/home" replace />} />
              </Routes>
            </Container>
          </main>
          <footer>
            <Footer />
          </footer>
        </div>




      </div>
    </BrowserRouter>
  );
}

export default App;
