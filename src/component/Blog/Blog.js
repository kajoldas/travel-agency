import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';

const Blog = () => {
    return (
        <div className=" container">
            <h2 className="text-center fw-bolder py-5">Our Tour Offers</h2>
            


<CardGroup className="gap-5">
  <Card className="gap-4">
    <Card.Img variant="top" src="https://vivoclinic.com/wp-content/uploads/2021/04/Bangladesh.jpg" />
    <Card.Body>
      <Card.Title>Travel In Bangladesh</Card.Title>
      <Card.Text>
      Bangladesh is the gift of nature
      </Card.Text>
    </Card.Body>

  </Card>
  <Card className="gap-4">
    <Card.Img variant="top" src="https://www.nationsonline.org/gallery/India/Delhi-India-Government.jpg" />
    <Card.Body>
      <Card.Title>Travel In India</Card.Title>
      <Card.Text>
      Kathryn was born and raised in Indonesia, North Way Indonesia He graduated from the University...
      </Card.Text>
    </Card.Body>

  </Card>
  <Card className="gap-4">
    <Card.Img variant="top" src="https://www.planetware.com/wpimages/2020/02/best-time-to-visit-switzerland-best-season-to-visit.jpg" />
    <Card.Body>
      <Card.Title>Travel In Switzerland</Card.Title>
      <Card.Text>
      Switzerland is the Haven on Earth and, is also known for its ski resorts and hiking trails
      </Card.Text>
    </Card.Body>

  </Card>
</CardGroup>
            
        </div>
    );
};

export default Blog;