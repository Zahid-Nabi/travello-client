import React from 'react';
import { FaFacebookF, FaTwitter, FaGoogle, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import './Team.css';

const Team = () => {
    return (
        <section className="team">
            <div className="container">
                <div className="row text-center">
                    <div className="col-sm-12">
                        <div className="text-center mb-5">
                            <h5 className="section-subheading">Team Members</h5>
                            <h2 className="section-heading">We’re here <span>to do good</span></h2>
                        </div>
                    </div>

                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6 col-md-4">
                                <div className="team-member">
                                    <figure>
                                        <img src="https://i.ibb.co/RyddHj2/client-5.png" alt="" className="img-fluid" />
                                        <figcaption>
                                            <p>Have peace of mind knowing that we're by your side, taking care of everything on a journey where your wellbeing comes first. Your solution to worry-free travel starts here.</p>
                                            <ul className="social-icons">
                                                <li><FaFacebookF /></li>
                                                <li><FaTwitter /></li>
                                                <li><FaGoogle /></li>
                                                <li><FaInstagram /></li>
                                                <li><FaLinkedinIn /></li>
                                            </ul>
                                        </figcaption>
                                    </figure>
                                    <h4>Sivasten Hongchong</h4>
                                    <p>Travel Director</p>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4">
                                <div className="team-member">
                                    <figure>
                                        <img src="https://i.ibb.co/tK0N4q1/client-2.png" alt="" className="img-fluid" />
                                        <figcaption>
                                            <p>Avoid fees and frustration with cancellations up to 28 days before departure on eligible trips and easy deposit transfer.</p>
                                            <ul className="social-icons">
                                                <li><FaFacebookF /></li>
                                                <li><FaTwitter /></li>
                                                <li><FaGoogle /></li>
                                                <li><FaInstagram /></li>
                                                <li><FaLinkedinIn /></li>
                                            </ul>
                                        </figcaption>
                                    </figure>
                                    <h4>Michel Jawande</h4>
                                    <p>Travel Guide</p>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4">
                                <div className="team-member">
                                    <figure>
                                        <img src="https://i.ibb.co/WzdW7Z4/client-4.png" alt="" className="img-fluid" />
                                        <figcaption>
                                            <p>Whether near or far from home, your trip will be local led and full of unforgettable experiences, with everything taken care of.</p>
                                            <ul className="social-icons">
                                                <li><FaFacebookF /></li>
                                                <li><FaTwitter /></li>
                                                <li><FaGoogle /></li>
                                                <li><FaInstagram /></li>
                                                <li><FaLinkedinIn /></li>
                                            </ul>
                                        </figcaption>
                                    </figure>
                                    <h4>Dieana Franklin</h4>
                                    <p>Wellbeing Director</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Team;