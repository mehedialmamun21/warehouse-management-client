import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useState } from 'react';
import app from '../../firebase.init';
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification } from "firebase/auth";
import { Link, useNavigate } from 'react-router-dom';

const auth  = getAuth(app);

const Register = () => {

    const [validated, setValidated] = useState(false);

    const [success, setSuccess] = useState('');

    const [error, setError] = useState('');

    const [email,setEmail] = useState('');

    const [password,setPassword] = useState('');

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }

    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate("/login");
    };

    const handleFormSubmit = event => {

        event.preventDefault();

        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
            return;
        }

        setError('');
        if(!/.{8,}/.test(password)){
            setError('Have to be minimum 8 in length');
            return;
        }

        setError('');
        if(!/(?=.*?[#?!@$%^&*-])/.test(password)){
            setError('Password should contain at least one special character');
            return;
        }

        setValidated(true);

        createUserWithEmailAndPassword (auth,email,password)
        .then(result => {
            const user = result.user;
            console.log(user);
            verifyEmail();

            setSuccess("email verification sent")

        })
        .catch(error => {
            setSuccess('');
            console.error(error);
            setError(error.message);
        })

        event.preventDefault();
    }

    const verifyEmail = () => {
        sendEmailVerification (auth.currentUser)
        .then(() => {
            console.log('Email verification sent');
        })
    }

    return (
        <div>
            <div className="registration w-50 mx-auto mt-5">
                <h2 className='text-primary'>Please Register</h2>

                <Form noValidate validated={validated} onSubmit={handleFormSubmit}>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" required />    
                    </Form.Group>

                    <p className='text-danger'>{error}</p>

                    <Button variant="primary" type="submit">
                        Register
                    </Button>
                    <br /> 
                    <p className='text-success'>{success}</p>
                    <br />

                    <p>
                        Already have an account?
                        <Link
                            to={"/login"}
                            className="text-danger text-decoration-none"
                            onClick={navigateLogin}
                            >
                            Please Login
                        </Link>
                    </p>

                </Form>
            </div>
        </div>
    );
};

export default Register;