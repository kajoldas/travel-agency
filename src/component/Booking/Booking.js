import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import axios from 'axios';

const Booking = () => {

    const {ServiceId} = useParams();

    const [service , setService ] = useState();

    const email = localStorage.getItem('email');
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        data.email = email;
        console.log(data)
          axios.post('https://quiet-fjord-33750.herokuapp.com/book-tour', data )
          .then(res => {
              console.log(res)
              if(res.data.insertedId){
                  alert('Your Booking AddedSuccessfully')
                  reset();
              }
          })

      };

    //   console.log(service);
    useEffect( () => {
        fetch(`https://quiet-fjord-33750.herokuapp.com/place/${ServiceId}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return (
        <div>
            <h1 className="service py-5 my-5 " >Book Your Tour Today</h1>
            <h2>This is booking, </h2>

          

            <form className="form" onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("yourname", { required: true, maxLength: 20 })} placeholder="Name" />
                    <input type="email" {...register("email")} placeholder="Email" defaultValue={service?.email} />
                    <input type="date" {...register("date")} placeholder="Approximation date of Travel" />
                    <input type="Address" {...register("address", { min: 18, max: 99 })} placeholder="Address" />

                    <input
                {...register("Place")}
                defaultValue={service?.name}
                placeholder="Destination"
              />
              
              <input
                {...register("Description")}
                placeholder="Description"
                defaultValue={service?.description}
                className="p-2 m-2"
                
              />
              

              <input
                {...register("price")}
                placeholder="price"
                defaultValue={service?.price}
                className="p-2 m-2"
               
              />
              
              <input
                {...register("image")}
                defaultValue={service?.img}
                placeholder="image URL"
                className="p-2 m-2"
                
              />
                <input type="submit" placeholder="submit" />
                    
            </form>
        </div>
    );
};

export default Booking;