import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Detail = () => {
    const {id} = useParams();
    const[data, setData] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/places')
        .then(res => res.json())
        .then(data => setData(data))
    }, [])

    const ExactItem = data.filter(td=> td.id=== id)
    console.log(ExactItem);
    return (
      
        <div className="container mb-5 col-lg-4 col-sm-6">
            <h2>Book your appoint for:  {id}  </h2>
             <div className="card shadow-lg w-100 h-100 text-center rounded my-card">
                <div className="d-flex justify-content-center align-items-center h-75 p-2">
                    <img src={ExactItem[0]?.img} className="card-img-top h-75 w-75" alt="" />
                </div>
                <div className="card-body">
                    <h5 className="card-title">name: {ExactItem[0]?.name}</h5>
                    <p>{ExactItem[0]?.description}</p>
                </div>
            </div> 
        </div>
    );
};

export default Detail;