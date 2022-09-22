import { Button, Container, Form } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import { NavLink } from "react-router-dom";
import "./loginPage.scss";

const LoginPage = () => {
  return (
    <Container className="login-page">
      <Helmet>
        <title>Login</title>
      </Helmet>
      <h1>Login</h1>
      <Form className="login-form">
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Login
        </Button>
        <p>
          New customer? <NavLink to="/register">Create your account</NavLink>
        </p>
      </Form>
    </Container>
  );
};

export default LoginPage;
