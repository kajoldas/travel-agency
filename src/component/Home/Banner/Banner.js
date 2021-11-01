
import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'


const Banner = () => {
    return (
        <div>
            <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="my-img d-block w-100"
      src="https://coastprivate.com/wp-content/uploads/2021/09/Darjeeling.jpg"
      alt="Darjeeling"
    />
    <Carousel.Caption>
      <h3>Darjeeling : Haven of Bengal</h3>
      <p>Well Known Tourist and Honeymoon Destination</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="my-img d-block w-100 "
      src="https://lp-cms-production.imgix.net/2021-09/shutterstock_1240673317.jpg?auto=format&fit=crop&sharp=10&vib=20&ixlib=react-8.6.4&w=850"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>Switzerland: The Heaven of Earth</h3>
      <p>home to numerous lakes, villages and the high peaks of the Alps</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className=" my-img  d-block w-100"
      src="https://alltourinfo.com/wp-content/uploads/2021/02/Coxs-Bazar-Sea-Beach.jpg"
    />
    <Carousel.Caption>
      <h3 className="text-black ">Cox's Bazar</h3>
      <p className="text-black ">Worlds Largest Sea Beach</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Banner;