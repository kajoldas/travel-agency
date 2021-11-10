import React, { useEffect, useState } from 'react';


const MyOrders = () => {
    const email = localStorage.getItem('email');
    const [bookings, setBookings] = useState([]);
    useEffect( ()=> {
        fetch(`https://quiet-fjord-33750.herokuapp.com/myOrders/${email}`)
        .then(res => res.json())
        .then(data => setBookings(data));
    }, [])
    
    return (
        <div>
                <h2>My Orders</h2>
            {
                bookings.map((booking) =>(
                    
                    <div className="container mb-5 col-lg-4 col-sm-6">
                <div className="card shadow-lg w-100 h-100 text-center rounded my-card">
                    <div className="d-flex justify-content-center align-items-center h-75 p-2">
                        <img src={booking.image} className="card-img-top h-75 w-75" alt="" />
                    </div>
                    <div className="card-body">
                        <h5 > {booking.Place}</h5>
                        <p>Tour Description: {booking.Description}</p>
                        <p>Total Costing: {booking.price}</p>
                        <p>Approximate Travel Date: {booking.date}</p>
                        <h5 className="card-title">Your Name: {booking.yourname}</h5>
                        <h5 className="card-title">Your Email: {booking.email}</h5>
                        <h5 className="card-title">Your Address: {booking.address}</h5>
                    </div>
                </div> 
            </div>
                ) )
            }
        </div>
    );
};

export default MyOrders;