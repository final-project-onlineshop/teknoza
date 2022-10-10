import { useContext } from "react";
import { Button, Card, Col, Container, ListGroup, Row } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import MessageBox from "../../components/messageBox/MessageBox";
import ProductInCart from "../../components/productInCart/ProductInCart";
import { Store } from "../../Store";
import "./orderDetailsPage.scss";
const productsInOrder = [
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
const OrderDetailsPage = () => {
  const { state } = useContext(Store);
  const { userinfo } = state;

  const { orderId } = useParams();
  const navigate = useNavigate();
  return (
    <Container>
      <Helmet>
        <title>Order Details : {orderId}</title>
      </Helmet>
      <h1>Order Details : {orderId}</h1>
      <Row>
        <Col md={8}>
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Shipping</Card.Title>
              <Card.Text>
                <b>Name: </b> Max Mustermann
                <br />
                <b>Adress: </b>Frankfurter Straße, 54 101010 Berlin <br />
              </Card.Text>
              <MessageBox variant="success">
                Delivered at 21.01.2022 .
              </MessageBox>
            </Card.Body>
          </Card>
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Payment</Card.Title>
              <Card.Text>
                <b>Method: </b> Paypal
                <br />
              </Card.Text>
              <MessageBox variant="danger">Not paid !</MessageBox>
            </Card.Body>
          </Card>
          <Card className="productsInOrder mb-3">
            <Card.Body>
              <Card.Title>Items</Card.Title>
              <Card.Text>
                {productsInOrder.map((product, index) => {
                  return <ProductInCart product={product} uneditable />; //TODO: after new component change this one, it has dom nesting warning
                })}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Order Summary</Card.Title>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Row>
                    <Col>Items</Col>
                    <Col>$ {"sumOfItems"}</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Shipping</Col>
                    <Col>$ {"shippingPrice"}</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Tax</Col>
                    <Col>$ {"tax"}</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>
                      <b>Order Total</b>
                    </Col>
                    <Col>
                      <b>$ {"orderTotal"}</b>
                    </Col>
                  </Row>
                </ListGroup.Item>
              </ListGroup>

              <ListGroup.Item>
                <h2>PAYPAL</h2>
              </ListGroup.Item>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default OrderDetailsPage;
