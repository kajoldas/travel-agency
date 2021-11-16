
import React from 'react';
import {  Card, CardGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Blog = () => {
    return (
        <div className=" container">
            <h2 className="text-center fw-bolder py-5">Travel Places</h2>
            


<CardGroup className="gap-5">
  <Card className="gap-4">
    <Card.Img variant="top" src="https://vivoclinic.com/wp-content/uploads/2021/04/Bangladesh.jpg" />
    <Card.Body>
      <Card.Title>Travel In Bangladesh</Card.Title>
      <Card.Text>
      Bangladesh, to the east of India on the Bay of Bengal, is a South Asian country marked by lush greenery and many waterways. Its Padma (Ganges), Meghna and Jamuna rivers create fertile plains, and travel by boat is common. On the southern coast
      </Card.Text>
      
       <button className="btn btn-success"> <a href="https://www.google.com/search?q=travel+to+bangladesh&oq=travel+to+bangladesh&aqs=chrome..69i57j0i512l7.4786j0j4&client=ms-android-xiaomi-rev1&sourceid=chrome-mobile&ie=UTF-8">See More</a> </button>
    
                        
    </Card.Body>

  </Card>
  <Card className="gap-4">
    <Card.Img variant="top" src="https://www.nationsonline.org/gallery/India/Delhi-India-Government.jpg" />
    <Card.Body>
      <Card.Title>Travel In India</Card.Title>
      <Card.Text>
      Kathryn was born and raised in Indonesia, North Way Indonesia He graduated from the University...
      </Card.Text>
      <button className="btn btn-success"> <a href="https://www.google.com/search?q=travel+to+india&oq=travel+to+bangladesh&aqs=chrome..69i57j0i512l7.4786j0j4&client=ms-android-xiaomi-rev1&sourceid=chrome-mobile&ie=UTF-8">See More</a> </button>
    </Card.Body>

  </Card>
  <Card className="gap-4">
    <Card.Img variant="top" src="https://www.planetware.com/wpimages/2020/02/best-time-to-visit-switzerland-best-season-to-visit.jpg" />
    <Card.Body>
      <Card.Title>Travel In Switzerland</Card.Title>
      <Card.Text>
      Switzerland is the Haven on Earth and, is also known for its ski resorts and hiking trails
      </Card.Text>
      <button className="btn btn-success"> <a href="https://www.google.com/search?q=travel+to+ Switzerland&oq=travel+to+bangladesh&aqs=chrome..69i57j0i512l7.4786j0j4&client=ms-android-xiaomi-rev1&sourceid=chrome-mobile&ie=UTF-8">See More</a> </button>
    </Card.Body>

  </Card>
</CardGroup>
            
        </div>
    );
};

export default Blog;