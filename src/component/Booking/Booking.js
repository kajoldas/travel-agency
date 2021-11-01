import React from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const {Serviceid} = useParams();
    return (
        <div>
            <h2>This is booking: {Serviceid}</h2>
        </div>
    );
};

export default Booking;