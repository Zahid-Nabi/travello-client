import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

const MyBookings = () => {
    const [myBookings, setMyBookings] = useState([]);
    const [deleteCount, setDeleteCount] = useState(0);
    const { user } = useAuth();

    useEffect(() => {
        fetch(`https://agile-refuge-28114.herokuapp.com/bookings/${user.email}`)
            .then(res => res.json())
            .then(data => setMyBookings(data));
    }, [deleteCount]);

    const handleDelete = id => {
        const confirmDelete = window.confirm('Are you surely want to delete?');
        if (confirmDelete) {
            fetch(`https://agile-refuge-28114.herokuapp.com/deleteBooking/${id}`, {
                method: 'DELETE',
                headers: { 'content-type': 'application/json' }
            })
                .then(res => res.json())
                .then(result => setDeleteCount(result.deletedCount));
        }
    }
    return (
        <div className="my-bookings py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-9 mx-auto">
                        <h3 className="text-center">My Bookings</h3>
                        {
                            myBookings.map(myBooking => (
                                <div key={myBooking._id} className="card mb-3">
                                    <div className="row g-0">
                                        <div className="col-md-4">
                                            <img src={myBooking.imgURL} className="img-fluid h-100 rounded-start" alt="..." />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h5 className="card-title">{myBooking.packageName}</h5>
                                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                                <p className="card-text"><small className="text-muted">Status: {myBooking.status}</small></p>
                                            </div>
                                            <div>
                                                <button onClick={() => handleDelete(myBooking._id)} className="btn btn-danger m-3">Delete</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyBookings;