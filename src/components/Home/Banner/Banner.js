import React from 'react';
import Typical from 'react-typical';
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner py-5">
            <div className="container">
                <div className="row border border-primary">
                    <div className="col-md-6">
                        <div className="text-area pt-5 text-white h-100">
                            <h1>Amazing tour in

                                <Typical
                                    steps={['Indonesia', 1000, 'America', 1000]}
                                    loop={Infinity}
                                    wrapper="span"
                                />

                            </h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, perspiciatis!</p>
                            <button className="btn-danger btn">Book Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;