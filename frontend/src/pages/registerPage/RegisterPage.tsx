import "./registerPage.scss";

import axios from 'axios';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Helmet } from 'react-helmet-async';
import { useContext, useEffect, useState } from 'react';
import { Store } from '../../Store';
import { toast } from 'react-toastify';

const BASE_API_URL = import.meta.env.VITE_BASE_API_URL;


const RegisterPage = () => {
  const navigate = useNavigate();
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get('redirect');
  const redirect = redirectInUrl ? redirectInUrl : '/';

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const { state, dispatch: ctxDispatch } = useContext(Store);

  const { userInfo } = state;

  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }
    try {
      const { data } = await axios.post(`${BASE_API_URL}/users/signup`, {
        name,
        email,
        password,
      });
      ctxDispatch({ type: 'USER_SIGNIN', payload: data });
      localStorage.setItem('userInfo', JSON.stringify(data));
      navigate(redirect || '/login');
    } catch (err) {
      toast.error(err.message);
    }
  };

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);

  return (
    <Container className="register-page">
      <Helmet>
        <title>Register</title>
      </Helmet>

      <Form className="register-form" onSubmit={submitHandler}>
        <h1 className="my-3">Register</h1>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" required onChange={(e) => setName(e.target.value)} placeholder="Your name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" required
            onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" required
            onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
        </Form.Group>{" "}
        <Form.Group className="mb-3" controlId="formPasswordConfirmation">
          <Form.Label>Confirm password</Form.Label>
          <Form.Control type="password" required onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Register
        </Button>
        <p>
          Already have an account? <NavLink to="/login">Login</NavLink>
        </p>
      </Form>
    </Container>
  );
};

export default RegisterPage;
