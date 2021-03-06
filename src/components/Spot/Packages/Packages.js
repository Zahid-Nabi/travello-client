import React, { useEffect, useState } from 'react';
import Package from '../Package/Package';
import './Packages.css';

const Packages = () => {
    const [packages, setPackages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        fetch('https://agile-refuge-28114.herokuapp.com/packages')
            .then(res => res.json())
            .then(data => setPackages(data))
            .finally(() => setIsLoading(false));
    }, []);
    if (isLoading) {
        return (
            <div style={{ minHeight: '80vh', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div className="spinner-grow text-success" role="status"></div>
            </div>
        );
    }
    return (
        <div className="container">
            <div className="packages">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="text-center mb-5">
                            <h5 className="section-subheading">Choose your package</h5>
                            <h2 className="section-heading">Select Best <span>Popular Destinations</span></h2>
                        </div>
                    </div>
                </div>
                <div className="row row-cols-1 row-cols-md-4 g-4">

                    {
                        packages.map(pack => <Package
                            key={pack._id}
                            package={pack}
                        ></Package>)
                    }
                </div>
            </div>
            <hr />
        </div>
    );
};

export default Packages;