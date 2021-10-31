import React from 'react';
import './Footer.css';
import { FaFacebookF, FaTwitter, FaGoogle, FaInstagram, FaLinkedinIn, FaPhone, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-top">
                <div className="container">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4">

                        <div className="col p-3">
                            <img className="w-75 mb-3 footer-logo" src="https://i.ibb.co/nggRfp6/travello-logo.png" alt="" />
                            <p>We believe sustainable tourism matters. Travello Cares is our commitment to preserving the planet, wildlife and giving back to communities for generations to come.</p>
                        </div>

                        <div className="col text-center px-5 py-3 footer-links">
                            <h5 className="footer-title">Learn More</h5>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">What’s New</li>
                                <li class="list-group-item">About Us</li>
                                <li class="list-group-item">Terms and Conditions</li>
                                <li class="list-group-item">Privacy Policy</li>
                                <li class="list-group-item">FAQ</li>
                            </ul>
                        </div>

                        <div className="col text-center p-3 contact-us">
                            <h5 className="footer-title">Contact Us</h5>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item d-flex">
                                    <span className="icon"><FaMapMarkerAlt /></span>
                                    <span className="address">
                                        27 Main Street, Suite 17,<br />
                                        Ashuganj, Brahmanbaria, <br />
                                        Bangladesh.
                                    </span>
                                </li>
                                <li class="list-group-item d-flex">
                                    <span className="icon"><FaPhone /></span>
                                    <span className="phone">
                                        +880 1737 95 11 02
                                    </span>
                                </li>
                                <li class="list-group-item email">
                                    <span className="icon"><FaEnvelope /></span>
                                    <span className="email">
                                        jobaidunnabi@gmail.com
                                    </span>
                                </li>

                            </ul>

                        </div>
                        <div className="col p-3">
                            <h5 className="footer-title">Newsletter</h5>
                            <form class="row gx-3 gy-2 align-items-center">
                                <div class="col-sm-12">

                                    <input type="email" class="form-control" id="specificSizeInputName" placeholder="Enter your email" />
                                </div>
                                <div class="col-auto">
                                    <button type="submit" class="btn btn-primary">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className="footer-bottom">
                <div className="container">
                    <div className="d-block d-md-flex justify-content-between text-center">
                        <div className="copyright">
                            <p className="mb-5 mb-md-0">&copy; Copyright 2021 | All rights reserved by Travello</p>
                        </div>
                        <ul className="social-icons">
                            <li><FaFacebookF /></li>
                            <li><FaTwitter /></li>
                            <li><FaGoogle /></li>
                            <li><FaInstagram /></li>
                            <li><FaLinkedinIn /></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Footer;