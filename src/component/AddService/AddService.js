import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddService.css'

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();

  const onSubmit = data => {
      console.log(data)
        axios.post('https://quiet-fjord-33750.herokuapp.com/places', data )
        .then(res => {
            console.log(res)
            if(res.data.insertedId){
                alert('New Places Added Successfully')
                reset();
            }
        })
    };
    return (
        <div className="service py-5 my-5">
            <h1>Add Service </h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name")} placeholder="Title" />
                <textarea {...register("description")} placeholder="description" />
                <input type="number" {...register("price")} placeholder="price"  />
                <input {...register("img")} placeholder="Image URL" />
                <input className="btn btn-primary" type="submit" />
            </form>
        </div>
    );
};

export default AddService;