import React from 'react';
import { Link } from 'react-router-dom';
import './Package.css';

const Package = (props) => {
    const { _id, place, city, price, imgURL } = props.package;
    return (
        <div className="col">
            <div className="card h-100 package">
                <img src={imgURL} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{place}</h5>
                    <p className="text-primary">Country/City: {city}</p>
                </div>
                <h3 className="price-tag">${price}</h3>
                <div className="card-footer">
                    <Link to={`/booking/${_id}`}>
                        <button className="book-now-btn">Book Now <i className="fas fa-hand-point-right ms-3"></i></button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Package;