import { Button, Container, Form } from "react-bootstrap";
import "./shippingPage.scss";

const ShippingPage = () => {
  return (
    <Container className="shipping-page">
      {/* TODO: add here checkout steps and delete test text */}
      <h1>(!! Checkout steps will be here !!)</h1>
      <Form className="shipping-form">
        <h1>Shipping Adress</h1>
        <Form.Group className="mb-3" controlId="formFullName">
          <Form.Label>Full Name</Form.Label>
          <Form.Control type="text" placeholder="Your full name" />
        </Form.Group>{" "}
        <Form.Group className="mb-3" controlId="formAddress">
          <Form.Label>Adress</Form.Label>
          <Form.Control type="text" placeholder="Adress" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formCity">
          <Form.Label>City</Form.Label>
          <Form.Control type="text" placeholder="City" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPostalCode">
          <Form.Label>Postal Code</Form.Label>
          <Form.Control type="number" placeholder="Postal code" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formFullName">
          <Form.Label>Country</Form.Label>
          <Form.Control type="text" placeholder="Country" />
        </Form.Group>
        <Form.Group className="mb-3 form-location-box" controlId="formLocation">
          <Form.Label>No Location</Form.Label>
          <Button variant="secondary">Choose Location On Map</Button>
        </Form.Group>
        <Button variant="primary" type="submit">
          Continue
        </Button>
      </Form>
    </Container>
  );
};

export default ShippingPage;
