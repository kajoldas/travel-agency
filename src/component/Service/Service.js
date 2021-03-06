import React, { useEffect, useState } from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';

const Service = () => {
    const[services, setServices] = useState([]);

    //Load Data from JSON
    useEffect(() => {
        fetch('https://quiet-fjord-33750.herokuapp.com/places')
        .then(res => res.json())
        .then(data => {    
            setServices(data);
        })
    }, [])

    
        
    return (
        <div>

            <section id="" className="mt-5 container">
            <h1 className="text-center fw-bolder pb-5 mb-4">Latest Offers</h1>
            <h2 className="text-center fw-bolder pb-5 mb-4">Our Services</h2>
            {/* render places from server side */}
            <div className="row">
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}></ServiceCard>)
                }
            </div>
        </section>

        </div>
    );
};

export default Service;