import React from 'react'
import { BiCalendar } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { Card, Col, Row, Accordion, Button } from "react-bootstrap";
import "./concard.css";

const Concard = (props) => {
      return (
        <Accordion className="mbody" >
          <Card style={{width:'100%'}} fluid>
            <Card.Header className="cardh">{props.pname}</Card.Header>
            <Card.Body>
              <Card.Text>
                <Row>
                  <Col lg={3} className="boldtext">
                    Product Name :
                  </Col>
                  <Col lg={3}>{props.pname}</Col>
                </Row>
                <Row>
                  <Col lg={3} className="boldtext">
                    Description :
                  </Col>
                  <Col lg={6}>{props.desc}</Col>
                </Row>
                <Row>
                  <Col lg={3} className="boldtext">
                    Contract Duration :
                  </Col>
                  <Col lg={6}>{props.sdate} to {props.edate}</Col>
                </Row>
  
                <hr />
              </Card.Text>
              <Row>
                <Col lg={2}>
                  <Card.Text className="cfoot">
                    <BiCalendar />
                    {props.today}
                  </Card.Text>
                </Col>
                <Col lg={2}>
                  <Card.Text className="cfoot">
                    <GoLocation />
                    {props.distric}
                  </Card.Text>
                </Col>
                <Col lg={4}>
                  <Card.Text className="cfoot">
                    <FaUser /> {props.fname} {props.lname}
                  </Card.Text>
                </Col>
                <Col lg={4}>
                  <Accordion.Toggle
                    as={Button}
                    variant="outline-success"
                    eventKey="1"
                    className="btl"
                    style={{ float: "right" }}
                  >
                    View Details
                  </Accordion.Toggle>
                </Col>
              </Row>
  
              <Accordion.Collapse eventKey="1">
                <Card.Body>
                  <Row >
                  <Col lg={6} >
                  <Row>
                    <Col lg={6} className="boldtext">
                      Land area :
                    </Col>
                    <Col lg={6}>{props.area}</Col>
                  </Row>
                  <Row>
                    <Col lg={6} className="boldtext">
                      Production Capacity :
                    </Col>
                    <Col lg={6}>{props.pcap}</Col>
                  </Row>
                  <Row>
                    <Col lg={6} className="boldtext">
                      Contact :
                    </Col>
                    <Col lg={6}>{props.phoneno}</Col>
                  </Row>
                  </Col>
                  <Col lg={6} >
                  <Row>
                    <Col lg={6} className="boldtext">
                      Address :
                    </Col>
                    <Col lg={12}>{props.loc}</Col>
                  </Row>
                  </Col>
                  </Row>
                </Card.Body>
              </Accordion.Collapse>
            </Card.Body>
          </Card>
        </Accordion>
      );
    }
  export default Concard;