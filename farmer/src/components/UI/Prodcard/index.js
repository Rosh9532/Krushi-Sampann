import React, { Component } from "react";
import { BiCalendar } from "react-icons/bi";
import { GoLocation } from "react-icons/go";
import { FaRupeeSign } from "react-icons/fa";

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
const Prodcard = (props) => {

    return (
      <Col >
      <Card  className="cmain">
        <Container>
          <Card.Img
            className="cimg"
            variant="top"
            src={props.imgsrc}
          />
          <Card.Body>
            <Card.Title className="ctitle">{props.name}</Card.Title>
            <Card.Text className="cdes">
              {props.desc}
            </Card.Text>
          </Card.Body>
          <ListGroup className={("list-group-flush", "cfeat")}>
            <ListGroupItem>Quantity Availaible : {props.quantity}</ListGroupItem>
            <ListGroupItem>Prize : <FaRupeeSign/>{props.prize} </ListGroupItem>
          </ListGroup>
          <Card.Body className="cbtm">
       
            <Row>
              <Col>
                <Card.Text className="cfootl">
                  <BiCalendar />{props.date}
                </Card.Text>
              </Col>
              <Col>
                <Card.Text className="cfootr">
                  <GoLocation />
                 {props.loc}
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
