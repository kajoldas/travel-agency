import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ManageAllOrder = () => {
    const[services, setServices] = useState([]);

    //Load Data from JSON
    useEffect(() => {
        fetch('https://quiet-fjord-33750.herokuapp.com/places')
        .then(res => res.json())
        .then(data => {    
            setServices(data);
        })
    }, [])


    //--------Handle delete---------- 
    const handleDeletePlace = id => {
        const proceed = window.confirm('Sure You Want To Delete This Place?')
        if(proceed){
            const url = `https://quiet-fjord-33750.herokuapp.com/places/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                alert('Deleted Succesfully')
                const remainingPlaces = services.filter(service => service._id !==id)    
                setServices(remainingPlaces);
            }
            else{
                
            }

        })
        }
    }

    return (
        <div>
            <h1>Manage All Orders</h1>
            <section id="" className="mt-5 container">
            {/* render vehicles from server side */}
                <div className="row">
                    {
                        services.map(service => 
                            
                            
                            <div className="container mb-5 col-lg-4 col-sm-6">
                                <div className="card shadow-lg w-100 h-100 text-center rounded my-card">
                                <div className="d-flex justify-content-center align-items-center h-75 p-2">
                                    <img src={service.img} className="card-img-top h-75 w-75" alt="" />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">{service.name}</h5>
                                    <p>{service.description}</p>
                                    <p>{service.price}</p>
                                </div>
                                <div className="card-footer ">
                                    <div className="d-flex align-items-center justify-content-center ">
                                        
                                        <Link to={`/booking/${service._id}`}>
                                            <button className="btn btn-success ">Book Your Tour, Today!</button>
                                        </Link>
                                        <button  onClick={ () =>  handleDeletePlace(service._id)} className="btn btn-danger mx-4" > Delete This place</button>
                                    </div>
                                </div>
                            </div> 
                    </div> 
                        )
                    }
                </div>
            </section>

        </div>
    );
};

export default ManageAllOrder;