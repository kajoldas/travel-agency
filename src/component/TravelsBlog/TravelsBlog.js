import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';


const TravelsBlog = () => {
    return (
        <Container >
            <h1 className="text-center fw-bolder py-5"> Travels Blog </h1>
        <Row>
          <Col  xs={12} sm={6} md={6} ><iframe width="560" height="315" src="https://www.youtube.com/embed/vz7JxcJKTwY?start=21" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></Col>

          <Col  xs={12} sm={6} md={6}><iframe width="560" height="315" src="https://www.youtube.com/embed/ehmsJLZlCZ0?start=21" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></Col>
        </Row>
       
      </Container>
    );
};

export default TravelsBlog;