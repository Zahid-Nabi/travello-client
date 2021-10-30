import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="text-area pt-5 text-white">
                            <h1>Amazing tour in Indonesia</h1>
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