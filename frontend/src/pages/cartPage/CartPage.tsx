import { useContext } from "react";
import { Button, Col, Container, ListGroup, Row } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import MessageBox from "../../components/messageBox/MessageBox";
import ProductInCart from "../../components/productInCart/ProductInCart";
import { Store } from "../../Store";
import "./cartPage.scss";

const CartPage = () => {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  

  const { cartItems } = state.cart;

  return (
    <Container className="cart-screen">
      <Helmet>
        <title>Shopping Cart</title>
      </Helmet>
      <h1>Shopping Cart</h1>
      <Row>
        <Col md={8} className="products-in-cart">
          {cartItems.length === 0 ? (
            <MessageBox>
              Cart is empty. <Link to="/">Go Shopping</Link>
            </MessageBox>
          ) : (
            <ListGroup>
              {cartItems.map((cartItem, index) => {
                return <ProductInCart product={cartItem} key={index} />;
              })}
            </ListGroup>
          )}
        </Col>
        <Col md={4}></Col>
      </Row>
      <div className="cart-body">
        <div className="products-in-cart"></div>
        <div className="cart-details-box">
          <div className="subtotal">
            <span>Subtotal (0 items) : $0 </span>
          </div>
          <div className="checkout-button">
            <Button>Proceed to Checkout</Button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CartPage;
