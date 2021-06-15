import React, { Component } from "react";
import { BiCalendar } from "react-icons/bi";
import { GoLocation } from "react-icons/go";
import {
  Card,
  ListGroup,
  ListGroupItem,
  Button,
  Col,
  Row,
  Container
} from "react-bootstrap";
import "./style.css";


const Prodcard = (products) => {

    return (
      <Col md={6} xs={12} lg={3} >
      <Card  className="cmain">
        <Container>
          <Card.Img
            className="cimg"
            variant="top"
            src={products.imgsrc}
          />
          <Card.Body>
            <Card.Title className="ctitle">{products.name}</Card.Title>
            <Card.Text className="cdes">
              {products.desc}
            </Card.Text>
          </Card.Body>
          <ListGroup className={("list-group-flush", "cfeat")}>
            <ListGroupItem>Quantity Availaible : {products.quantity}</ListGroupItem>
            <ListGroupItem>Prize : {products.prize}</ListGroupItem>
          </ListGroup>
          <Card.Body className="cbtm">
       
            <Row>
              <Col>
                <Card.Text className="cfootl">
                  <BiCalendar />{products.date}
                </Card.Text>
              </Col>
              <Col>
                <Card.Text className="cfootr">
                  <GoLocation />
                 {products.loc}
                </Card.Text>
              </Col>
            </Row>
          </Card.Body>
        </Container>
      </Card>
      </Col>
    );
  
}
export default Prodcard;
