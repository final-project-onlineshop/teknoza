import { useContext, useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import CheckoutSteps from "../../components/checkoutSteps/CheckoutSteps";
import { useCart } from "../../Store";

import "./shippingPage.scss";

const ShippingPage = () => {
  const navigate = useNavigate();

  const { getUserInfo, getShippingAddress,saveShippingAddress } = useCart();
  const shippingAddress = getShippingAddress();
  const userInfo = getUserInfo();
  useEffect(() => {
    if (!userInfo) {
      navigate("/login?redirect=/shipping");
    }
  }, [userInfo, navigate]);
  const [fullName, setName] = useState(shippingAddress.fullName || "");
  const [address, setAddress] = useState(shippingAddress.address || "");
  const [city, setCity] = useState(shippingAddress.city || "");
  const [country, setCountry] = useState(shippingAddress.country || "");
  const [postalCode, setPostalcode] = useState(
    shippingAddress.postalCode || ""
  );
  const submitHandler = (e) => {
    e.preventDefault();
    saveShippingAddress({
      fullName,
      address,
      city,
      postalCode,
      country,
    })
  
    navigate("/payment");
  };
  return (
    <Container className="shipping-page">
      <Helmet>
        <title>Shipping</title>
      </Helmet>
      <CheckoutSteps step1 step2 />
      <Form className="shipping-form" onSubmit={submitHandler}>
        <h1>Shipping Adress</h1>
        <Form.Group className="mb-3" controlId="formFullName">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Your fullname"
            required={true}
            value={fullName}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </Form.Group>{" "}
        <Form.Group className="mb-3" controlId="formAddress">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Address"
            required={true}
            onChange={(e) => {
              setAddress(e.target.value);
            }}
            value={address}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formCity">
          <Form.Label>City</Form.Label>
          <Form.Control
            type="text"
            placeholder="City"
            required={true}
            value={city}
            onChange={(e) => {
              setCity(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPostalCode">
          <Form.Label>Postal Code</Form.Label>
          <Form.Control
            type="number"
            placeholder="Postal code"
            required={true}
            value={postalCode}
            onChange={(e) => {
              setPostalcode(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formFullName">
          <Form.Label>Country</Form.Label>
          <Form.Control
            type="text"
            placeholder="Country"
            required={true}
            value={country}
            onChange={(e) => {
              setCountry(e.target.value);
            }}
          />
        </Form.Group>
       
        <Button variant="primary" type="submit">
          Continue
        </Button>
      </Form>
    </Container>
  );
};

export default ShippingPage;
