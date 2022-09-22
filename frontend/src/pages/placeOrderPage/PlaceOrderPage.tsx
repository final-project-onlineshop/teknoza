import { Button, Card, Col, Container, ListGroup, Row } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import CheckoutSteps from "../../components/checkoutSteps/CheckoutSteps";
import ProductInCart from "../../components/productInCart/ProductInCart";
import "./placeOrderPage.scss";
//TODO:delete after testing
const productsInCart = [
  {
    name: "HP Curved Monitor",
    slug: "hp-curved-monitor",
    price: 150,
    countInStock: 10,
    countInCart: 2,
  },
  {
    name: "Microsoft Wireless Keyboard",
    slug: "microsoft-wireless-keyboard",
    price: 30,
    countInStock: 1,
    countInCart: 1,
  },
];

const PlaceOrderPage = () => {
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
                <b>Name: </b> Max Müllermann <br />
                <b>Address: </b> Berlin <br />
              </Card.Text>
              <Link to="/shipping">Edit</Link>
            </Card.Body>
          </Card>
          <Card className="payment-details mb-3">
            <Card.Body>
              <Card.Title>Payment</Card.Title>
              <Card.Text>
                <b>Method: </b> PayPal <br />
              </Card.Text>
              <Link to="/payment">Edit</Link>
            </Card.Body>
          </Card>
          <Card className="productsInOrder mb-3">
            <Card.Body>
              <Card.Title>Items</Card.Title>
              <Card.Text>
                {productsInCart.map((product, index) => {
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
                    <Col>$ 88.00</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Shipping</Col>
                    <Col>$ 6.00</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Tax</Col>
                    <Col>$ 6.00</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>
                      <b>Order Total</b>
                    </Col>
                    <Col>
                      <b>$ 100.00</b>
                    </Col>
                  </Row>
                </ListGroup.Item>
              </ListGroup>
              <ListGroup.Item>
                <div className="d-grid">
                  <Button>Place Order</Button>
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
