import { getAuth } from 'firebase/auth';
import React from 'react';
import {useAuthState} from "react-firebase-hooks/auth";
import {signOut} from "firebase/auth";
import app from '../../firebase.init';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';

const auth = getAuth(app);

const Header = () => {

  const [user] = useAuthState(auth);
  
//   const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth);
  };

//   if(user){
//     navigate('/home');
//     }

    return (
        <div>
            <Navbar  collapseOnSelect  expand="lg" sticky="top" bg="primary" variant="dark">
            <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">

                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    
                    {
                        user && <>
                            <Nav.Link href="/addItem">Add-Item</Nav.Link>
                            <Nav.Link href="/manageItems">Manage-Items</Nav.Link>
                            <Nav.Link href="/myItems">My-Items</Nav.Link>
                        </>
                    }

                </Nav>

                {user ? (
                    <button className="sign-out" onClick={handleSignOut}>
                        Sign Out
                    </button>
                    ) : (
                    <div className="log-in">
                        <Link to="/login">Login</Link>
                    </div>
                    )}

            </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    );
};

export default Header;