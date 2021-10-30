import React from 'react';
import './Footer.css';
import { FaFacebookF, FaTwitter, FaGoogle, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-top">
                <div className="container">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4">

                        <div className="col p-3">
                            {/* <img className="w-75 mb-3" src={} alt="" /> */}
                            <p>Medi Health introduces the latest technology and design features within the facility, aimed at specifically enhancing the patients’ experience and perception of the hospital’s facilities.</p>
                        </div>

                        <div className="col text-center px-5 py-3 footer-links">
                            <h5 className="footer-title">Help Links</h5>

                        </div>

                        <div className="col text-center p-3">
                            <h5 className="footer-title">Open-Close Time</h5>

                        </div>
                        <div className="col p-3">
                            <h5 className="footer-title">Newsletter</h5>

                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className="footer-bottom">
                <div className="container">
                    <div className="d-block d-md-flex justify-content-between text-center">
                        <div className="copyright">
                            <p className="mb-5 mb-md-0">&copy; Copyright 2021 | All rights reserved by Medihealth</p>
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