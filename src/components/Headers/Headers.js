import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './Headers.css';
import UseAuth from '../../Hooks/UseAuth';



const Headers = () => {
    const { user, logout } = UseAuth();
    return (
        <div className="flexi">
            <div>
                <img className="imgSize" src="./images/logo.png" alt="" />
            </div>
            <div className="ghj">
                <LinkContainer to="/">
                    <Nav.Link className="colorr">Home</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/about">
                    <Nav.Link className="colorr">About</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/destination">
                    <Nav.Link className="colorr">Destinations</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/blog">
                    <Nav.Link className="colorr">Blogs</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/order">
                    <Nav.Link className="colorr">Manage My Destination</Nav.Link>
                </LinkContainer>

                <span>{user.displayName} </span>
                {
                    user.email ?
                        <button onClick={logout}>LogOut</button>
                        :
                        <LinkContainer to="/login">
                            <Nav.Link className="colorr">Login</Nav.Link>
                        </LinkContainer>
                }
            </div>
        </div>
    );
};

export default Headers;