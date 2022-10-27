import axios from "axios";
import { useContext, useReducer } from "react";
import { Button, Card, Col, Container, ListGroup, Row } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import CheckoutSteps from "../../components/checkoutSteps/CheckoutSteps";
import ProductInCart from "../../components/productInCart/ProductInCart";
import { useCart } from "../../Store";
import { getError } from "../../utils.js";

import "./placeOrderPage.scss";
const reducer = (state, action) => {
  switch (action.type) {
    case "CREATE_REQUEST":
      return { ...state, loading: true };
    case "CREATE_SUCCESS":
      return { ...state, loading: false };
    case "CREATE_FAIL":
      return { ...state, loading: false };
    default:
      return state;
  }
};
const BASE_API_URL = import.meta.env.VITE_BASE_API_URL;

const PlaceOrderPage = () => {
  const navigate = useNavigate();

  const [{ loading }, dispatch] = useReducer(reducer, { loading: false });

  const {
    getCartItems,
    getUserInfo,
    getShippingAddress,
    getPaymentMethod,
    getCartSum,
    getShippingPrice,
    getTaxPrice,
    clearCart,
  } = useCart();
  const cart = getCartItems();
  const userInfo = getUserInfo();
  const shippingAddress = getShippingAddress();
  const paymentMethod = getPaymentMethod();
  const itemsPrice = getCartSum();
  const shippingPrice = getShippingPrice();
  const taxPrice = getTaxPrice();
  const totalPrice = itemsPrice + shippingPrice + taxPrice;
  const round2 = (num) => {
    return Math.round(num * 100 + Number.EPSILON) / 100;
  };

  const placeOrderHandler = async () => {
    try {
      dispatch({ type: "CREATE_REQUEST" });
      const { data } = await axios.post(
        `${BASE_API_URL}/orders`,
        {
          orderItems: cart,
          shippingAddress: shippingAddress,
          paymentMethod: paymentMethod,
          itemsPrice: itemsPrice,
          shippingPrice: shippingPrice,
          taxPrice: taxPrice,
          totalPrice: totalPrice,
        },
        { headers: { authorization: `Bearer ${userInfo.token}` } }
      );
      clearCart();
      dispatch({ type: "CREATE_SUCCESS" });
      localStorage.removeItem("cartItems");
      navigate(`/order-details/${data.order._id}`);
    } catch (error) {
      dispatch({ type: "CREATE_FAIL" });
      toast.error(getError(error));
    }
  };

  return (
    <Container className="placeOrderPage">
      <Helmet>
        <title>Preview Order</title>
      </Helmet>
      <CheckoutSteps step1 step2 step3 step4 />
      <h1 className="my-3">Preview Order</h1>
      <Row>
        <Col md={8} className="order-details">
          <Card className="shipping-details mb-3">
            <Card.Body>
              <Card.Title>Shipping</Card.Title>
              <Card.Text>
                <b>Name: </b> {shippingAddress.fullName} <br />
                <b>Address: </b> {shippingAddress.address},<br />
                {shippingAddress.postalCode}, {shippingAddress.city} <br />
                {shippingAddress.country}
              </Card.Text>
              <Link to="/shipping">Edit</Link>
            </Card.Body>
          </Card>
          <Card className="payment-details mb-3">
            <Card.Body>
              <Card.Title>Payment</Card.Title>
              <Card.Text>
                <b>Method: </b> {paymentMethod} <br />
              </Card.Text>
              <Link to="/payment">Edit</Link>
            </Card.Body>
          </Card>
          <Card className="productsInOrder mb-3">
            <Card.Body>
              <Card.Title>Items</Card.Title>
              <Card.Text>
                {cart.map((product, index) => {
                  return <ProductInCart product={product} uneditable />;
                })}
              </Card.Text>
              <Link to="/shopping-cart">Edit</Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="order-summary">
          <Card>
            <Card.Body>
              <Card.Title>Order Summary</Card.Title>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Row>
                    <Col>Items</Col>
                    <Col>$ {itemsPrice}</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Shipping</Col>
                    <Col>$ {shippingPrice}</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Tax</Col>
                    <Col>$ {taxPrice}</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>
                      <b>Order Total</b>
                    </Col>
                    <Col>
                      <b>$ {totalPrice}</b>
                    </Col>
                  </Row>
                </ListGroup.Item>
              </ListGroup>

              <ListGroup.Item>
                <div className="d-grid">
                  <Button onClick={placeOrderHandler}>Place Order</Button>
                </div>
              </ListGroup.Item>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default PlaceOrderPage;
