import React from 'react';
import Blog from '../Blog/Blog';
import Service from '../Service/Service';
import Banner from './Banner/Banner';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Service></Service>
            <Blog></Blog>
        </div>
    );
};

export default Home;