import React from "react";
import { Carousel, Container, Row, Col } from "react-bootstrap";
import "./Carousel.css";
const Carousell = (props) => {
 
    return (
      
      <Container>
        <Row>
          <Col xs={0} lg={1}>
            {" "}
          </Col>
          <Col>
            <Carousel className="cal">
              <Carousel.Item>
                <img
                  className="d-block w-100 " style={{maxHeight: '450px'}}
                  src="https://ssbcrackexams.com/wp-content/uploads/2020/09/farm-bill-2020.jpg"
                  alt="First slide"
                />
              
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100" style={{maxHeight: '450px'}}
                  src="https://s01.sgp1.cdn.digitaloceanspaces.com/article/138618-dibnrnyltu-1584696146.jpeg"
                  alt="Second slide"
                />

               
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100" style={{maxHeight: '450px'}}
                  src="https://www.pritikin.com/wp/wp-content/uploads/2013/11/best-whole-grains-weight-loss.jpg"
                  alt="Third slide"
                />

                 </Carousel.Item>
            </Carousel>
          </Col>
          <Col xs={0} lg={1}>
            {" "}
          </Col>
        </Row>
      </Container>
    );
  }

export default Carousell;
