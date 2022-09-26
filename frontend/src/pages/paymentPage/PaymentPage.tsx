import { Button, Container, Form } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import CheckoutSteps from "../../components/checkoutSteps/CheckoutSteps";
import "./paymentPage.scss";

const PaymentPage = () => {
  return (
    <Container className="payment-page">
      <Helmet>
        <title>Payment</title>
      </Helmet>
      <CheckoutSteps step1 step2 step3 />
      <div className="payment-form">
        <Form >
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
      </div>
    </Container>
  );
};

export default PaymentPage;
