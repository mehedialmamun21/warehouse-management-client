import { getAuth } from 'firebase/auth';
import React from 'react';
import {useAuthState} from "react-firebase-hooks/auth";
import {signOut} from "firebase/auth";
import app from '../../firebase.init';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

const auth = getAuth(app);

const Header = () => {

  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  };

    return (
        <div>
            <Navbar  collapseOnSelect  expand="lg" sticky="top" bg="primary" variant="dark">
            <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">

                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/blogs">Blogs</Nav.Link>
                    <Nav.Link href="/inventories">Inventories</Nav.Link>

                    {
                        user && <>
                            <Nav.Link href="/add_item">Add-Item</Nav.Link>
                            <Nav.Link href="/my_items">My-Items</Nav.Link>
                        </>
                    }

                </Nav>
                

                {user ? (

                    <Link to="/">
                        <button className="log-out" onClick={handleSignOut}>
                            Logout
                        </button>         
                    </Link>


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