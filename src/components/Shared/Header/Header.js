import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { AiOutlineLogout } from 'react-icons/ai';
import { FiUser } from 'react-icons/fi';
import { HiMenu } from 'react-icons/hi';
import './Header.css';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <nav className="navbar sticky-top navbar-expand-lg">
            <div className="container">
                <NavLink to="/home" className="navbar-brand">
                    <img className="logo" src="https://i.ibb.co/nggRfp6/travello-logo.png" alt="Travello Logo" />
                </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon">
                        <HiMenu />
                    </span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">

                    <div className="navbar-nav ms-lg-auto d-flex align-items-center">
                        {
                            user.email && (
                                <div className="nav-list d-lg-flex text-center align-items-center">
                                    <NavLink className="nav-link" to="/add">Add Package</NavLink>
                                    <NavLink className="nav-link" to="/mybookings">My Bookings</NavLink>
                                    <NavLink className="nav-link me-lg-5" to="/manage_bookings">Manage Bookings</NavLink>
                                </div>
                            )
                        }


                        {
                            user.email && <span className="me-lg-2 mt-3 mt-lg-0"><FiUser className="mb-1" /> Welcome, {user?.displayName}</span>
                        }
                        {
                            user.email ?
                                <NavLink className="nav-link" to="/login">
                                    <button onClick={logOut} className="btn btn-primary">Logout <AiOutlineLogout className="mb-1" /></button>
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