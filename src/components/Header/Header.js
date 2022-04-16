import { onAuthStateChanged } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import CustomLink from '../CustomLink/CustomLink';
const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    console.log(user)
    return (
        <>
            <Navbar className='text-white' collapseOnSelect expand="lg" style={{ backgroundColor: "cyan", color: "white" }}>
                <Container>
                    <Navbar.Brand href="#home">My users</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <CustomLink to='/'>Home</CustomLink>
                            <CustomLink to='/users'>Users</CustomLink>
                            <CustomLink to='/login'>Login</CustomLink>

                        </Nav>
                        <Nav>
                            <span style={{ color: "blue" }}>{user ? user.email : "user"}</span>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;