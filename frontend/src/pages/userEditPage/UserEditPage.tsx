import React from "react";
import "./userEditPage.scss";
import { Form, Button, Container } from "react-bootstrap";
import { Helmet } from "react-helmet-async";

const UserEditPage = () => {
  return (
    <Container className="small-container">
      <Helmet>
        <title>Edit User </title>
      </Helmet>
      <h1>Edit User</h1>

      <Form>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" required />
        </Form.Group>

        <Form.Check
          className="mb-3"
          type="checkbox"
          id="isAdmin"
          label="isAdmin"
        />

        <div className="mb-3">
          <Button  type="submit">
            Update
          </Button>
          
        </div>
      </Form>
    </Container>
  );
};

export default UserEditPage;
