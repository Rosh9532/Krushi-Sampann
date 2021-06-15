import React, { Component } from "react";
import { BiCalendar } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { Card, Col, Row, Button } from "react-bootstrap";
import "./reqCard.css";
const ReqCard = (props) =>{
    return (
      <Card className="mbody">
        <Card.Header className="cardh">Product Name</Card.Header>
        <Card.Body>
          <Card.Text>
            <Row>
              <Col lg={6} className="boldtext">
                Product Name :
              </Col>
              <Col lg={6}>{props.prodName}</Col>
            </Row>
            
            <Row>
              <Col lg={6} className="boldtext">
                Expectecd Price :
              </Col>
              <Col lg={6}>{props.expPrice}</Col>
            </Row>

            <Row>
              <Col lg={6} className="boldtext">
                Expected Quantity :
              </Col>
              <Col lg={6}>{props.expQuant}</Col>
            </Row>

            <Row>
              <Col lg={6} className="boldtext">
                Contact :
              </Col>
              <Col lg={6}>{props.phoneNo || "9081111111"}</Col>
            </Row>

            <hr />
          </Card.Text>
          <Row>
            <Col lg={4}>
              <Card.Text className="cfoot">
                <BiCalendar />
                {props.date}
              </Card.Text>
            </Col>
            <Col lg={4}>
              <Card.Text className="cfoot">
                <GoLocation />
                {props.loc || "City"}
              </Card.Text>
            </Col>
            <Col lg={4}>
              <Card.Text className="cfoot">
                <FaUser /> {props.name || "Buyer Name"}
              </Card.Text>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    );
}
export default ReqCard;
