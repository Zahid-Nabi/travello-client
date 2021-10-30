import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';

const Booking = () => {
    const { id } = useParams();
    const [selectedPackage, setSelectedPackage] = useState({});
    const { user } = useAuth();
    useEffect(() => {
        fetch(`https://agile-refuge-28114.herokuapp.com/package/${id}`)
            .then(res => res.json())
            .then(data => setSelectedPackage(data));
    }, []);

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {

        fetch(`https://agile-refuge-28114.herokuapp.com/addBooking`, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Package Booked Successfully');
                    reset();
                }
            })
    };
    return (
        <div className="booking py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 p-5">
                        <div className="img-box">
                            <img className="img-fluid" src={selectedPackage.imgURL} alt="" />
                        </div>
                        <hr />
                        <div className="info d-flex justify-content-between">
                            <div className="price">
                                <h2>${selectedPackage.price}</h2>
                            </div>
                            <div className="city">
                                <h2>{selectedPackage.city}</h2>
                            </div>
                            <div className="duration">
                                <h2>{selectedPackage.duration}</h2>
                            </div>
                        </div>
                        <hr />
                        <div className="desc">
                            <h3>Overview</h3>
                            <p>{selectedPackage.description}</p>
                        </div>
                    </div>
                    <div className="col-md-4 pt-5">
                        <h3>Book your package</h3>
                        <form onSubmit={handleSubmit(onSubmit)} className="row g-3">

                            <div className="col-12">
                                {
                                    selectedPackage.place && (
                                        <div>
                                            <label htmlFor="package-name" className="form-label">Package Name</label>
                                            <input
                                                {...register("packageName")}
                                                type="text" className="form-control" id="package-name" defaultValue={selectedPackage.place}
                                                readOnly
                                            />
                                        </div>
                                    )
                                }
                            </div>

                            <div className="col-12">
                                <label htmlFor="name" className="form-label">Full Name</label>
                                <input
                                    {...register("name", { required: true })}
                                    type="text" className="form-control" id="name" defaultValue={user.displayName} readOnly />
                            </div>
                            <div className="col-12">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input
                                    {...register("email", { required: true })}
                                    type="email" className="form-control" id="email" defaultValue={user.email} readOnly />
                            </div>


                            <div className="col-12">
                                <label htmlFor="inputAddress" className="form-label">Address</label>
                                <input
                                    {...register("address", { required: true })}
                                    type="text" className="form-control" id="inputAddress" placeholder="Apartment, studio, or floor" />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="member" className="form-label">Group Member</label>
                                <input
                                    {...register("member", { required: true, min: 1 })}
                                    type="number" className="form-control" id="member" placeholder="Number of member" />
                            </div>

                            <div className="col-md-6">
                                <label htmlFor="date" className="form-label">Journey Date</label>
                                <input
                                    {...register("date", { required: true })}
                                    type="date" className="form-control" id="date" />
                            </div>
                            <div className="col-12">
                                <input
                                    {...register("status", { required: true })}
                                    type="hidden" className="form-control" defaultValue="Pending" readOnly />
                            </div>
                            <div className="col-12">
                                {
                                    selectedPackage.imgURL && (
                                        <input
                                            {...register("imgURL", { required: true })}
                                            type="hidden" className="form-control" defaultValue={selectedPackage.imgURL}
                                        />
                                    )
                                }
                            </div>

                            <div className="col-12">
                                <button type="submit" className="btn btn-primary">Book</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Booking;