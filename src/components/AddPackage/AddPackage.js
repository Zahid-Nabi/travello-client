import React from 'react';
import { useForm } from "react-hook-form";

const AddPackage = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        fetch(`https://agile-refuge-28114.herokuapp.com/addPackage`, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Package Added Successfully');
                    reset();
                }
            })
    };
    return (
        <div className="add-package py-5">
            <div className="container">
                <div className="form-box">
                    <h3 className="text-center">Add a new package</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="row mb-3">
                            <label htmlFor="place" className="col-sm-2 col-form-label">Visiting Place</label>

                            <div className="col-sm-10">
                                <input
                                    type="text" className="form-control" id="place"
                                    {...register("place", { required: true })}
                                />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="city" className="col-sm-2 col-form-label">Country/City</label>
                            <div className="col-sm-10">
                                <input
                                    {...register("city", { required: true })}
                                    type="text" className="form-control" id="city"
                                />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="desc" className="col-sm-2 col-form-label">Description</label>
                            <div className="col-sm-10">
                                <textarea
                                    {...register("description", { required: true })}
                                    className="form-control" id="desc" cols="30" rows="7"></textarea>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-md-6">
                                <div className="row">
                                    <label htmlFor="price" className="col-sm-4 col-form-label">Cost per person ($)</label>
                                    <div className="col-sm-8">
                                        <input
                                            {...register("price", { required: true })}
                                            type="number" className="form-control" id="price"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="row">
                                    <label htmlFor="duration" className="col-sm-4 col-form-label">Visiting Duration</label>
                                    <div className="col-sm-8">
                                        <input
                                            {...register("duration", { required: true })}
                                            type="text" className="form-control" id="duration"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="img-url" className="col-sm-2 col-form-label">Image URL</label>
                            <div className="col-sm-10">
                                <textarea
                                    {...register("imgURL", { required: true })}
                                    className="form-control" id="img-url" cols="30" rows="3"></textarea>
                            </div>
                        </div>

                        <button type="submit" className="btn btn-primary">Add Package</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddPackage;