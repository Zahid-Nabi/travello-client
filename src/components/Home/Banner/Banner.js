import React from 'react';
import { Link } from 'react-router-dom';
import Typical from 'react-typical';
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="text-area pt-5 text-white h-100">
                            <h5>Travel {' '}

                                <Typical
                                    steps={[
                                        'Fun',
                                        3000,
                                        'Curious',
                                        3000,
                                        'Adventurous',
                                        3000,
                                        'Hassle-Free',
                                        3000
                                    ]}
                                    loop={Infinity}
                                    wrapper="span"
                                />

                            </h5>
                            <h1 className="banner-title">Amazing tour around the world with <span>Travello</span></h1>
                            <h4 className="text-warning">Finally, a travel solution just for Travel & Tourism</h4>
                            <p className="my-4">We are dedicated to providing exceptional service and maintaining long-term customer satisfaction – building enduring relationships is at the center of who we are.</p>
                            <Link to="/login">
                                <button className="btn btn-primary">
                                    Get Started

                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;