import React from 'react';
import Packages from '../../Spot/Packages/Packages';
import Banner from '../Banner/Banner';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Packages></Packages>
        </div>
    );
};

export default Home;