import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Header.css';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <NavLink to="/home" className="navbar-brand">Logo</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">

                    <div className="navbar-nav ms-auto d-flex align-items-center">
                        <NavLink className="nav-link" to="/home">Home</NavLink>
                        <NavLink className="nav-link" to="/add">Add Package</NavLink>
                        <NavLink className="nav-link" to="/mybookings">My Bookings</NavLink>
                        <NavLink className="nav-link" to="/manage_bookings">Manage Bookings</NavLink>
                        {
                            user.email && <span className="me-2">Welcome, {user?.displayName}</span>
                        }
                        {
                            user.email ?
                                <NavLink className="nav-link" to="/login">
                                    <button onClick={logOut} className="btn btn-primary">Logout</button>
                                </NavLink>

                                :
                                <NavLink className="nav-link" to="/login">
                                    <button className="btn btn-primary">Login</button>
                                </NavLink>
                        }
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;