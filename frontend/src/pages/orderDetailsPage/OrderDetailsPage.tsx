import { Button, Card, Col, Container, ListGroup, Row } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import MessageBox from "../../components/messageBox/MessageBox";
import OrderSummary from "../../components/orderSummary/OrderSummary";
import ProductInCart from "../../components/productInCart/ProductInCart";
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
  const { orderId } = useParams();
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
          <OrderSummary page="order-details"/>
        </Col>
      </Row>
    </Container>
  );
};

export default OrderDetailsPage;
