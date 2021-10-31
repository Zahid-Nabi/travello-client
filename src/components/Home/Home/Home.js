import React from 'react';
import Packages from '../../Spot/Packages/Packages';
import Banner from '../Banner/Banner';
import Testimonial from '../Testimonial/Testimonial';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Packages></Packages>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;