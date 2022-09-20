import HomePage from "./pages/homePage/HomePage";
import ProductPage from "./pages/productPage/ProductPage";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import "./App.scss";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

import CartPage from "./pages/cartPage/CartPage";

import RegisterPage from "./pages/registerPage/RegisterPage";

import ShippingPage from "./pages/shippingPage/ShippingPage";

import LoginPage from "./pages/loginPage/LoginPage";
import PaymentPage from "./pages/paymentPage/PaymentPage";
import PlaceOrderPage from "./pages/placeOrderPage/PlaceOrderPage";
import OrderHistoryPage from "./pages/orderHistoryPage/OrderHistoryPage";
import DashboardPage from "./pages/dashboardPage/DashboardPage";

import ProductEditPage from "./pages/productEditPage/ProductEditPage";

import OrdersPage from "./pages/ordersPage/OrdersPage";


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

                <Route path="/cart" element={<CartPage />} />

                <Route path="/register" element={<RegisterPage />} />

                <Route path="/shipping" element={<ShippingPage />} />

                <Route path="/login" element={<LoginPage />} />
                <Route path="/payment" element={<PaymentPage />} />
                <Route path="/placeOrder" element={<PlaceOrderPage />} />
                <Route path="/orderHistory" element={<OrderHistoryPage />} />
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route
                  path="/productEdit/:productId"
                  element={<ProductEditPage />}
                />
                <Route path="/orders" element={<OrdersPage />} />


                <Route path="/product/:_id" element={<ProductPage />} />
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
