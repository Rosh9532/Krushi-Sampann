import React, { Component } from "react";
import { BiCalendar } from "react-icons/bi";
import { FaRupeeSign } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import {
  Card,
  ListGroup,
  ListGroupItem,
  Button,
  Col,
  Row,
  Container
} from "react-bootstrap";
import "./prodcard2.css";
const Prodcard = (props) => {
 
    return (
      <Col>
        <Card style={{ width: "18rem" }} className="cmain">
          <Container>
            <Card.Img
              className="cimg"
              variant="top"
              src={props.imgsrc}
            />
            <Card.Body>
              <Card.Title className="ctitle">{props.name}</Card.Title>
              <Card.Text className="cdes">
              {props.desc}...
              </Card.Text>
            </Card.Body>
            <ListGroup className={("list-group-flush", "cfeat")}>
              <ListGroupItem>Quantity Availaible : {props.quantity}</ListGroupItem>
              <ListGroupItem>Prize :<FaRupeeSign/>{props.prize}</ListGroupItem>
            </ListGroup>
            <Card.Body className="cbtm">
              <Row noGutters={true} fluid>
                <Col className="no-gutters">
                  <Button
                   variant="outline-dark"
                   className="bttn"
                    block
                    onClick={props.onDelClick}>

                    <MdDelete size="18" />
                    Delete
                  </Button>
                </Col>
                <Col>
                  <Button
                    variant="success"
                    className="bttn"
                    style={{ marginLeft: "5px" }}
                    block
                    onClick={props.onSaveClick}
                  >
                    View
                  </Button>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Card.Text className="cfoot">
                    <BiCalendar />{props.date}
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
