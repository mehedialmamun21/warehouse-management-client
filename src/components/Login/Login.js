// import { getAuth, signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
// import React, { useState } from 'react';
// import { Button, Form } from 'react-bootstrap';
// import { Link, useNavigate } from 'react-router-dom';
// import app from '../../firebase.init';
// import SocialLogin from "./SocialLogin/SocialLogin";


// const auth  = getAuth(app);

// const Login = () => {

//     const [validated, setValidated] = useState(false);

//     const [error, setError] = useState('');

//     const [email,setEmail] = useState('');

//     const [password,setPassword] = useState('');

//     const [reset, setReset] = useState('');

//     const handleEmailBlur = event => {
//         setEmail(event.target.value);
//     }

//     const handlePasswordBlur = event => {
//         setPassword(event.target.value);
//     }

//     const navigate = useNavigate();

//     const navigateRegister = () => {
//         navigate("/register");
//     };

//     const handleFormSubmit = event => {

//         event.preventDefault();

//         const form = event.currentTarget;
//         if (form.checkValidity() === false) {
//             event.stopPropagation();
//             return;
//         }

//         setError('');
//         if(!/.{8,}/.test(password)){
//             setError('Have to be minimum 8 in length');
//             return;
//         }

//         setError('');
//         if(!/(?=.*?[#?!@$%^&*-])/.test(password)){
//             setError('Password should contain at least one special character');
//             return;
//         }

//         setValidated(true);

//         signInWithEmailAndPassword (auth,email,password)
//         .then(result => {
//             const user = result.user;
//             console.log(user);
//         })
//         .catch(error => {
//             console.error(error);
//             setError(error.message);
//         })

//         event.preventDefault();
//     }

//     const handlePasswordReset = () => {
//         sendPasswordResetEmail(auth, email)
//         .then(() => {
//             setReset('Password reset email sent');
//             console.log('Password reset email sent');
//         })
//     }

//     return (
//         <div>
//             <div className="registration w-50 mx-auto mt-5">
//                 <h2 className='text-primary'>Please Login</h2>

//                 <Form noValidate validated={validated} onSubmit={handleFormSubmit}>

//                     <Form.Group className="mb-3" controlId="formBasicEmail">
//                         <Form.Label>Email address</Form.Label>
//                         <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" required />
//                     </Form.Group>

//                     <Form.Group className="mb-3" controlId="formBasicPassword">
//                         <Form.Label>Password</Form.Label>
//                         <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" required />    
//                     </Form.Group>

//                     <p className='text-danger'>{error}</p>

//                     <Button variant="primary" type="submit">
//                         Login
//                     </Button>
//                     <Button onClick={handlePasswordReset} className='text-decoration-none' variant="link">Forget password?</Button>
//                     <br /> <br />
//                     <p className="text-success">{reset}</p>
//                     <p>
//                         Didn't register yet ?
//                         <Link
//                             to={"/register"}
//                             className="text-danger text-decoration-none"
//                             onClick={navigateRegister}
//                             >
//                             Please Register
//                         </Link>
//                     </p>

//                     <SocialLogin></SocialLogin>

//                 </Form>
//             </div>
//         </div>
//         );
//     };

// export default Login;


import React, {useRef} from "react";
import {Button, Form} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {Link, useNavigate} from "react-router-dom";
import {useSignInWithEmailAndPassword} from "react-firebase-hooks/auth";
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
        
        errorElement =  <div>
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
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
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