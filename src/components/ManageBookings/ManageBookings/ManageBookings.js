import React, { useEffect, useState } from 'react';
import { FaCalendarAlt, FaUserAlt } from 'react-icons/fa';

const ManageBookings = () => {
    const [allBookings, setAllBookings] = useState([]);
    const [deleteCount, setDeleteCount] = useState(0);
    const [approved, setApproved] = useState(0);

    useEffect(() => {
        fetch('https://agile-refuge-28114.herokuapp.com/manage_bookings')
            .then(res => res.json())
            .then(data => setAllBookings(data));
    }, [deleteCount, approved]);

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
    };

    const handleApprove = id => {
        const confirmDelete = window.confirm('Are you surely want to approve?');
        if (confirmDelete) {
            fetch(`https://agile-refuge-28114.herokuapp.com/approveBooking/${id}`, {
                method: 'PUT',
                headers: { 'content-type': 'application/json' }
            })
                .then(res => res.json())
                .then(result => {
                    if (result.modifiedCount > 0) {
                        alert('Approved Successfully!');
                        setApproved(result.modifiedCount);
                    }
                });
        }
    };


    return (

        <div className="all-bookings py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-9 mx-auto">
                        <h3 className="text-center mb-5">Manage All Bookings</h3>
                        {
                            allBookings.map(booking => (
                                <div key={booking._id} className="card mb-3">
                                    <div className="row g-0">
                                        <div className="col-md-4">
                                            <img src={booking.imgURL} className="img-fluid h-100 rounded-start" alt="..." />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h5 className="card-title">{booking.packageName}</h5>
                                                <div className="card-text">
                                                    <div className="card-info d-flex justify-content-between">
                                                        <p>
                                                            <FaUserAlt className="me-2 mb-1" />
                                                            {booking.name}
                                                            {' '}
                                                            ({booking.email})
                                                        </p>
                                                        <p>
                                                            <FaCalendarAlt className="me-2 mb-1" />
                                                            {booking.date}
                                                        </p>
                                                    </div>
                                                </div>
                                                <p className="card-text"><small className="text-muted">Status: {booking.status}</small></p>
                                                <p className="card-text">
                                                    <small className="text-muted">
                                                        Members: {booking.member}
                                                    </small>
                                                </p>
                                            </div>
                                            <div>
                                                <button
                                                    onClick={() => { handleDelete(booking._id) }}
                                                    className="btn btn-danger m-3">Delete</button>
                                                <button
                                                    onClick={() => { handleApprove(booking._id) }}
                                                    className="btn btn-primary m-3">Approve</button>
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

export default ManageBookings;