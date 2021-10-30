import React from 'react';

import { Button } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import UseAuth from '../../Hooks/UseAuth';


import './Login.css';


const Login = () => {
    const { signInUsingGoogle } = UseAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    const handleTheGoogleLogIN = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
                console.log(result);
            })

    }

    return (
        <div className="google mb-5">
            <h2 className="fw-bold text-danger">Login With Google</h2>
            <Button onClick={handleTheGoogleLogIN} className="btnLogin" variant="secondary"><i className="fab fa-google dd"></i>Google Sign In</Button>
        </div>
    );
};

export default Login;