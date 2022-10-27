import { useContext, useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import CheckoutSteps from "../../components/checkoutSteps/CheckoutSteps";
import { useCart } from "../../Store";
import "./paymentPage.scss";

const PaymentPage = () => {
  const navigate = useNavigate();

 
  const { getPaymentMethod, savePaymentMethod, getShippingAddress } = useCart();
  const paymentNameFromContext = getPaymentMethod();
  const shippingAddress = getShippingAddress();
  const [paymentName, setPaymentName] = useState(
    paymentNameFromContext || "PayPal"
  );
  const submitHandler = (e) => {
    e.preventDefault();

    savePaymentMethod(paymentName);
    navigate("/placeorder");
  };
  useEffect(() => {
    if (!shippingAddress.address) {
      navigate("/shipping");
    }
  }, [shippingAddress, navigate]);
  return (
    <Container className="payment-page">
      <Helmet>
        <title>Payment</title>
      </Helmet>
      <CheckoutSteps step1 step2 step3 />
      <div className="payment-form">
        <Form onSubmit={submitHandler}>
          <h1>Payment Method</h1>
          <Form.Check
            type="radio"
            id="PayPal"
            label="PayPal"
            value="PayPal"
            name="paymentMethod"
            checked={paymentName === "PayPal"}
            onChange={() => {
              setPaymentName("PayPal");
            }}
          />
          <Form.Check
            type="radio"
            id="Stripe"
            label="Stripe"
            name="paymentMethod"
            value="Stripe"
            checked={paymentName === "Stripe"}
            onChange={() => {
              setPaymentName("Stripe");
            }}
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
