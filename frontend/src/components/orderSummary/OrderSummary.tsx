import { Button, Card, Col, ListGroup, Row } from "react-bootstrap";
import "./orderSummary.scss";
const OrderSummary = (props) => {
  const { page } = props;
  return (
    <Card>
      <Card.Body>
        <Card.Title>Order Summary</Card.Title>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <Row>
              <Col>Items</Col>
              <Col>$ 330.00</Col>
            </Row>
          </ListGroup.Item>
          <ListGroup.Item>
            <Row>
              <Col>Shipping</Col>
              <Col>$ 36.00</Col>
            </Row>
          </ListGroup.Item>
          <ListGroup.Item>
            <Row>
              <Col>Tax</Col>
              <Col>$ 14.00</Col>
            </Row>
          </ListGroup.Item>
          <ListGroup.Item>
            <Row>
              <Col>
                <b>Order Total</b>
              </Col>
              <Col>
                <b>$ 380.00</b>
              </Col>
            </Row>
          </ListGroup.Item>
        </ListGroup>
        {page === "order-details" && (
          <ListGroup.Item>
            <h2>PAYPAL</h2>
          </ListGroup.Item>
        )}
        {page === "placeOrder" && (
          <ListGroup.Item>
            <div className="d-grid">
              <Button>Place Order</Button>
            </div>
          </ListGroup.Item>
        )}
        {page==="cartPage" && (
          <ListGroup.Item>
            <div className="d-grid">
              <Button>Proceed to Checkout</Button>
            </div>
          </ListGroup.Item>
        )}
      </Card.Body>
    </Card>
  );
};

export default OrderSummary;
