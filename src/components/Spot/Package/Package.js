import React from 'react';
import { Link } from 'react-router-dom';
import { BsBookmarkHeartFill } from 'react-icons/bs';
import './Package.css';

const Package = (props) => {
    const { _id, place, city, description, imgURL } = props.package;
    return (
        <div className="col">
            <div className="card shadow-lg h-100 package">
                <img src={imgURL} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{place}</h5>
                    <p className="text-primary">Country/City: {city}</p>
                    <p>
                        <small>
                            {
                                description.slice(0, 80)
                            }
                            ...
                        </small>
                    </p>
                </div>

                <div className="card-footer">
                    <Link to={`/booking/${_id}`}>
                        <button className="btn btn-primary">
                            Book Now
                            <BsBookmarkHeartFill className="ms-2 mb-1" />
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Package;