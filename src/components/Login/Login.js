import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './Login.css';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
            .catch(error => alert(error.message));
    }

    return (
        <div className="login-section">
            <div className="login-box">
                <h3 className="mb-5">Please Login</h3>
                <div className="google-login">
                    <button
                        onClick={handleGoogleLogin}
                        className="btn btn-outline-success">Login via Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;