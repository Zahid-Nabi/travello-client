import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';
import { FcGoogle } from 'react-icons/fc';
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
                <h3 className="mb-5 text-white">Please Login</h3>
                <div className="google-login">
                    <button
                        onClick={handleGoogleLogin}
                        className="btn login-btn">
                        Login via Google
                        <FcGoogle className="ms-3 mb-1" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;