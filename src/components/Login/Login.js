import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import SocialLogin from "../Login/SocialLogin/SocialLogin";
import { getAuth } from "firebase/auth";
import app from "../../firebase.init";

const auth = getAuth(app);



const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  let errorElement;
  if (error) {
    errorElement = <div>
      <p className='text-danger'>Error: {error.message}</p>
    </div>
  }

  if (user) {
    navigate("/");
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password);
  };
  const navigateRegister = (event) => {
    navigate("/register");
  };


  return (
    <div className="container w-50 mx-auto">
      <h2 className="text-primary text-center mt-4">Please Login</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            ref={emailRef}
            type="email"
            placeholder="Enter email"
            required
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>

        <p className="text-danger">{errorElement}</p>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <p>
        New to tution provider?
        <Link
          to={"/register"}
          className="text-danger text-decoration-none"
          onClick={navigateRegister}
        >
          Please Register
        </Link>
      </p>

      <SocialLogin></SocialLogin>

    </div>
  );
};

export default Login;