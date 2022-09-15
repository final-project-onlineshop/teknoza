import { Button, Container, Form } from "react-bootstrap";
import "./paymentPage.scss";

const PaymentPage = () => {
  return (
    <Container className="payment-page">
      <h1>Checkouts steps will be here</h1>

      <Form className="payment-form">
        <h1>Payment Method</h1>
        <Form.Check
          type="radio"
          id="paypal"
          label="Paypal"
          name="paymentMethod"
        />
        <Form.Check
          type="radio"
          id="stripe"
          label="Stripe"
          name="paymentMethod"
        />
        <Button variant="primary" type="submit" className="continue-button">
          Continue
        </Button>
      </Form>
    </Container>
  );
};

export default PaymentPage;
