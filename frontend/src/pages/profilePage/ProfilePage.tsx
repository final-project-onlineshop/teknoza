import { Button, Container, Form } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import "./profilePage.scss";

export default function ProfilePage() {
  return (
    <Container className="profile-page">
      <Helmet>
        <title>User Profile</title>
      </Helmet>
      <Form className="profil-form">
      <h1 className="my-3">User Profile</h1>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" value="Username" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" value="Email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" />
        </Form.Group>{" "}
        <Form.Group className="mb-3" controlId="formPasswordConfirmation">
          <Form.Label>Confirm password</Form.Label>
          <Form.Control type="password" />
        </Form.Group>
        <div className="mb-3">
          <Button  type="submit">
            Update
          </Button>
        </div>
      </Form>
    </Container>
  );
}
