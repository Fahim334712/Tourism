import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './Headers.css';
import UseAuth from '../../Hooks/UseAuth';
import logo from '../../img/loh.png'



const Headers = () => {
    const { user, logout } = UseAuth();
    return (
        <div >
            <Navbar className="bg" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand className="text-white" href="#home"> <img className="ds" src={logo} alt="" />Evergreen Express</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto"></Nav>
                        <Nav>
                            <LinkContainer to="/home">
                                <Nav.Link className="text-white">Home</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/about">
                                <Nav.Link className="text-white">About</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/blog">
                                <Nav.Link className="text-white">Blogs</Nav.Link>
                            </LinkContainer>

                            <NavDropdown className="mx-2" style={{ backgroundColor: 'white' }} title="Destination" >
                                <NavDropdown.Item href=".." className="text-black">International</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4" className="text-black">Domestic</NavDropdown.Item>
                            </NavDropdown>
                            <span className="text-white">{user.displayName} </span>
                            {
                                user.email ?
                                    <button className="text-black nh" onClick={logout}>LogOut</button>
                                    :
                                    <LinkContainer to="/login">
                                        <button className="text-black nh">Login</button>
                                    </LinkContainer>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Headers;