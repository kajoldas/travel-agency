import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { Col, Container, Row } from 'react-bootstrap';
import './Booking.css';

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
        <Container className="places">
            <h1 className="service py-5  my-5 " >Book Your Tour Today</h1>
            <h2>Places Order </h2>

               <Row>
                  <Col>
                  <form className="form" onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("yourname", { required: true, maxLength: 20 })} placeholder="Name" />
                    <input type="email" {...register("email")} placeholder="Email" defaultValue={service?.email} />
                    <input type="date" {...register("date")} placeholder="Approximation date of Travel" />
                    <input type="Address" {...register("address", { min: 18, max: 99 })} placeholder="Address" />

              <input type="submit" placeholder="submit" />
             </form>
                  </Col>
                  <Col>
                 <img style={{width:'30%'}} src={service?.img} />
                  <h1>{service?.name}</h1> 
                 <p>{service?.description}</p>
                 <h4> Price:{service?.price}</h4>
                  </Col>
               </Row>
            


        </Container>
    );
};

export default Booking;